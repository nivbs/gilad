import { CorrespondenceDesk } from "@/components/CorrespondenceDesk/CorrespondenceDesk";
import { TmiGate } from "@/components/Tmi/TmiGate";
import type {
  Edition,
  HebrewNickname,
  Nickname,
  SidebarColumn,
  UiStrings,
} from "@/content/types";

type SidebarGridProps = {
  correspondence: Edition["correspondence"];
  sidebarColumns: SidebarColumn[];
  nicknames: Nickname[];
  hebrewNicknames: HebrewNickname[];
  ui: UiStrings;
  isRtl: boolean;
  prefersReducedMotion: boolean;
};

function NicknameGlossary({
  nicknames,
  hebrewNicknames,
  ui,
  isRtl,
}: {
  nicknames: Nickname[];
  hebrewNicknames: HebrewNickname[];
  ui: UiStrings;
  isRtl: boolean;
}) {
  return (
    <aside
      className={`sidebar-card border newspaper-rule p-6 md:col-span-2 ${
        isRtl ? "font-hebrew text-right" : ""
      }`}
    >
      <p className="kicker mb-3 inline-block px-2 py-0.5 text-[10px] font-semibold">
        {ui.glossary}
      </p>
      <h3 className="font-display text-xl font-bold text-ink md:text-2xl">
        {ui.approvedNicknames}
      </h3>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        {nicknames.map((nickname) => (
          <li key={nickname.name} className="text-sm leading-relaxed md:text-base">
            <span className="font-semibold">{nickname.name}</span>
            {nickname.note && (
              <span className="text-ink-muted"> — {nickname.note}</span>
            )}
          </li>
        ))}
      </ul>
      <h4 className="mt-6 font-display text-lg font-bold text-ink md:text-xl">
        {ui.hebrewEdition}
      </h4>
      <ul className="mt-3 grid gap-3 sm:grid-cols-2">
        {hebrewNicknames.map((item) => (
          <li key={item.hebrew} className="text-sm leading-relaxed md:text-base">
            <span className="font-hebrew text-base">{item.hebrew}</span>
            <span className="block text-ink-muted">{item.transliteration}</span>
            {item.note && (
              <span className="mt-1 block text-xs text-ink-muted">{item.note}</span>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
}

function SidebarColumnCard({
  column,
  isRtl,
  ui,
}: {
  column: SidebarColumn;
  isRtl: boolean;
  ui: UiStrings;
}) {
  return (
    <aside
      className={`sidebar-card border newspaper-rule p-6 ${isRtl ? "font-hebrew text-right" : ""}`}
    >
      {column.kicker && (
        <p className="kicker mb-3 inline-block px-2 py-0.5 text-[10px] font-semibold">
          {column.kicker}
        </p>
      )}
      <h3 className="font-display text-xl font-bold text-ink md:text-2xl">
        {column.title}
      </h3>
      <ul className="mt-4 space-y-3">
        {column.items.map((item) => (
          <li
            key={item.text.slice(0, 50)}
            className={`text-sm leading-relaxed text-ink md:text-base ${
              isRtl ? "before:ml-2 before:content-['—']" : "before:mr-2 before:content-['—']"
            }`}
          >
            {item.tmi ? (
              <TmiGate
                variant="block"
                label={ui.tmiVersion}
                lockedLabel={ui.tmiLocked}
                className="tmi-gate--sidebar-item"
              >
                {item.text}
              </TmiGate>
            ) : (
              item.text
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export function SidebarGrid({
  correspondence,
  sidebarColumns,
  nicknames,
  hebrewNicknames,
  ui,
  isRtl,
  prefersReducedMotion,
}: SidebarGridProps) {
  return (
    <section className="sidebar-spread section-divider border-b newspaper-rule py-10">
      <div className="mb-8 flex items-baseline justify-between border-b newspaper-rule pb-3">
        <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-ink">
          {ui.sidebar}
        </h2>
        <span className="text-xs uppercase tracking-widest text-ink-muted">
          {ui.supplementaryReporting}
        </span>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <CorrespondenceDesk
          correspondence={correspondence}
          ui={ui}
          isRtl={isRtl}
          prefersReducedMotion={prefersReducedMotion}
        />
        <NicknameGlossary
          nicknames={nicknames}
          hebrewNicknames={hebrewNicknames}
          ui={ui}
          isRtl={isRtl}
        />
        {sidebarColumns.map((column) => (
          <SidebarColumnCard key={column.title} column={column} isRtl={isRtl} ui={ui} />
        ))}
      </div>
    </section>
  );
}
