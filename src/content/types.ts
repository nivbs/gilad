export type Locale = "en" | "he" | "nl";

export type ParagraphEmphasis = "opening" | "highlight" | "closing" | "signature";

export type LetterParagraph = {
  text: string;
  emphasis?: ParagraphEmphasis;
};

export type TmiCopy = {
  text: string;
  tmi?: boolean;
};

export type BlessingParagraph = {
  text: string;
  emphasis?: "opening" | "highlight" | "closing";
  tmi?: boolean;
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
  body: TmiCopy[];
  kicker?: string;
  breaking?: boolean;
  gags?: DispatchGag[];
  photos?: LifePhoto[];
};

export type LifePhoto = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  placeholder?: boolean;
  tmi?: boolean;
  objectFit?: "cover" | "contain";
};

export type LifeYearChapter = {
  id: string;
  year: number;
  yearLabel?: string;
  kicker?: string;
  headline?: string;
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
  items: TmiCopy[];
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
  correspondenceDesk: string;
  longDistance: string;
  glossary: string;
  approvedNicknames: string;
  hebrewEdition: string;
  opEd: string;
  specialInsert: string;
  blessingHeadline: string;
  languageEdition: string;
  tmiVersion: string;
  tmiUnlock: string;
  tmiLocked: string;
  tmiOn: string;
  tmiLock: string;
  tmiPasswordKicker: string;
  tmiPasswordHeadline: string;
  tmiPasswordDek: string;
  tmiPasswordPlaceholder: string;
  tmiPasswordSubmit: string;
  tmiPasswordWrong: string;
  tmiPasswordSuccess: string;
  tmiPasswordClose: string;
  soundtrackMute: string;
  soundtrackUnmute: string;
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
    photoSrc: string;
    photoAlt: string;
    photoCaption: string;
  };
  lifeTimeline: {
    kicker: string;
    headline: string;
    dek: string;
    chapters: LifeYearChapter[];
  };
  dispatches: Dispatch[];
  correspondence: {
    kicker: string;
    headline: string;
    dek: string;
    photos: LifePhoto[];
  };
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
