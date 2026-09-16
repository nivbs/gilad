import type { Edition } from "../types";

export const nlEdition: Edition = {
  masthead: {
    title: "De Gilad Krant",
    subtitle: "The Gilad Times",
    tagline: "Speciale Editie — Voor één lezer alleen",
    volume: "Dl. 25 — Verjaardagseditie",
    printedIn: "Gedrukt in Tel Aviv & Rotterdam",
    dateLine: "Gefeliciteerd, Gilad",
  },
  leadStory: {
    kicker: "EXCLUSIEF",
    headline:
      "Twee mannen ontmoeten elkaar op Pinocchiostraat; liefde overleeft de kast, de dekmantels en één elektrische step",
    byline: "Door Niv, hoofdredacteur van deze hele krant",
    lede:
      "Op 6 februari 2025, in Tel Aviv, ontmoetten Gilad en Niv elkaar op Pinocchiostraat. Geen van beiden had ooit een relatie met een man gehad. Beiden zaten in de kast. Geen van beiden heeft sindsdien achterom gekeken.",
    body: [
      "Wat volgde was geen slow-burn romance in de stijl van respectabele journalistiek. Het was direct, dagelijks, en een beetje illegaal in emotionele zin — het soort verhaal dat niet netjes in een kop past tot je het eindelijk mag vertellen.",
      "Meer dan anderhalf jaar bouwden ze een leven in het geheim: beste vrienden voor de wereld, partners in waarheid. Barcelona werd uitgevonden. Families kregen zorgvuldig bewerkte versies. Vrienden kregen een dekmantelverhaal netjes genoeg voor de pers.",
      "Op 12 juni 2026 ging het verhaal publiek. De kastdeur ging open. De liefde veranderde niet — alleen de kop.",
    ],
    photoCaption: "Fig. 1 — Pinocchiostraat, Tel Aviv, 6 februari 2025",
  },
  dispatches: [
    {
      id: "dispatch-feb-6-2025",
      date: "6 februari 2025",
      headline: "Eerste ontmoeting op Pinocchiostraat",
      body:
        "Gilad en Niv ontmoetten elkaar in Tel Aviv en waren elke dag samen tot Gilad vertrok. Het begin van alles — onbewerkt, onaangekondigd, onvergetelijk.",
      kicker: "Tel Aviv",
      gags: ["grindr"],
    },
    {
      id: "dispatch-feb-11-2025",
      date: "11 februari 2025",
      headline: "Het eerste afscheid",
      body:
        "Ze namen voor het eerst afscheid en begrepen, zonder het hardop te zeggen, dat ze bij elkaar zouden blijven. De liefde was al eindeloos.",
      kicker: "Bericht",
      gags: ["heart"],
    },
    {
      id: "dispatch-late-feb-2025",
      date: "Eind februari 2025",
      headline: "Dekmantelverhaal Barcelona ingediend",
      body:
        "Een gezamenlijke vlucht naar Barcelona leverde het officiële verhaal voor vrienden: hoe ze elkaar ontmoetten, wanneer, waarom. Het echte verhaal ging over een datingapp en twee kasten. Deze krant geeft de voorkeur aan de waarheid.",
      kicker: "Onderzoek",
      gags: ["grindr", "airplane"],
    },
    {
      id: "dispatch-mar-15-2025",
      date: "15 maart 2025",
      headline: "Stepincident bevestigt langetermijnverbintenis",
      body:
        "Na een feest — dronken, op videobel met Gilad — reed Niv op een elektrische step en had een ongeluk. In dat moment begreep Niv dat dit geen vluchtige romance was. Dit was voor het leven.",
      kicker: "Laatste nieuws",
      breaking: true,
      gags: ["scooter"],
    },
    {
      id: "dispatch-jun-aug-2025",
      date: "juni–augustus 2025",
      headline: "Geheime sublets in Tel Aviv",
      body:
        "Ze woonden samen in een reeks sublets terwijl ze het verborgen voor beide families en vrienden. Voor de rest waren ze beste vrienden. Voor elkaar waren ze thuis.",
      kicker: "Undercover",
      gags: ["key"],
    },
    {
      id: "dispatch-sep-2025",
      date: "september 2025",
      headline: "Eerste bezoek aan Nederland — nog steeds \"alleen vrienden\"",
      body:
        "Niv vloog naar Nederland om voor het eerst Gilads familie en vrienden te ontmoeten, officieel als zijn vriend. Ze rookten veel wiet, probeerden truffels voor psychoactieve avonturen, en hadden een onredelijk goede tijd.",
      kicker: "Buitenland",
      gags: ["weed"],
    },
    {
      id: "dispatch-dec-2025-jan-2026",
      date: "december 2025 – januari 2026",
      headline: "Maandlange Europese tour",
      body:
        "Londen → Nederland → Denemarken → Nederland. Ze dronken veel, gaven veel geld uit, en maakten veel herinneringen. Financiële journalistiek zou het niet goedkeuren. Liefdesjournalistiek geeft vijf sterren.",
      kicker: "Reizen",
      gags: ["flags"],
    },
    {
      id: "dispatch-jun-2026",
      date: "juni 2026",
      headline: "Studies afgerond; Ben Gurion 50 wordt thuis",
      body:
        "Gilad rondde officieel zijn studie af. Ze verhuisden naar het beste appartement ooit op Ben Gurion 50, Tel Aviv. Samenwonend, openlijk in hun privéwereld, verliefd.",
      kicker: "Thuis",
      gags: ["home"],
    },
    {
      id: "dispatch-jun-12-2026",
      date: "12 juni 2026",
      headline: "Officieel uit de kast",
      body:
        "Het tijdperk van dekmantelverhalen eindigde. Geen \"beste vrienden\" meer. Geen bewerkte verhalen meer voor families en vrienden. Op deze dag kwamen Gilad en Niv officieel uit de kast — samen, zoals ze altijd al waren onder de oppervlakte.",
      kicker: "Laatste nieuws",
      breaking: true,
      gags: ["pride"],
    },
  ],
  nicknames: [
    { name: "Giladi" },
    { name: "Gili" },
    { name: "Gili Bili Shmili" },
    { name: "Gili Ben Shmuli" },
    { name: "Gili Ben Perzi" },
    { name: "Gil Bish" },
    { name: "Shil Mil Chili", note: "De meest willekeurige. De meest juiste." },
  ],
  hebrewNicknames: [
    { hebrew: "חיים טובים", transliteration: "Chaim Tovim" },
    { hebrew: "אהבה שלי", transliteration: "Ahava Sheli — Mijn liefde" },
    {
      hebrew: "חיים שלי",
      transliteration: "Chaim Sheli — Mijn leven",
      note:
        "Gilad haat deze. Zijn Israëlische tante noemt iedereen חיים שלי, wat hem cringe geeft. Niv vindt het heerlijk. De krant kiest de kant van Niv.",
    },
  ],
  sidebarColumns: [
    {
      title: "Sportredactie",
      kicker: "Feyenoord & linkse voetbal",
      items: [
        "Primaire loyaliteit: Feyenoord Rotterdam. Niet te onderhandelen.",
        "Als je een Israëlische club moet kiezen: Hapoel Tel Aviv — niet voor glorie, maar omdat ze links zijn en hij ook. Ideologie boven trofeeën.",
        "Doet ook mee aan: voetbal, tennis, hardlopen, voetbaltennis, volleybal, en alles met een bal en licht lijden.",
        "Extreem sportief. Extreem knap. De sportredactie kan de teennagelsituatie niet verklaren (zie hieronder).",
      ],
    },
    {
      title: "Chocolade-onderzoek",
      kicker: "Een kleine maar serieuze verslaving",
      items: [
        "Het onderwerp houdt van chocolade met een toewijding die meestal voor breaking news is.",
        "Na een joint kan de consumptie non-stop worden. Redacteuren hebben geen klacht ingediend.",
        "Avondvoorkeur: vlees. Nivs voorkeur: geen vlees. Het huishouden blijft diplomatisch.",
      ],
    },
    {
      title: "Teennagel-notitie",
      kicker: "Een vriendelijke voetnoot",
      items: [
        "Gilad is, objectief, extreem knap. Zijn teennagels hebben echter een andere redactionele lijn gekozen.",
        "Deze krant houdt volledig van hem — inclusief de harde nagels die niet meewerken.",
        "Schoonheid is geen perfectie. Soms is het een man die marathons loopt en nog steeds verliest van zijn eigen voeten.",
      ],
    },
  ],
  editorLetter: {
    headline: "Brief van de redacteur",
    paragraphs: [
      { text: "Gilad —", emphasis: "opening" },
      {
        text:
          "Je bent vandaag 25. Je bent journalist die een van de moeilijkste verhalen ter wereld dekt, en op de een of andere manier werd jij ook het beste verhaal van mijn leven.",
      },
      {
        text:
          "Van Pinocchiostraat tot Ben Gurion 50, van geheime sublets tot uit de kast komen op 12 juni — elk hoofdstuk met jou was het waard om te drukken.",
      },
      {
        text:
          "Ik maakte deze krant voor jou omdat je de kop verdient. Niet de voetnoot. Niet het dekmantelverhaal dat we voor anderen verzonen. De echte.",
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
      "Giladi, Gili, Gili Bili Shmili, liefde van mijn hart, liefde van mijn leven, mijn leven — gefeliciteerd!",
    paragraphs: [
      {
        text:
          "Wat kan ik wensen voor een man die al de beste partner ter wereld heeft gewonnen?",
        emphasis: "opening",
      },
      {
        text:
          "Ik wens je dat het leven je alleen met positief licht zal verlichten. Ik wens je dat je gelukkig, vrolijk, gezond, liefend en geliefd blijft.",
      },
      {
        text:
          "Dat geld nooit een obstakel voor je wordt — en als het dat wel is, onthoud dat daar familie voor is (en als we ooit familie worden, is er een ring nodig…).",
      },
      {
        text:
          "Dat je slaagt, mijn lief — sociaal hier in Israël, in de relatie die alleen zal groeien, met Gods hulp, en professioneel, rendement opleverend en groeiend met werk uit Nederland en werk uit Israël. Giladi, ik geloof echt in je! Je kunt veel meer dan je denkt. Ik zie je vooruitgang elke dag en ik ben zo blij voor je.",
      },
      {
        text:
          "Ik wens ons dat we bij elkaar blijven, ontwikkelen en vooruitgaan op één verenigde weg, samen en voor altijd. Dat onze liefde nooit dooft, want alleen wij weten hoe sterk ze is.",
      },
      {
        text:
          "Ik wens je, Giladi, dat je zo'n geweldig mens blijft — knap in elke zin van het woord, charismatisch, een echte homo universalis, iemand met wie het fijn is om te zijn, vriendelijk, gul, blij in het geluk van anderen, slim en met verfijnde humor — en het belangrijkst: een echte, bescheiden man. Dat is deel van je schoonheid die je nog knapper en succesvoller maakt.",
      },
      {
        text:
          "Mijn Giladi, je bent het cadeau van mijn leven, het lichtpunt dat ik niet wist dat ik nodig had. Ik wens je alleen het goede, en ik ben er zeker van dat je met de juiste motivatie en verstandige beslissingen ver komt.",
      },
      {
        text:
          "Ik ben er altijd voor je — in je jubeljaar, wanneer het goede je tegemoet komt. En onthoud: je bent dichter bij 30 dan bij 20. Mazel tov!",
        emphasis: "highlight",
      },
    ],
    signoff: "Altijd van jou, voor altijd — Nivi / Niv Lil",
  },
  colophon: {
    lines: [
      "Gedrukt op Ben Gurion 50, Tel Aviv",
      "Samen meer dan anderhalf jaar",
      "Editie van één — voor Gilad, van Niv",
      "Foto's in de volgende editie",
    ],
  },
  ui: {
    openEdition: "Open de editie",
    skip: "Overslaan",
    specialEditionAwaits: "Een speciale editie wacht",
    leadStory: "Hoofdartikel",
    continueToTimeline: "Ga naar de tijdlijn →",
    dispatches: "Berichten",
    fieldReports: "Veldberichten",
    index: "Index",
    timeline: "Tijdlijn",
    readFiling: "Lees dossier →",
    closeFiling: "Sluit dossier",
    previousDispatch: "Vorig bericht",
    nextDispatch: "Volgend bericht",
    letterFromEditor: "Brief van de redacteur →",
    backToIndex: "Terug naar index",
    backToLetter: "Terug naar brief ↑",
    sidebar: "Rubrieken",
    supplementaryReporting: "Aanvullende berichtgeving",
    glossary: "Woordenlijst",
    approvedNicknames: "Goedgekeurde bijnamen",
    hebrewEdition: "Hebreeuwse editie",
    opEd: "Opinie",
    specialInsert: "Speciale bijlage",
    blessingHeadline: "Verjaardagswens",
    languageEdition: "Editietaal",
  },
};
