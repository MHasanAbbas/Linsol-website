import { problemsWeSolve } from "@/app/_content/site";
import { Container } from "@/app/_components/container";
import { SectionHeading } from "@/app/_components/section-heading";

export function ProblemsSection() {
  return (
    <section id="problems" className="py-16 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <SectionHeading
              eyebrow="Problems We Solve"
              title="Focused on the underlying issues that slow teams down."
              description="The symptoms are usually visible first: instability, slow change, unclear ownership or infrastructure that no longer fits the direction of the business. LinSol works on the platform causes behind those outcomes."
            />
            <div className="mt-8 rounded-[1.75rem] border border-[rgba(83,168,255,0.22)] bg-accent-soft p-6">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent">
                Typical Entry Point
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-100">
                Many engagements start with a targeted review of the current
                estate, followed by a practical roadmap for stabilisation,
                standardisation and delivery improvement.
              </p>
            </div>
          </div>

          <div className="grid gap-5">
            {problemsWeSolve.map((problem, index) => (
              <article
                key={problem.title}
                className="rounded-[1.75rem] border border-line bg-panel p-6 sm:p-7"
              >
                <div className="grid gap-5 md:grid-cols-[auto_1fr]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[rgba(83,168,255,0.24)] bg-white/4 font-mono text-sm text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-white">
                      {problem.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
                      {problem.description}
                    </p>
                    <p className="mt-5 rounded-2xl border border-white/8 bg-white/4 px-4 py-4 text-sm leading-7 text-slate-100">
                      {problem.response}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
