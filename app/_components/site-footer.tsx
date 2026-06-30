import Link from "next/link";

import { siteNavigation } from "@/app/_content/site";
import { Container } from "@/app/_components/container";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-[rgba(4,17,31,0.92)]">
      <Container className="py-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-lg font-semibold tracking-tight text-white">
              LinSol Ltd
            </p>
            <p className="mt-3 text-sm leading-7 text-muted">
              Linux, DevOps, cloud infrastructure and AI-ready infrastructure
              consultancy for organisations that need dependable platforms,
              clearer operating models and maintainable delivery practices.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-2">
            {siteNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full border border-line px-4 py-2 text-sm text-slate-200 transition-colors hover:border-accent hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-white/6 pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} LinSol Ltd. All rights reserved.</p>
          <p>Built on Next.js, TypeScript and Tailwind CSS.</p>
        </div>
      </Container>
    </footer>
  );
}
