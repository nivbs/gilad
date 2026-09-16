export type Dispatch = {
  id: string;
  date: string;
  headline: string;
  body: string;
  kicker?: string;
};

export type Nickname = {
  name: string;
  note?: string;
};

export type HebrewNickname = {
  hebrew: string;
  transliteration: string;
  note?: string;
};

export type SidebarColumn = {
  title: string;
  kicker?: string;
  items: string[];
};

export type Edition = {
  masthead: {
    title: string;
    subtitle: string;
    tagline: string;
    volume: string;
    printedIn: string;
    dateLine: string;
  };
  leadStory: {
    kicker: string;
    headline: string;
    byline: string;
    lede: string;
    body: string[];
    photoCaption: string;
  };
  dispatches: Dispatch[];
  sidebarColumns: SidebarColumn[];
  nicknames: Nickname[];
  hebrewNicknames: HebrewNickname[];
  editorLetter: {
    headline: string;
    paragraphs: string[];
    signoff: string;
  };
  colophon: {
    lines: string[];
  };
};
