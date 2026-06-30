import { healthCheckFocus } from "@/app/_content/site";
import { ActionLink } from "@/app/_components/action-link";
import { Container } from "@/app/_components/container";

export function HealthCheckCta() {
  return (
    <section id="health-check" className="py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="overflow-hidden rounded-[2rem] border border-[rgba(83,168,255,0.22)] bg-[linear-gradient(135deg,rgba(12,33,54,0.96),rgba(4,17,31,0.98))] p-8 shadow-[0_24px_80px_rgba(2,10,20,0.3)] sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.32em] text-accent">
                Infrastructure Health Check
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Start with a structured review before committing to wider
                platform change.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-100">
                LinSol&apos;s health check is designed for organisations that
                need a clear view of platform risks, operational bottlenecks and
                the next actions worth funding. It is a practical starting point
                for modernisation, standardisation or AI-readiness work.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ActionLink href="#services">Review Service Areas</ActionLink>
                <ActionLink href="#technology" variant="secondary">
                  Explore Technology Focus
                </ActionLink>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/4 p-6 sm:p-8">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent">
                Typical Review Scope
              </p>
              <div className="mt-6 grid gap-4">
                {healthCheckFocus.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/8 bg-[rgba(255,255,255,0.03)] px-4 py-4 text-sm leading-7 text-slate-100"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
