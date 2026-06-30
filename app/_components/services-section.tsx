import Link from "next/link";

import { serviceAreas } from "@/app/_content/site";
import { Container } from "@/app/_components/container";
import { SectionHeading } from "@/app/_components/section-heading";

export function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="Practical services for Linux, cloud and platform operations."
          description="LinSol supports organisations that need stronger Linux support, urgent recovery help, cleaner automation and infrastructure foundations that are easier to operate over time."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {serviceAreas.map((service, index) => (
            <article
              key={service.title}
              className="group flex h-full flex-col rounded-[1.75rem] border border-line bg-[linear-gradient(180deg,rgba(8,25,42,0.88),rgba(5,16,28,0.98))] p-6 shadow-[0_18px_50px_rgba(2,10,20,0.18)] transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-[rgba(83,168,255,0.24)] hover:shadow-[0_24px_70px_rgba(2,10,20,0.28)] sm:p-7"
            >
              <div className="flex items-center justify-between gap-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent">
                  Service {String(index + 1).padStart(2, "0")}
                </p>
                <span className="h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_18px_rgba(83,168,255,0.55)]" />
              </div>

              <h3 className="mt-6 max-w-xs text-2xl font-semibold tracking-tight text-white">
                {service.title}
              </h3>
              <p className="mt-4 text-base leading-8 text-muted">
                {service.description}
              </p>

              <div className="mt-6 pt-6">
                <Link
                  href={service.ctaHref}
                  className="inline-flex items-center gap-3 text-sm font-semibold text-slate-100 transition-colors group-hover:text-white hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
                >
                  {service.ctaLabel}
                  <span
                    aria-hidden="true"
                    className="font-mono text-accent transition-transform group-hover:translate-x-0.5"
                  >
                    -&gt;
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
