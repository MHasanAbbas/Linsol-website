import { technologyGroups } from "@/app/_content/site";
import { Container } from "@/app/_components/container";
import { SectionHeading } from "@/app/_components/section-heading";

export function TechnologiesSection() {
  return (
    <section id="technology" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Technology Focus"
          title="Built around proven platforms, automation tooling and operational visibility."
          description="LinSol works across established Linux, cloud and DevOps tooling with an emphasis on maintainability, observability and practical platform ownership."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {technologyGroups.map((group) => (
            <article
              key={group.name}
              className="rounded-[1.75rem] border border-line bg-panel p-6 sm:p-8"
            >
              <h3 className="text-xl font-semibold tracking-tight text-white">
                {group.name}
              </h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/4 px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] text-slate-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-[1.75rem] border border-line bg-[linear-gradient(135deg,rgba(20,46,74,0.92),rgba(7,17,28,0.96))] p-6 sm:p-8">
          <p className="font-mono text-xs uppercase tracking-[0.32em] text-accent">
            AI-Ready Infrastructure
          </p>
          <p className="mt-4 max-w-4xl text-base leading-8 text-slate-100">
            Alongside core Linux and cloud work, LinSol helps organisations
            assess whether their platform is prepared for AI-related workloads,
            including compute capacity, storage throughput, network segmentation,
            access controls and operational monitoring.
          </p>
        </div>
      </Container>
    </section>
  );
}
