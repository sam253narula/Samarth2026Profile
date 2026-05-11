export default function SectionLabel({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-10 flex flex-col gap-3 md:mb-16 md:flex-row md:items-end md:justify-between">
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-paper/50">/{eyebrow}</p>
      <h2 className="max-w-4xl font-display text-5xl font-black leading-[0.9] tracking-[-0.06em] text-paper md:text-7xl lg:text-8xl">
        {title}
      </h2>
    </div>
  );
}
