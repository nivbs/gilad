type BirthdayRibbonProps = {
  isRtl: boolean;
};

export function BirthdayRibbon({ isRtl }: BirthdayRibbonProps) {
  return (
    <div
      className={`birthday-ribbon pointer-events-none absolute top-0 z-10 ${
        isRtl ? "left-2 md:left-4" : "right-2 md:right-4"
      }`}
      aria-hidden
    >
      <span className="birthday-ribbon-label">25</span>
    </div>
  );
}
