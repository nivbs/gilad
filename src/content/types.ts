export type Locale = "en" | "he" | "nl";

export type ParagraphEmphasis = "opening" | "highlight" | "closing" | "signature";

export type LetterParagraph = {
  text: string;
  emphasis?: ParagraphEmphasis;
};

export type BlessingParagraph = {
  text: string;
  emphasis?: "opening" | "highlight" | "closing";
};

export type DispatchGag =
  | "grindr"
  | "scooter"
  | "pride"
  | "heart"
  | "airplane"
  | "key"
  | "weed"
  | "flags"
  | "home";

export type Dispatch = {
  id: string;
  date: string;
  headline: string;
  body: string;
  kicker?: string;
  breaking?: boolean;
  gags?: DispatchGag[];
};

export type LifePhoto = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  placeholder?: boolean;
};

export type LifeYearChapter = {
  id: string;
  year: number;
  kicker?: string;
  headline: string;
  photos: LifePhoto[];
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

export type UiStrings = {
  openEdition: string;
  skip: string;
  specialEditionAwaits: string;
  leadStory: string;
  continueToTimeline: string;
  lifeChronicle: string;
  lifeChronicleSubtitle: string;
  continueToLoveStory: string;
  photoDesk: string;
  yearsOnRecord: string;
  dispatches: string;
  fieldReports: string;
  index: string;
  timeline: string;
  readFiling: string;
  closeFiling: string;
  previousDispatch: string;
  nextDispatch: string;
  letterFromEditor: string;
  backToIndex: string;
  backToLetter: string;
  sidebar: string;
  supplementaryReporting: string;
  glossary: string;
  approvedNicknames: string;
  hebrewEdition: string;
  opEd: string;
  specialInsert: string;
  blessingHeadline: string;
  languageEdition: string;
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
  lifeTimeline: {
    kicker: string;
    headline: string;
    dek: string;
    chapters: LifeYearChapter[];
  };
  dispatches: Dispatch[];
  sidebarColumns: SidebarColumn[];
  nicknames: Nickname[];
  hebrewNicknames: HebrewNickname[];
  editorLetter: {
    headline: string;
    paragraphs: LetterParagraph[];
    signoff: string;
  };
  blessing: {
    kicker: string;
    openingLine: string;
    paragraphs: BlessingParagraph[];
    signoff: string;
  };
  colophon: {
    lines: string[];
  };
  ui: UiStrings;
};
