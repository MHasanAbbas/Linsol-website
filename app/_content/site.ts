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
    title: "Linux Platform Engineering",
    description:
      "Design, stabilise and modernise Linux estates with consistent operating standards, patching, access control and automation.",
    scope:
      "Covers baseline design, operating model improvements and estate standardisation.",
  },
  {
    title: "DevOps Enablement",
    description:
      "Improve software delivery and infrastructure change with pipelines, release discipline and practical automation.",
    scope:
      "Covers CI/CD patterns, workflow design, deployment controls and team handoffs.",
  },
  {
    title: "Cloud Infrastructure Consulting",
    description:
      "Shape cloud platforms that are easier to operate, govern and recover when conditions change.",
    scope:
      "Covers landing zones, networking, infrastructure as code and operational readiness.",
  },
  {
    title: "AI-Ready Infrastructure",
    description:
      "Prepare compute, storage, networking and observability foundations before AI workloads become operational dependencies.",
    scope:
      "Covers platform prerequisites, capacity planning and workload isolation strategy.",
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
