import { nlLifeTimeline } from "../lifeTimeline/nl";
import type { Edition } from "../types";

export const nlEdition: Edition = {
  masthead: {
    title: "De Gilad Krant",
    subtitle: "The Gilad Times",
    tagline: "Speciale Editie — Voor één lezer alleen",
    volume: "Jrg. 25 — Verjaardagseditie",
    printedIn: "Gedrukt in Tel Aviv & Rotterdam",
    dateLine: "Van harte gefeliciteerd, Gilad",
  },
  leadStory: {
    kicker: "EXCLUSIEF",
    headline:
      "Twee mannen ontmoeten elkaar op Pinocchiostraat; liefde overleeft de kast, de dekmantels en één elektrische step",
    byline: "Door Niv, hoofdredacteur van deze hele krant",
    lede:
      "Op 6 februari 2025, in Tel Aviv, ontmoetten Gilad en Niv elkaar op Pinocchiostraat. Geen van beiden had ooit een relatie met een man gehad. Beiden zaten in de kast. Sindsdien hebben ze niet meer omgekeken.",
    body: [
      "Wat volgde was geen slow-burn romance in de stijl van respectabele journalistiek. Het was direct, dagelijks, en een beetje illegaal in emotionele zin — het soort verhaal dat niet netjes in een kop past tot je het eindelijk mag vertellen.",
      "Meer dan anderhalf jaar bouwden ze een leven in het geheim: beste vrienden voor de wereld, partners in waarheid. Barcelona werd uitgevonden. Families kregen zorgvuldig bewerkte versies. Vrienden kregen een dekmantelverhaal netjes genoeg voor de pers.",
      "Op 12 juni 2026 ging het verhaal publiek. De kastdeur ging open. De liefde veranderde niet — alleen de kop.",
    ],
    photoSrc: "/lead-story/birthday-hat.jpg",
    photoAlt: "Gilad met een roze verjaardagshoed op de verjaardag van Nivs moeder",
    photoCaption:
      "Januari 2026. Gilad woont de verjaardag van Nivs moeder bij en wordt gefotografeerd met de hoed. De verdediging wenst geen commentaar.",
  },
  lifeTimeline: nlLifeTimeline,
  dispatches: [
    {
      id: "dispatch-feb-6-2025",
      date: "6 februari 2025",
      headline: "Eerste ontmoeting op Pinocchiostraat",
            body: [
        {
          text:
            "Gilad en Niv ontmoetten elkaar in Tel Aviv en brachten elke dag samen door tot Gilad vertrok. Het begin van alles — onbewerkt, onaangekondigd, onvergetelijk.",
        },
      ],
      kicker: "Tel Aviv",
      gags: ["grindr"],
    },
    {
      id: "dispatch-feb-11-2025",
      date: "11 februari 2025",
      headline: "Het eerste afscheid",
            body: [
        {
          text:
            "Ze namen voor het eerst afscheid en begrepen, zonder het hardop te zeggen, dat ze bij elkaar zouden blijven. De liefde was al eindeloos.",
        },
      ],
      kicker: "Bericht",
      gags: ["heart"],
    },
    {
      id: "dispatch-late-feb-2025",
      date: "Eind februari 2025",
      headline: "Dekmantelverhaal Barcelona ingediend",
            body: [
        {
          text:
            "Een gezamenlijke vlucht naar Barcelona leverde het officiële verhaal voor vrienden: hoe ze elkaar ontmoetten, wanneer, waarom. Het echte verhaal ging over een datingapp en twee kasten. Deze krant geeft de voorkeur aan de waarheid.",
        },
      ],
      kicker: "Onderzoek",
      gags: ["grindr", "airplane"],
    },
    {
      id: "dispatch-mar-15-2025",
      date: "15 maart 2025",
      headline: "Stepincident bevestigt langetermijnverbintenis",
            body: [
        {
          text:
            "Na een feest — dronken, op videobel met Gilad — reed Niv op een elektrische step en had een ongeluk. In dat moment begreep Niv dat dit geen vluchtige romance was. Dit was voor het leven.",
        },
      ],
      kicker: "Laatste nieuws",
      breaking: true,
      gags: ["scooter"],
    },
    {
      id: "dispatch-jun-aug-2025",
      date: "juni–augustus 2025",
      headline: "Geheime sublets in Tel Aviv",
            body: [
        {
          text:
            "Ze woonden samen in een reeks sublets terwijl ze dat verborgen hielden voor beide families en vrienden. Voor de buitenwereld waren ze beste vrienden. Voor elkaar waren ze thuis.",
        },
      ],
      kicker: "Undercover",
      gags: ["key"],
    },
    {
      id: "dispatch-sep-2025",
      date: "september 2025",
      headline: "Eerste bezoek aan Nederland — nog steeds \"alleen vrienden\"",
            body: [
        {
          text:
            "Niv vloog naar Nederland om voor het eerst Gilads familie en vrienden te ontmoeten, officieel als gewoon een vriend.",
        },
        {
          text:
            "Ze rookten veel wiet, probeerden truffels voor psychoactieve avonturen, en hadden belachelijk veel pret.",
          tmi: true,
        },
      ],
      kicker: "Buitenland",
      gags: ["weed"],
    },
    {
      id: "dispatch-dec-2025-jan-2026",
      date: "december 2025 – januari 2026",
      headline: "Maandlange Europese tour",
            body: [
        {
          text:
            "Londen → Nederland → Denemarken → Nederland. Ze dronken veel, gaven veel geld uit, en maakten veel herinneringen. Financiële journalistiek zou het niet goedkeuren. Liefdesjournalistiek geeft vijf sterren.",
        },
      ],
      kicker: "Reizen",
      gags: ["flags"],
    },
    {
      id: "dispatch-jun-2026",
      date: "juni 2026",
      headline: "Studies afgerond; Ben Gurion 50 wordt thuis",
            body: [
        {
          text:
            "Gilad rondde officieel zijn studie af. Ze verhuisden naar het beste appartement ooit op Ben Gurion 50, Tel Aviv. Samenwonend, openlijk in hun privéwereld, verliefd.",
        },
      ],
      kicker: "Thuis",
      gags: ["home"],
    },
    {
      id: "dispatch-jun-12-2026",
      date: "12 juni 2026",
      headline: "Officieel uit de kast",
            body: [
        {
          text:
            "Het tijdperk van dekmantelverhalen eindigde. Geen \"beste vrienden\" meer. Geen bewerkte verhalen meer voor families en vrienden. Op deze dag kwamen Gilad en Niv officieel uit de kast — samen, zoals ze altijd al waren onder de oppervlakte.",
        },
      ],
      kicker: "Laatste nieuws",
      breaking: true,
      gags: ["pride"],
    },
    {
      id: "dispatch-rome-2026",
      date: "Eind juni – begin juli 2026",
      headline: "Rome na de kast",
            body: [
        {
          text:
            "Nadat Gilad zijn bachelor had afgerond en de verhuizing naar Israël officieel was, gingen ze naar Rome — en Napels — om het uit de kast komen te vieren. Het dekmantelverhaal was voorbij. De liefde hield nooit op.",
        },
      ],
      kicker: "Reizen",
      gags: ["airplane", "pride"],
    },
  ],
  correspondence: {
    kicker: "Correspondentie",
    headline: "Lange afstand",
    dek:
      "Screenshots van de WhatsApp-videogesprekken die hen door de jaren heen bij elkaar hielden.",
    photos: [],
  },
  nicknames: [
    { name: "Giladi" },
    { name: "Gili" },
    { name: "Gili Bili Shmili" },
    { name: "Gili Ben Shmuli" },
    { name: "Gili Ben Perzi" },
    { name: "Gil Bish" },
    { name: "Shil Mil Chili", note: "De meest random. De meest juiste." },
  ],
  hebrewNicknames: [
    {
      hebrew: "חיים שלי",
      transliteration: "Chaim Sheli — Mijn leven",
      note:
        "Gilad haat deze. Zijn Israëlische tante noemt iedereen חיים שלי, waar hij cringe van wordt. Niv vindt het heerlijk. De krant kiest de kant van Niv.",
    },
    {
      hebrew: "אהבה שלי",
      transliteration: "Ahava Sheli — Mijn liefde",
      note:
        "Gilad verbood חיים שלי, dus had Niv meteen een vervanger nodig. Eerste keuze: Mijn liefde. Zacht. Tijdelijk. Toch nog steeds officieel.",
    },
    {
      hebrew: "חיים טובים",
      transliteration: "Chaim Tovim — Goede levens",
      note:
        "Plan B na het חיים שלי-embargo: de חיים houden, טובים er willekeurig aan plakken. Vertaling: goede levens. Methode: het eerste woord dat Niv bedacht. Redactieoordeel: technisch gezien niet de tante.",
    },
  ],
  sidebarColumns: [
    {
      title: "Sportredactie",
      kicker: "Feyenoord & linkse voetbal",
      items: [
        { text: "Primaire loyaliteit: Feyenoord Rotterdam. Niet onderhandelbaar." },
        {
          text: "Als je een Israëlische club moet kiezen: Hapoel Tel Aviv — niet voor glorie, maar omdat ze links zijn en hij ook. Ideologie boven trofeeën.",
        },
        {
          text: "Doet ook mee aan: voetbal, tennis, hardlopen, voetbaltennis, volleybal, en alles met een bal en licht lijden.",
        },
        {
          text: "Extreem sportief. Extreem knap. De sportredactie kan de teennagelsituatie niet verklaren (zie hieronder).",
        },
      ],
    },
    {
      title: "Chocolade-onderzoek",
      kicker: "Een kleine maar serieuze verslaving",
      items: [
        {
          text: "Het onderwerp houdt van chocolade met een toewijding die meestal voor breaking news is.",
        },
        {
          text: "Na een joint kan hij non-stop blijven eten. Redacteuren hebben geen klacht ingediend.",
          tmi: true,
        },
        {
          text: "'s Avonds: vlees. Nivs voorkeur: geen vlees. Het huishouden blijft diplomatisch.",
        },
      ],
    },
    {
      title: "Teennagel-notitie",
      kicker: "Een vriendelijke voetnoot",
      items: [
        {
          text: "Gilad is, objectief, extreem knap. Zijn teennagels hebben echter een andere redactionele lijn gekozen.",
        },
        {
          text: "Deze krant houdt volledig van hem — inclusief de harde nagels die niet meewerken.",
        },
        {
          text: "Schoonheid is geen perfectie. Soms is het een man die marathons loopt en nog steeds verliest van zijn eigen voeten.",
        },
      ],
    },
    {
      title: "Perez-gasredactie",
      kicker: "Vlekken op de verkeerde plekken",
      items: [
        {
          text: "Na bepaalde atmosferische gebeurtenissen dient de onderbroek een vervolgbericht in. De redactie heeft het bewijs gezien. Ze had liever een minder toegewijde correspondent.",
          tmi: true,
        },
        {
          text: "Officiële lijn van het onderwerp: hij is het niet. Het is het gassysteem van de familie Perez — stedelijke infrastructuur met, volgens hem, een ongewoon persoonlijke laatste kilometer.",
          tmi: true,
        },
        {
          text: "Deze krant bevestigt twee feiten: Gilad blijft extreem knap, en de Perez-leiding eindigt op een plek die geen gemeentekaart durft af te drukken.",
          tmi: true,
        },
      ],
    },
  ],
  editorLetter: {
    headline: "Brief van de redacteur",
    paragraphs: [
      { text: "Gilad —", emphasis: "opening" },
      {
        text:
          "Je bent vandaag 25. Je bent een journalist die een van de moeilijkste verhalen ter wereld dekt, en op de een of andere manier werd jij ook het beste verhaal van mijn leven.",
      },
      {
        text:
          "Van Pinocchiostraat tot Ben Gurion 50, van geheime sublets tot uit de kast komen op 12 juni — elk hoofdstuk met jou was het waard om te drukken.",
      },
      {
        text:
          "Ik maakte deze krant voor jou omdat je de kop verdient. Niet de voetnoot. Niet het dekmantelverhaal dat we voor anderen verzonen. Het echte.",
      },
      {
        text:
          "Gefeliciteerd, Giladi. Gili. Gili Bili Shmili. Shil Mil Chili. חיים שלי — ook al krijg je er cringe van.",
        emphasis: "highlight",
      },
      { text: "Ik hou van je.", emphasis: "closing" },
    ],
    signoff: "— Niv",
  },
  blessing: {
    kicker: "Speciale bijlage",
    openingLine:
      "Giladi, Gili, Gili Bili Shmili, geliefde van mijn hart, liefde van mijn leven, חיים שלי — van harte gefeliciteerd!",
    paragraphs: [
      {
        text:
          "Wat kan ik toewensen aan een man die de beste partner ter wereld al heeft gewonnen?",
        emphasis: "opening",
      },
      {
        text: "Ik wens je toe dat het leven je alleen met positief licht zal beschijnen.",
      },
      {
        text:
          "Ik wens je toe dat je gelukkig, vrolijk, gezond, liefhebbend en geliefd blijft.",
        tmi: true,
      },
      {
        text:
          "Dat geld nooit een obstakel voor je wordt — en mocht dat wél zo zijn, onthoud dat daar familie voor is (en als jij ooit wilt dat we familie worden, dan is er een ring nodig…).",
        tmi: true,
      },
      {
        text:
          "Dat je slaagt, mijn lief — sociaal hier in Israël, in de relatie die alleen maar zal groeien, met Gods hulp, en professioneel, zodat je werk rendement oplevert en groeit, met werk uit Nederland en werk uit Israël. Giladi, ik geloof echt in je! Je kunt veel meer dan je zelf gelooft. Ik zie je vooruitgang elke dag en ik ben zo blij voor je.",
        tmi: true,
      },
      {
        text:
          "Ik wens óns toe dat we bij elkaar blijven, ons ontwikkelen en vooruitgaan op één gezamenlijk pad, samen en voor altijd. Dat onze liefde nooit dooft, want alleen wij weten hoe sterk ze is.",
        tmi: true,
      },
      {
        text:
          "Ik wens je toe, Giladi, dat je zo'n geweldig mens blijft — knap in elke zin van het woord, charismatisch, een echte renaissancemens, iemand bij wie het fijn is om te zijn, vriendelijk, gul, oprecht blij met het geluk van anderen, slim en met een verfijnd gevoel voor humor — en het belangrijkst: een echte, bescheiden man. Dat is een deel van jouw schoonheid, waardoor je nóg knapper en succesvoller bent.",
        tmi: true,
      },
      {
        text:
          "Mijn Giladi, je bent het cadeau van mijn leven, het lichtpunt waarvan ik niet wist dat ik het nodig had. Ik wens je alleen het goede toe, en ik weet zeker dat je met de juiste motivatie en verstandige beslissingen ver komt.",
        tmi: true,
      },
      {
        text:
          "Ik ben er altijd voor je. En onthoud: je bent dichter bij de 30 dan bij de 20. Mazel tov!",
        emphasis: "highlight",
        tmi: true,
      },
    ],
    signoff: "Altijd de jouwe, voor eeuwig — Nivi / Niv Lil",
  },
  colophon: {
    lines: [
      "Gedrukt op Ben Gurion 50, Tel Aviv",
      "Samen meer dan anderhalf jaar",
      "Editie van één — voor Gilad, van Niv",
      "Archieffoto's: Editie I",
    ],
  },
  ui: {
    openEdition: "Open de editie",
    skip: "Overslaan",
    specialEditionAwaits: "Een speciale editie staat klaar",
    leadStory: "Hoofdartikel",
    continueToTimeline: "Ga naar de levenskroniek →",
    lifeChronicle: "Levenskroniek",
    lifeChronicleSubtitle: "Archief",
    continueToLoveStory: "Ga naar het liefdesverhaal →",
    photoDesk: "Fotoredactie",
    yearsOnRecord: "Jaren in het archief",
    dispatches: "Berichten",
    fieldReports: "Veldberichten",
    index: "Index",
    timeline: "Tijdlijn",
    readFiling: "Lees dossier →",
    closeFiling: "Sluit dossier",
    previousDispatch: "Vorig bericht",
    nextDispatch: "Volgend bericht",
    letterFromEditor: "Brief van de redacteur →",
    backToIndex: "Terug naar de index",
    backToLetter: "Terug naar de brief ↑",
    sidebar: "Rubrieken",
    supplementaryReporting: "Aanvullende berichtgeving",
    correspondenceDesk: "Correspondentie",
    longDistance: "Lange afstand",
    glossary: "Woordenlijst",
    approvedNicknames: "Goedgekeurde bijnamen",
    hebrewEdition: "Hebreeuwse editie",
    opEd: "Opinie",
    specialInsert: "Speciale bijlage",
    blessingHeadline: "Beracha voor je verjaardag",
    languageEdition: "Editietaal",
    tmiVersion: "TMI-VERSIE",
    tmiUnlock: "TMI",
    tmiLocked: "Geclassificeerd dossier",
    tmiOn: "TMI AAN",
    tmiLock: "Vergrendel",
    tmiPasswordKicker: "Geclassificeerde redactie",
    tmiPasswordHeadline: "TMI-editie",
    tmiPasswordDek: "Voer de toegangscode in om geclassificeerde secties op dit apparaat te openen.",
    tmiPasswordPlaceholder: "Toegangscode",
    tmiPasswordSubmit: "Dossier openen",
    tmiPasswordWrong: "Dossier afgewezen. Toegang geweigerd.",
    tmiPasswordSuccess: "Toegang verleend.",
    tmiPasswordClose: "Sluiten",
    soundtrackMute: "Dempen",
    soundtrackUnmute: "Geluid aan",
  },
};
