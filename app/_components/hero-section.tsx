import { heroHighlights } from "@/app/_content/site";
import { ActionLink } from "@/app/_components/action-link";
import { Container } from "@/app/_components/container";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-accent">
              UK Infrastructure Consultancy
            </p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Linux, DevOps and cloud platforms engineered for dependable
              operations.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              LinSol Ltd helps organisations design, improve and operate Linux
              estates, cloud infrastructure and delivery platforms with a focus
              on resilience, maintainability and AI-ready foundations.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ActionLink href="#services">Explore Services</ActionLink>
              <ActionLink href="#health-check" variant="secondary">
                Infrastructure Health Check
              </ActionLink>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {["Stability", "Security", "Automation"].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-line bg-white/4 px-4 py-4"
                >
                  <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent">
                    Priority
                  </p>
                  <p className="mt-3 text-base font-medium text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-[2rem] border border-line bg-panel p-6 shadow-[0_24px_80px_rgba(2,10,20,0.35)] sm:p-8">
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-accent">
              Where LinSol Focuses
            </p>
            <div className="mt-6 grid gap-4">
              {heroHighlights.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-5"
                >
                  <h2 className="text-lg font-semibold text-white">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-[rgba(83,168,255,0.22)] bg-accent-soft p-5">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent">
                Working Style
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-100">
                Advisory and delivery support shaped around practical platform
                improvements, clear documentation and maintainable operating
                patterns.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
