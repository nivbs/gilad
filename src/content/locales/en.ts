import type { Edition } from "../types";

export const enEdition: Edition = {
  masthead: {
    title: "The Gilad Times",
    subtitle: "De Gilad Krant",
    tagline: "Special Edition — For One Reader Only",
    volume: "Vol. 25 — Birthday Edition",
    printedIn: "Printed in Tel Aviv & Rotterdam",
    dateLine: "Happy Birthday, Gilad",
  },
  leadStory: {
    kicker: "EXCLUSIVE",
    headline:
      "Two Men Meet on Pinocchio Street; Love Outlasts the Closet, the Cover Stories, and One Electric Scooter",
    byline: "By Niv, Editor-in-Chief of This Entire Newspaper",
    lede:
      "On February 6, 2025, in Tel Aviv, Gilad and Niv met on Pinocchio Street. Neither had ever been in a relationship with a man. Both were in the closet. Neither has looked back since.",
    body: [
      "What followed was not a slow-burn romance in the style of respectable journalism. It was immediate, daily, and slightly illegal in the emotional sense — the kind of story that does not fit neatly into a byline until you are finally allowed to tell it.",
      "For more than a year and a half, they built a life in secret: best friends to the world, partners in truth. Barcelona was invented. Families were told carefully edited versions. Friends received a cover story polished enough for print.",
      "On June 12, 2026, the story went public. The closet door opened. The love did not change — only the headline did.",
    ],
    photoCaption: "Fig. 1 — Pinocchio Street, Tel Aviv, 6 February 2025",
  },
  dispatches: [
    {
      id: "dispatch-feb-6-2025",
      date: "6 February 2025",
      headline: "First Encounter on Pinocchio Street",
      body:
        "Gilad and Niv met in Tel Aviv and spent every single day together until Gilad left. The beginning of everything — unedited, unannounced, unforgettable.",
      kicker: "Tel Aviv",
    },
    {
      id: "dispatch-feb-11-2025",
      date: "11 February 2025",
      headline: "The First Goodbye",
      body:
        "They said goodbye for the first time and understood, without needing to say it out loud, that they would stay together. The love was already endless.",
      kicker: "Dispatch",
    },
    {
      id: "dispatch-late-feb-2025",
      date: "Late February 2025",
      headline: "Barcelona Cover Story Filed",
      body:
        "A joint flight to Barcelona provided the official narrative for friends: how they met, when they met, why they met. The real story involved a dating app and two closets. This newspaper prefers the truth.",
      kicker: "Investigation",
    },
    {
      id: "dispatch-mar-15-2025",
      date: "15 March 2025",
      headline: "Scooter Incident Confirms Long-Term Commitment",
      body:
        "After a party, Niv — drunk, on a video call with Gilad — rode an electric scooter and had an accident. In that moment, Niv understood this was not a fling. This was for life.",
      kicker: "Breaking",
      breaking: true,
    },
    {
      id: "dispatch-jun-aug-2025",
      date: "June–August 2025",
      headline: "Secret Sublets in Tel Aviv",
      body:
        "They lived together in a series of sublets while hiding the fact from both families and friends. To everyone else, they were best friends. To each other, they were home.",
      kicker: "Undercover",
    },
    {
      id: "dispatch-sep-2025",
      date: "September 2025",
      headline: "First Netherlands Visit — Still \"Just Friends\"",
      body:
        "Niv flew to the Netherlands to meet Gilad's family and friends for the first time, officially as his friend. They smoked a lot of weed, attempted truffles for psychoactive adventures, and had an unreasonable amount of fun.",
      kicker: "Foreign Desk",
    },
    {
      id: "dispatch-dec-2025-jan-2026",
      date: "December 2025 – January 2026",
      headline: "Month-Long European Tour",
      body:
        "London → Netherlands → Denmark → Netherlands. They drank a lot, spent a lot of money, and made a lot of memories. Financial journalism would not approve. Love journalism gives it five stars.",
      kicker: "Travel",
    },
    {
      id: "dispatch-jun-2026",
      date: "June 2026",
      headline: "Studies Complete; Ben Gurion 50 Becomes Home",
      body:
        "Gilad officially finished his studies. They moved into the best apartment ever at Ben Gurion 50, Tel Aviv. Living together, openly in their private world, in love.",
      kicker: "Home",
    },
    {
      id: "dispatch-jun-12-2026",
      date: "12 June 2026",
      headline: "Officially Out of the Closet",
      body:
        "The cover story era ended. No more \"best friends.\" No more edited narratives for families and friends. On this day, Gilad and Niv came out officially — together, as they always were underneath.",
      kicker: "Breaking",
      breaking: true,
    },
  ],
  nicknames: [
    { name: "Giladi" },
    { name: "Gili" },
    { name: "Gili Bili Shmili" },
    { name: "Gili Ben Shmuli" },
    { name: "Gili Ben Perzi" },
    { name: "Gil Bish" },
    { name: "Shil Mil Chili", note: "The most random. The most correct." },
  ],
  hebrewNicknames: [
    { hebrew: "חיים טובים", transliteration: "Chaim Tovim" },
    { hebrew: "אהבה שלי", transliteration: "Ahava Sheli — My Love" },
    {
      hebrew: "חיים שלי",
      transliteration: "Chaim Sheli — My Life",
      note:
        "Gilad hates this one. His Israeli aunt calls everyone חיים שלי, which gives him cringe. Niv loves it anyway. The newspaper sides with Niv.",
    },
  ],
  sidebarColumns: [
    {
      title: "Sports Desk",
      kicker: "Feyenoord & Left-Wing Football",
      items: [
        "Primary allegiance: Feyenoord Rotterdam. Non-negotiable.",
        "If forced to choose an Israeli club: Hapoel Tel Aviv — not for glory, but because they are left-wing and so is he. Ideology over trophies.",
        "Also competes in: football, tennis, running, voetbaltennis, volleyball, and anything involving a ball and mild suffering.",
        "Extremely sporty. Extremely handsome. The sports desk cannot explain the toenail situation (see below).",
      ],
    },
    {
      title: "Chocolate Investigation",
      kicker: "A Small but Serious Addiction",
      items: [
        "Subject loves chocolate with a devotion usually reserved for breaking news.",
        "Post-joint consumption can reach non-stop levels. Editors have filed no complaint.",
        "Evening preference: meat. Niv's preference: not meat. The household remains diplomatic.",
      ],
    },
    {
      title: "Toenail Brief",
      kicker: "A Kind Footnote",
      items: [
        "Gilad is, objectively, extremely handsome. His toenails, however, have chosen a different editorial line.",
        "This newspaper loves him entirely — including the tough nails that refuse to cooperate.",
        "Beauty is not perfection. Sometimes it is a man who runs marathons and still loses to his own feet.",
      ],
    },
  ],
  editorLetter: {
    headline: "Letter from the Editor",
    paragraphs: [
      { text: "Gilad —", emphasis: "opening" },
      {
        text:
          "You are 25 today. You are a journalist who covers one of the hardest stories in the world, and somehow you also became the best story of my life.",
      },
      {
        text:
          "From Pinocchio Street to Ben Gurion 50, from secret sublets to coming out on June 12 — every chapter with you has been worth printing.",
      },
      {
        text:
          "I made you this newspaper because you deserve to be the headline. Not the footnote. Not the cover story we invented for other people. The real one.",
      },
      {
        text:
          "Happy birthday, Giladi. Gili. Gili Bili Shmili. Shil Mil Chili. חיים שלי — even if you cringe.",
        emphasis: "highlight",
      },
      { text: "I love you.", emphasis: "closing" },
    ],
    signoff: "— Niv",
  },
  blessing: {
    kicker: "Special Insert",
    openingLine:
      "Giladi, Gili, Gili Bili Shmili, love of my heart, love of my life, my life — happy birthday!",
    paragraphs: [
      {
        text:
          "What can I wish for a man who already won the best partner in the world? I wish that life will only shine on you with positive light.",
      },
      {
        text:
          "I wish you stay happy, joyful, healthy, loving and loved. That money never becomes an obstacle for you — and if it does, remember that is what family is for (and if you ever want us to be family, that requires a ring…).",
      },
      {
        text:
          "May you succeed, my love — socially here in Israel, in the relationship that will only grow, God willing, and professionally, yielding returns and growing with work from the Netherlands and work from Israel. Giladi, I truly believe in you! You can do so much more than you believe. I see your progress every day and I am so happy for you.",
      },
      {
        text:
          "I wish for us to stay together, to develop and advance on one united path, together and forever. That our love never fades, because only we know how strong it is.",
      },
      {
        text:
          "I wish for you, Giladi, to remain such an amazing person — handsome in every sense of the word, charismatic, a true Renaissance man, someone wonderful to be around, kind, generous, happy in the joy of others, smart and with sophisticated humor — and most importantly, a real, modest man. That is part of your beauty that makes you even more handsome and more successful.",
      },
      {
        text:
          "My Giladi, you are the gift of my life, the point of light I did not know I needed. I wish you only good, and I am sure that with the right motivation and wise decisions you will go far.",
      },
      {
        text:
          "I am always here for you — in your jubilee year, when good things come your way. And remember: you are closer to 30 than to 20. Mazel tov!",
        emphasis: "highlight",
      },
    ],
    signoff: "Yours always, forever — Nivi / Niv Lil",
  },
  colophon: {
    lines: [
      "Printed at Ben Gurion 50, Tel Aviv",
      "Together for more than a year and a half",
      "Edition of one — for Gilad, from Niv",
      "Photographs forthcoming in the next issue",
    ],
  },
  ui: {
    openEdition: "Open the edition",
    skip: "Skip",
    specialEditionAwaits: "A special edition awaits",
    leadStory: "Lead Story",
    continueToTimeline: "Continue to the timeline →",
    dispatches: "Dispatches",
    fieldReports: "Field Reports",
    index: "Index",
    timeline: "Timeline",
    readFiling: "Read filing →",
    closeFiling: "Close filing",
    previousDispatch: "Previous dispatch",
    nextDispatch: "Next dispatch",
    letterFromEditor: "Letter from the editor →",
    backToIndex: "Back to index",
    backToLetter: "Back to letter ↑",
    sidebar: "Sidebar",
    supplementaryReporting: "Supplementary Reporting",
    glossary: "Glossary",
    approvedNicknames: "Approved Nicknames",
    hebrewEdition: "Hebrew Edition",
    opEd: "Op-Ed",
    specialInsert: "Special Insert",
    blessingHeadline: "Birthday Blessing",
    languageEdition: "Edition Language",
  },
};
