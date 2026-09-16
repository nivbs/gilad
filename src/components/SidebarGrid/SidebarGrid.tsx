import type { HebrewNickname, Nickname, SidebarColumn, UiStrings } from "@/content/types";

type SidebarGridProps = {
  sidebarColumns: SidebarColumn[];
  nicknames: Nickname[];
  hebrewNicknames: HebrewNickname[];
  ui: UiStrings;
  isRtl: boolean;
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
    <aside className={`border newspaper-rule p-4 ${isRtl ? "font-hebrew text-right" : ""}`}>
      <p className="kicker mb-3 inline-block px-2 py-0.5 text-[10px] font-semibold">
        {ui.glossary}
      </p>
      <h3 className="font-display text-lg font-bold text-ink">{ui.approvedNicknames}</h3>
      <ul className="mt-3 space-y-2">
        {nicknames.map((nickname) => (
          <li key={nickname.name} className="text-sm leading-relaxed">
            <span className="font-semibold">{nickname.name}</span>
            {nickname.note && (
              <span className="text-ink-muted"> — {nickname.note}</span>
            )}
          </li>
        ))}
      </ul>
      <h4 className="mt-5 font-display text-base font-bold text-ink">{ui.hebrewEdition}</h4>
      <ul className="mt-2 space-y-3">
        {hebrewNicknames.map((item) => (
          <li key={item.hebrew} className="text-sm leading-relaxed">
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
}: {
  column: SidebarColumn;
  isRtl: boolean;
}) {
  return (
    <aside className={`border newspaper-rule p-4 ${isRtl ? "font-hebrew text-right" : ""}`}>
      {column.kicker && (
        <p className="kicker mb-3 inline-block px-2 py-0.5 text-[10px] font-semibold">
          {column.kicker}
        </p>
      )}
      <h3 className="font-display text-lg font-bold text-ink">{column.title}</h3>
      <ul className="mt-3 space-y-2">
        {column.items.map((item) => (
          <li
            key={item.slice(0, 50)}
            className={`text-sm leading-relaxed text-ink ${
              isRtl ? "before:ml-2 before:content-['—']" : "before:mr-2 before:content-['—']"
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export function SidebarGrid({
  sidebarColumns,
  nicknames,
  hebrewNicknames,
  ui,
  isRtl,
}: SidebarGridProps) {
  return (
    <section className="section-divider border-b newspaper-rule py-8">
      <div className="mb-6 flex items-baseline justify-between border-b newspaper-rule pb-2">
        <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-ink">
          {ui.sidebar}
        </h2>
        <span className="text-xs uppercase tracking-widest text-ink-muted">
          {ui.supplementaryReporting}
        </span>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <NicknameGlossary
          nicknames={nicknames}
          hebrewNicknames={hebrewNicknames}
          ui={ui}
          isRtl={isRtl}
        />
        {sidebarColumns.map((column) => (
          <SidebarColumnCard key={column.title} column={column} isRtl={isRtl} />
        ))}
      </div>
    </section>
  );
}
