import Link from "next/link";

import { siteNavigation } from "@/app/_content/site";
import { Container } from "@/app/_components/container";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-[rgba(4,17,31,0.86)] backdrop-blur">
      <Container>
        <div className="flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between">
          <Link href="/" className="flex items-center gap-4">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[rgba(83,168,255,0.28)] bg-accent-soft text-sm font-semibold text-accent">
              LS
            </span>
            <div>
              <p className="text-base font-semibold tracking-tight text-white">
                LinSol Ltd
              </p>
              <p className="text-sm text-muted">
                Linux, DevOps, cloud infrastructure and AI-ready consultancy
              </p>
            </div>
          </Link>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <nav
              aria-label="Primary"
              className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0"
            >
              {siteNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full border border-transparent px-4 py-2 text-sm text-slate-200 transition-colors hover:border-line hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link
              href="#health-check"
              className="inline-flex items-center justify-center rounded-full border border-[rgba(83,168,255,0.28)] bg-accent-soft px-5 py-2.5 text-sm font-semibold text-accent transition-colors hover:border-accent hover:bg-[rgba(20,46,74,0.9)]"
            >
              Start With a Health Check
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}
