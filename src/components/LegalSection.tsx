export default function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10">
      <h2 className="font-sans text-xs tracking-widest uppercase text-[#B07040] mb-3">{title}</h2>
      <div className="font-sans text-sm text-neutral-600 leading-relaxed space-y-3">
        {children}
      </div>
    </section>
  );
}
