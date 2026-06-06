import { AnimateIn } from "./AnimateIn";

const SECONDARY = [
  {
    quote:
      "Leads went up 4× in 90 days. The team knew exactly what IVF patients need to hear.",
    name: "Dr. Rajiv K.",
    role: "IVF Centre, Bangalore",
  },
  {
    quote:
      "Our website traffic doubled the month after launch. The results page alone converted 3 new patients.",
    name: "Dr. Priya S.",
    role: "Dental Clinic, Mumbai",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full py-16 md:py-20 bg-n-dark overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-16">

        <AnimateIn
          className="max-w-3xl mx-auto text-center mb-12"
          direction="up"
          distance={40}
          duration={1600}
        >
          <span className="font-serif text-[100px] text-n-copper block mb-6 leading-none select-none">
            &ldquo;
          </span>
          <blockquote className="font-serif italic text-2xl md:text-3xl font-semibold text-n-bg leading-relaxed">
            Before Novara, our ads were burning money. Now our clinic is fully
            booked three months out.
          </blockquote>
          <div className="w-8 h-px bg-n-copper mx-auto my-8" />
          <p className="font-sans text-sm font-semibold tracking-wide text-n-bg">
            Dr. Sarah M.
          </p>
          <p className="font-sans text-xs text-n-muted mt-1">
            Aesthetics Clinic, Dubai
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SECONDARY.map((q, i) => (
            <AnimateIn key={q.name} direction="up" delay={i * 200}>
              <div className="bg-n-bg/[0.04] border border-n-bg/[0.08] p-8">
                <p className="font-sans text-sm md:text-base leading-relaxed italic text-n-bg/70">
                  &ldquo;{q.quote}&rdquo;
                </p>
                <div className="mt-6 pt-6 border-t border-n-bg/[0.08]">
                  <p className="font-sans text-sm font-semibold tracking-wide text-n-bg">
                    {q.name}
                  </p>
                  <p className="font-sans text-xs text-n-muted mt-0.5">{q.role}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

      </div>
    </section>
  );
}
