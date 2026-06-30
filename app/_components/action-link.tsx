import Link from "next/link";

type ActionLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

const variantClasses = {
  primary:
    "bg-accent text-slate-950 hover:bg-[#78bcff] border border-transparent",
  secondary:
    "border border-line bg-white/5 text-white hover:border-accent hover:bg-white/8",
} as const;

export function ActionLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ActionLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas ${variantClasses[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
