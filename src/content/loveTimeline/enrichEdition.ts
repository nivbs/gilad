import {
  correspondencePhotoIds,
  dispatchPhotoMap,
  getLovePhotos,
} from "@/content/loveTimeline/photoCatalog";
import type { Dispatch, Edition } from "@/content/types";

function attachDispatchPhotos(dispatches: Dispatch[]): Dispatch[] {
  return dispatches.map((dispatch) => {
    const photoIds = dispatchPhotoMap[dispatch.id];
    if (!photoIds) {
      return dispatch;
    }
    return {
      ...dispatch,
      photos: getLovePhotos(photoIds),
    };
  });
}

export function enrichEdition(edition: Edition): Edition {
  return {
    ...edition,
    dispatches: attachDispatchPhotos(edition.dispatches),
    correspondence: {
      ...edition.correspondence,
      photos: getLovePhotos(correspondencePhotoIds),
    },
  };
}
