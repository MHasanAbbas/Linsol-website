export const siteNavigation = [
  { href: "#services", label: "Services" },
  { href: "#problems", label: "Problems" },
  { href: "#technology", label: "Technology" },
  { href: "#health-check", label: "Health Check" },
] as const;

export const heroHighlights = [
  {
    title: "Linux estates that stay supportable",
    description:
      "Operational standards, lifecycle management and platform consistency across on-premises and cloud environments.",
  },
  {
    title: "Delivery paths built for repeatability",
    description:
      "Automation, infrastructure as code and release workflows that reduce manual risk.",
  },
  {
    title: "Cloud foundations with clear control",
    description:
      "Architectures designed for resilience, governance, observability and sustainable operations.",
  },
] as const;

export const serviceAreas = [
  {
    title: "Linux Support",
    description:
      "Support for Linux environments that need steadier operations, clearer ownership and more predictable maintenance.",
    ctaLabel: "Discuss Linux support",
    ctaHref: "#health-check",
  },
  {
    title: "Emergency Linux Rescue",
    description:
      "Short-notice technical help for unstable servers, failed platform changes and production issues that need controlled recovery.",
    ctaLabel: "Plan a recovery review",
    ctaHref: "#health-check",
  },
  {
    title: "DevOps Automation",
    description:
      "Reduce manual delivery work with repeatable automation across infrastructure, release workflows and operational controls.",
    ctaLabel: "Explore automation support",
    ctaHref: "#health-check",
  },
  {
    title: "Cloud Infrastructure",
    description:
      "Design and improve cloud platforms with stronger governance, resilience and day-two operating discipline.",
    ctaLabel: "Review cloud foundations",
    ctaHref: "#health-check",
  },
  {
    title: "Kubernetes and OpenShift",
    description:
      "Help teams establish or stabilise container platforms with practical attention to upgrades, access, networking and supportability.",
    ctaLabel: "Talk about container platforms",
    ctaHref: "#health-check",
  },
  {
    title: "AI Infrastructure",
    description:
      "Prepare the compute, storage, networking and platform controls needed before AI workloads become operational dependencies.",
    ctaLabel: "Assess AI infrastructure",
    ctaHref: "#health-check",
  },
] as const;

export const problemsWeSolve = [
  {
    title: "Linux environments that have drifted over time",
    description:
      "Teams inherit mixed standards, uneven patching and fragile operational practices that make routine support harder than it should be.",
    response:
      "LinSol brings the estate back to a manageable baseline through standardisation, automation and clearer ownership.",
  },
  {
    title: "Cloud platforms that feel expensive or brittle",
    description:
      "Workloads land in the cloud quickly, but the platform around them lacks structure, resilience and clear operational guardrails.",
    response:
      "LinSol reviews the platform design, identifies control gaps and defines a more durable operating foundation.",
  },
  {
    title: "Delivery pipelines that still depend on manual steps",
    description:
      "Infrastructure changes and releases are slowed by fragile runbooks, approvals outside the workflow and low-confidence deployments.",
    response:
      "LinSol introduces repeatable patterns for build, release and environment change that teams can maintain themselves.",
  },
  {
    title: "AI plans blocked by weak core infrastructure",
    description:
      "Organisations want to support AI workloads, but the supporting platform is not ready for the compute, storage and governance demands.",
    response:
      "LinSol focuses first on the underlying infrastructure so AI initiatives start from a platform that can actually support them.",
  },
] as const;

export const technologyGroups = [
  {
    name: "Linux Platforms",
    items: ["Ubuntu", "Debian", "Red Hat Enterprise Linux", "Rocky Linux"],
  },
  {
    name: "Automation and Delivery",
    items: ["Terraform", "Ansible", "GitHub Actions", "GitLab CI"],
  },
  {
    name: "Cloud and Containers",
    items: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"],
  },
  {
    name: "Observability and Operations",
    items: ["Prometheus", "Grafana", "Loki", "OpenSearch"],
  },
] as const;

export const healthCheckFocus = [
  "Platform discovery and dependency mapping",
  "Operational resilience and supportability review",
  "Automation and delivery maturity assessment",
  "Prioritised actions for stabilisation and next-step investment",
] as const;
