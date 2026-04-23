export const profile = {
  name: "KwantumZero",
  role: "Harish Sudalaimani",
  location: "By",
  tagline:
    "Building toward Golden Kubestronaut. Currently shipping clusters, pipelines, and IaC from a kind cluster on an 8GB M2 mini.",
  email: "snharish85@gmail.com",
  socials: [
    { label: "GitHub", href: "https://github.com/your-handle" },
    { label: "LinkedIn", href: "https://linkedin.com/in/your-handle" },
    { label: "Credly", href: "https://credly.com/users/your-handle" },
  ],
};

export interface Certification {
  code: string;
  name: string;
  issuer: string;
  status: "passed" | "in-progress" | "planned";
  year: string;
  link?: string;
  img?: string;
}

export const certifications: Certification[] = [
  {
    code: "CKAD",
    name: "Certified Kubernetes Application Developer",
    issuer: "Cloud Native Computing Foundation",
    status: "passed",
    year: "2025",
  },
  {
    code: "KCNA",
    name: "Kubernetes and Cloud Native Associate",
    issuer: "Cloud Native Computing Foundation",
    status: "passed",
    year: "2026",
    link: "https://www.credly.com/earner/earned/badge/547bdfe4-b9a7-42b1-bdcb-3acc2332f7be",
    img: "/kcna.png",
  },
  {
    code: "TF",
    name: "HashiCorp Certified: Terraform Associate (004)",
    issuer: "HashiCorp",
    status: "passed",
    year: "2026",
    link: "https://www.credly.com/earner/earned/badge/e2dee9fd-c02f-40db-83a5-67af7e420994",
    img: "/terraform-associate.png",
  },
  {
    code: "AWS-SAP",
    name: "AWS Certified Solutions Architect – Professional",
    issuer: "Amazon Web Services",
    status: "passed",
    year: "2026",
    link: "https://www.credly.com/earner/earned/badge/ded4dfbc-ca13-45f9-83f7-ddaffe6eea59",
    img: "/aws-saa.png",
  },
  {
    code: "CKA",
    name: "Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    status: "in-progress",
    year: "2026",
  },
  {
    code: "CKS",
    name: "Certified Kubernetes Security Specialist",
    issuer: "Cloud Native Computing Foundation",
    status: "planned",
    year: "",
  },
  {
    code: "GCP-PCA",
    name: "Google Cloud Professional Cloud Architect",
    issuer: "Google Cloud",
    status: "planned",
    year: "",
  },
];

export const experience = [
  {
    period: "2025 — now",
    role: "Home Lab · Self-directed",
    org: "kind on Docker Desktop (M2)",
    bullets: [
      "Running multi-node kind clusters for CKA scenarios — etcd backup/restore, RBAC, network policies.",
      "Building a GitOps pipeline with Argo CD across a staging and prod namespace split.",
      "Instrumenting with kube-prometheus-stack + Loki; dashboards in Grafana.",
    ],
  },
  // Add real internships / freelance here.
];

export const projects = [
  {
    name: "k8s-platform",
    blurb: "Opinionated kind-based platform template — ingress, cert-manager, Argo CD, observability in one bootstrap.",
    stack: ["Kubernetes", "Helm", "Argo CD", "Prometheus"],
    href: "#",
  },
  {
    name: "tf-aws-baseline",
    blurb: "Terraform module for an AWS landing zone: VPC, IAM boundaries, CloudTrail, and GuardDuty wired up.",
    stack: ["Terraform", "AWS", "OPA"],
    href: "#",
  },
  {
    name: "ci-forge",
    blurb: "Reusable GitHub Actions workflows for containerized apps — build, scan, sign, deploy with cosign + Kyverno.",
    stack: ["GitHub Actions", "cosign", "Kyverno"],
    href: "#",
  },
];

export const skills = {
  Orchestration: ["Kubernetes", "Helm", "kustomize", "Argo CD", "Flux"],
  "Cloud & IaC": ["AWS", "GCP", "Terraform", "Pulumi"],
  "CI / CD": ["GitHub Actions", "GitLab CI", "Jenkins"],
  Observability: ["Prometheus", "Grafana", "Loki", "OpenTelemetry"],
  Languages: ["Go", "Python", "Bash"],
  Security: ["RBAC", "Network Policies", "cosign", "Kyverno", "OPA"],
};