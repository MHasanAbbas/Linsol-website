import { heroHighlights } from "@/app/_content/site";
import { ActionLink } from "@/app/_components/action-link";
import { Container } from "@/app/_components/container";

const technicalAreas = [
  {
    title: "Linux estate",
    items: ["Baselines", "Patching", "Access", "Lifecycle"],
  },
  {
    title: "Delivery controls",
    items: ["IaC", "CI/CD", "Approvals", "Rollback"],
  },
  {
    title: "Cloud foundations",
    items: ["Landing zones", "Networking", "Governance", "Recovery"],
  },
  {
    title: "Operational signals",
    items: ["Monitoring", "Logging", "Alerting", "Runbooks"],
  },
] as const;

const reviewPath = ["Discover", "Stabilise", "Standardise", "Automate"] as const;

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-8 h-72 bg-[radial-gradient(circle_at_left,rgba(83,168,255,0.16),transparent_42%)]" />
      <div className="pointer-events-none absolute right-0 top-10 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(83,168,255,0.14),transparent_62%)] blur-3xl" />
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:items-center lg:gap-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-[rgba(83,168,255,0.24)] bg-white/5 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent sm:text-xs">
                Infrastructure Consultancy
              </p>
            </div>
            <h1 className="mt-6 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-[4.2rem] lg:leading-[1.02]">
              Build Linux and cloud platforms that remain supportable under
              operational pressure.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              LinSol Ltd helps organisations review, standardise and improve
              Linux estates, delivery platforms and cloud infrastructure. The
              focus is practical: clearer controls, less manual risk and
              operating models teams can maintain over time.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ActionLink href="#services" className="min-w-[12rem]">
                Explore Services
              </ActionLink>
              <ActionLink
                href="#health-check"
                variant="secondary"
                className="min-w-[12rem]"
              >
                Start With a Health Check
              </ActionLink>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {heroHighlights.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[1.5rem] border border-line bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] px-5 py-5"
                >
                  <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent">
                    Focus Area
                  </p>
                  <h2 className="mt-3 text-base font-semibold tracking-tight text-white">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="relative rounded-[2rem] border border-line bg-[radial-gradient(circle_at_top_left,rgba(83,168,255,0.16),transparent_28%),linear-gradient(160deg,rgba(8,25,42,0.96),rgba(5,16,28,0.98))] p-6 shadow-[0_24px_80px_rgba(2,10,20,0.35)] sm:p-8">
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
            <div className="relative">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.32em] text-accent">
                    Technical View
                  </p>
                  <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white">
                    Typical platform review scope
                  </h2>
                </div>
                <span className="inline-flex w-fit items-center rounded-full border border-[rgba(83,168,255,0.22)] bg-white/6 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.24em] text-slate-100">
                  Current state to operating model
                </span>
              </div>

              <p className="mt-4 max-w-xl text-sm leading-7 text-muted">
                A structured pass across the areas that usually determine
                whether infrastructure stays supportable as demand, risk and
                delivery expectations change.
              </p>

              <div className="mt-6 rounded-[1.75rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-5 sm:p-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  {technicalAreas.map((area) => (
                    <article
                      key={area.title}
                      className="rounded-[1.25rem] border border-white/8 bg-[rgba(4,17,31,0.56)] p-4"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
                          {area.title}
                        </h3>
                        <span className="h-2.5 w-2.5 rounded-full border border-[rgba(83,168,255,0.5)] bg-[rgba(83,168,255,0.36)]" />
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {area.items.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/8 bg-white/4 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-100"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>

                <div className="mt-5 rounded-[1.5rem] border border-[rgba(83,168,255,0.18)] bg-[rgba(6,18,31,0.72)] p-4">
                  <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent">
                    Review Path
                  </p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-4">
                    {reviewPath.map((step, index) => (
                      <div
                        key={step}
                        className="rounded-2xl border border-white/8 bg-white/4 px-4 py-4"
                      >
                        <p className="font-mono text-[11px] text-muted">
                          {String(index + 1).padStart(2, "0")}
                        </p>
                        <p className="mt-3 text-sm font-medium text-white">
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
