"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import {
  editionSoundtrack,
  type SoundtrackTrack,
  type SoundtrackTrackId,
} from "@/content/soundtrack";

type UseEditionSoundtrackOptions = {
  isOpen: boolean;
};

function getTrackById(id: SoundtrackTrackId): SoundtrackTrack {
  const track = editionSoundtrack.tracks.find((entry) => entry.id === id);
  if (!track) {
    throw new Error(`Unknown soundtrack track: ${id}`);
  }
  return track;
}

function resolveActiveTrackFromBoundingBox(): SoundtrackTrackId {
  const threshold = window.innerHeight * editionSoundtrack.sectionThresholdRatio;
  let activeTrackId: SoundtrackTrackId = "opening";

  for (const track of editionSoundtrack.tracks) {
    const section = document.getElementById(track.sectionId);
    if (!section) {
      continue;
    }

    if (section.getBoundingClientRect().top <= threshold) {
      activeTrackId = track.id;
    }
  }

  return activeTrackId;
}

export function useEditionSoundtrack({ isOpen }: UseEditionSoundtrackOptions) {
  const [isMuted, setIsMuted] = useState(true);
  const [isEnabled, setIsEnabled] = useState(false);
  const audioElementsRef = useRef<Map<SoundtrackTrackId, HTMLAudioElement>>(new Map());
  const activeTrackIdRef = useRef<SoundtrackTrackId | null>(null);
  const fadeFrameRef = useRef<number | null>(null);
  const isMutedRef = useRef(true);
  const isEnabledRef = useRef(false);
  const isTabVisibleRef = useRef(true);
  const pendingAutoplayRef = useRef(false);
  const hasStartedPlaybackRef = useRef(false);
  const intersectingSectionIdsRef = useRef<Set<string>>(new Set());

  const cancelFade = useCallback(() => {
    if (fadeFrameRef.current !== null) {
      window.cancelAnimationFrame(fadeFrameRef.current);
      fadeFrameRef.current = null;
    }
  }, []);

  const pauseAllTracks = useCallback(() => {
    for (const audio of audioElementsRef.current.values()) {
      audio.pause();
    }
  }, []);

  const resolveActiveTrackId = useCallback((): SoundtrackTrackId => {
    if (intersectingSectionIdsRef.current.size === 0) {
      return resolveActiveTrackFromBoundingBox();
    }

    let activeTrackId: SoundtrackTrackId = "opening";

    for (const track of editionSoundtrack.tracks) {
      if (intersectingSectionIdsRef.current.has(track.sectionId)) {
        activeTrackId = track.id;
      }
    }

    return activeTrackId;
  }, []);

  const fadeToTrack = useCallback(
    (nextTrackId: SoundtrackTrackId) => {
      if (!isEnabledRef.current || isMutedRef.current || !isTabVisibleRef.current) {
        activeTrackIdRef.current = nextTrackId;
        return;
      }

      const previousTrackId = activeTrackIdRef.current;
      if (previousTrackId === nextTrackId) {
        return;
      }

      cancelFade();

      const previousAudio = previousTrackId
        ? audioElementsRef.current.get(previousTrackId)
        : undefined;
      const nextTrack = getTrackById(nextTrackId);
      const nextAudio = audioElementsRef.current.get(nextTrackId);

      if (!nextAudio) {
        activeTrackIdRef.current = nextTrackId;
        return;
      }

      activeTrackIdRef.current = nextTrackId;
      nextAudio.currentTime = nextTrack.startOffset;
      nextAudio.volume = 0;

      const start = performance.now();
      const duration = editionSoundtrack.crossfadeMs;
      const targetVolume = editionSoundtrack.volume;
      const previousStartVolume = previousAudio?.volume ?? 0;

      const step = (timestamp: number) => {
        const progress = Math.min((timestamp - start) / duration, 1);

        if (previousAudio) {
          previousAudio.volume = previousStartVolume * (1 - progress);
        }

        nextAudio.volume = targetVolume * progress;

        if (progress < 1) {
          fadeFrameRef.current = window.requestAnimationFrame(step);
          return;
        }

        if (previousAudio) {
          previousAudio.pause();
          previousAudio.volume = 0;
        }

        fadeFrameRef.current = null;
      };

      void nextAudio.play().catch(() => undefined);
      fadeFrameRef.current = window.requestAnimationFrame(step);
      hasStartedPlaybackRef.current = true;
    },
    [cancelFade],
  );

  const playActiveTrack = useCallback(
    (trackId: SoundtrackTrackId, immediate = false) => {
      pauseAllTracks();
      cancelFade();

      const track = getTrackById(trackId);
      const audio = audioElementsRef.current.get(trackId);
      if (!audio || !isEnabledRef.current || isMutedRef.current || !isTabVisibleRef.current) {
        return;
      }

      activeTrackIdRef.current = trackId;
      audio.currentTime = track.startOffset;

      if (immediate) {
        audio.volume = editionSoundtrack.volume;
        void audio.play().catch(() => undefined);
        hasStartedPlaybackRef.current = true;
        return;
      }

      audio.volume = 0;
      void audio.play().catch(() => undefined);

      const start = performance.now();
      const duration = editionSoundtrack.crossfadeMs;
      const step = (timestamp: number) => {
        const progress = Math.min((timestamp - start) / duration, 1);
        audio.volume = editionSoundtrack.volume * progress;

        if (progress < 1) {
          fadeFrameRef.current = window.requestAnimationFrame(step);
          return;
        }

        fadeFrameRef.current = null;
      };

      fadeFrameRef.current = window.requestAnimationFrame(step);
      hasStartedPlaybackRef.current = true;
    },
    [cancelFade, pauseAllTracks],
  );

  const applyActiveTrack = useCallback(
    (nextTrackId: SoundtrackTrackId, immediate = false) => {
      if (!isEnabledRef.current || isMutedRef.current || !isTabVisibleRef.current) {
        activeTrackIdRef.current = nextTrackId;
        return;
      }

      if (
        nextTrackId === activeTrackIdRef.current &&
        hasStartedPlaybackRef.current &&
        !immediate
      ) {
        return;
      }

      if (!hasStartedPlaybackRef.current || immediate) {
        playActiveTrack(nextTrackId, true);
        return;
      }

      fadeToTrack(nextTrackId);
    },
    [fadeToTrack, playActiveTrack],
  );

  const syncActiveSection = useCallback(() => {
    if (!isOpen) {
      return;
    }

    applyActiveTrack(resolveActiveTrackId());
  }, [applyActiveTrack, isOpen, resolveActiveTrackId]);

  const startPendingAutoplay = useCallback(() => {
    if (!pendingAutoplayRef.current || !isEnabledRef.current || isMutedRef.current) {
      return;
    }

    pendingAutoplayRef.current = false;
    applyActiveTrack(resolveActiveTrackId(), true);
  }, [applyActiveTrack, resolveActiveTrackId]);

  const enableWithGesture = useCallback(() => {
    setIsEnabled(true);
    setIsMuted(false);
    isEnabledRef.current = true;
    isMutedRef.current = false;
    pendingAutoplayRef.current = true;

    if (audioElementsRef.current.size > 0) {
      startPendingAutoplay();
    }
  }, [startPendingAutoplay]);

  const toggleMute = useCallback(() => {
    if (!isEnabledRef.current) {
      enableWithGesture();
      return;
    }

    if (isMutedRef.current) {
      setIsMuted(false);
      isMutedRef.current = false;
      applyActiveTrack(resolveActiveTrackId(), true);
      return;
    }

    setIsMuted(true);
    isMutedRef.current = true;
    cancelFade();
    pauseAllTracks();
  }, [applyActiveTrack, cancelFade, enableWithGesture, pauseAllTracks, resolveActiveTrackId]);

  useEffect(() => {
    isMutedRef.current = isMuted;
  }, [isMuted]);

  useEffect(() => {
    isEnabledRef.current = isEnabled;
  }, [isEnabled]);

  useEffect(() => {
    if (!isOpen) {
      pendingAutoplayRef.current = false;
      hasStartedPlaybackRef.current = false;
      activeTrackIdRef.current = null;
      intersectingSectionIdsRef.current.clear();
      return;
    }

    const audioMap = new Map<SoundtrackTrackId, HTMLAudioElement>();

    for (const track of editionSoundtrack.tracks) {
      const audio = new Audio(track.src);
      audio.preload = "auto";
      audio.volume = 0;

      audio.addEventListener("ended", () => {
        if (activeTrackIdRef.current !== track.id) {
          return;
        }

        audio.currentTime = track.startOffset;
        if (isEnabledRef.current && !isMutedRef.current && isTabVisibleRef.current) {
          void audio.play().catch(() => undefined);
        }
      });

      audioMap.set(track.id, audio);
    }

    audioElementsRef.current = audioMap;
    startPendingAutoplay();

    return () => {
      cancelFade();
      for (const audio of audioMap.values()) {
        audio.pause();
        audio.src = "";
      }
      audioElementsRef.current.clear();
    };
  }, [cancelFade, isOpen, startPendingAutoplay]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const sections = editionSoundtrack.tracks
      .map((track) => document.getElementById(track.sectionId))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            intersectingSectionIdsRef.current.add(entry.target.id);
          } else {
            intersectingSectionIdsRef.current.delete(entry.target.id);
          }
        }

        syncActiveSection();
      },
      {
        root: null,
        threshold: 0,
        rootMargin: "-25% 0px -55% 0px",
      },
    );

    for (const section of sections) {
      observer.observe(section);
    }

    const handleScroll = () => {
      syncActiveSection();
    };

    const handleResize = () => {
      syncActiveSection();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    requestAnimationFrame(() => {
      syncActiveSection();
    });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen, syncActiveSection]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleVisibilityChange = () => {
      const isVisible = document.visibilityState === "visible";
      isTabVisibleRef.current = isVisible;

      if (!isEnabledRef.current || isMutedRef.current) {
        return;
      }

      if (isVisible) {
        applyActiveTrack(activeTrackIdRef.current ?? resolveActiveTrackId(), true);
        return;
      }

      cancelFade();
      pauseAllTracks();
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [applyActiveTrack, cancelFade, isOpen, pauseAllTracks, resolveActiveTrackId]);

  return {
    isMuted: !isEnabled || isMuted,
    toggleMute,
    enableWithGesture,
  };
}
