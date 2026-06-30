import { serviceAreas } from "@/app/_content/site";
import { Container } from "@/app/_components/container";
import { SectionHeading } from "@/app/_components/section-heading";

export function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="Consulting that strengthens the platform beneath critical workloads."
          description="LinSol supports organisations that need stronger Linux operations, more disciplined delivery, better cloud foundations and infrastructure that is ready for the next phase of growth."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {serviceAreas.map((service) => (
            <article
              key={service.title}
              className="rounded-[1.75rem] border border-line bg-panel p-6 shadow-[0_18px_50px_rgba(2,10,20,0.22)] sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="max-w-xs text-2xl font-semibold tracking-tight text-white">
                  {service.title}
                </h3>
                <span className="h-3 w-3 rounded-full bg-accent" />
              </div>
              <p className="mt-5 text-base leading-8 text-muted">
                {service.description}
              </p>
              <p className="mt-6 rounded-2xl border border-white/8 bg-white/4 px-4 py-4 text-sm leading-7 text-slate-100">
                {service.scope}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
