export const profile = {
  name: "KwantumZero",
  role: "// Harish Sudalaimani",
  tagline:
    "Infrastructure today. Intelligence tomorrow. Kwantum after that.",
  email: "mail",
  emailHref: "mailto:snharish85@gmail.com",
  socials: [
    { label: "GitHub", href: "https://github.com/Harish-SN" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/harishsudalaimani/" },
    { label: "OpenDev", href: "https://openprofile.dev/profile/harishsudalaimani" },
    { label: "PyPI", href: "https://pypi.org/user/harish-sn/" },
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
    code: "AWS-SAP",
    name: "AWS Certified Solutions Architect – Professional",
    issuer: "Amazon Web Services",
    status: "passed",
    year: "2026",
    link: "https://www.credly.com/earner/earned/badge/ded4dfbc-ca13-45f9-83f7-ddaffe6eea59",
    img: "/aws-sap.png",
  },
  {
    code: "CKAD",
    name: "Certified Kubernetes Application Developer",
    issuer: "Cloud Native Computing Foundation",
    status: "passed",
    year: "2025",
  },
  {
    code: "KCSA",
    name: "Kubernetes and Cloud Security Associate",
    issuer: "Cloud Native Computing Foundation",
    status: "passed",
    year: "2026",
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
    code: "CKA",
    name: "Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    status: "in-progress",
    year: "2026",
  },
];

export const experience = [
  {
    period: "May 2024 — Mar 2026",
    role: "Cloud & DevOps Engineer",
    org: "XamBook",
    bullets: [
      "Designed and operated a production-grade AWS platform using EC2, Auto Scaling, ALB, VPC, Route 53, S3, and CloudFront.",
      "Automated infrastructure and workflows with AWS Lambda, EventBridge, DynamoDB, and CloudFormation.",
      "Built CI/CD pipelines with GitHub Actions for backend deployments and static asset delivery to S3/CloudFront.",
      "Containerized application components with Docker; managed runtime reliability on EC2 with PM2 for zero-downtime deploys.",
      "Implemented monitoring, logging, secrets management, and cost controls using CloudWatch, AWS Budgets, and Secrets Manager.",
      "Handled ongoing cloud operations — scaling, patching, backups, and periodic security reviews.",
    ],
  },
  {
    period: "May 2021 — Apr 2024",
    role: "DevOps & Cloud Engineer",
    org: "Independent Consulting · Freelance",
    bullets: [
      "Provisioned infrastructure as code with Terraform and CloudFormation for repeatable, version-controlled deployments.",
      "Built and maintained CI/CD pipelines using GitHub Actions, CodeBuild, and CodeDeploy for automated build, test, and release workflows.",
      "Implemented GitOps workflows with Argo CD for Kubernetes deployments with declarative configuration management.",
      "Deployed and managed containerized applications on Amazon EKS, including Helm-based releases and cluster operations.",
      "Implemented observability and security controls with CloudWatch, Prometheus, Grafana, CloudTrail, and IAM.",
      "Performed Linux sysadmin, patching, backup strategy, production troubleshooting, and performance tuning.",
    ],
  },
];

export const projects = [
  {
    name: "brewbar",
    blurb: "Lightweight Python progress-bar library with an iterator-based API. Published to PyPI with modern packaging via pyproject.toml and semantic versioning.",
    stack: ["Python", "PyPI", "Packaging"],
    href: "https://pypi.org/project/brewbar/",
  },
  {
    name: "Pinglo",
    blurb: "Privacy-focused LAN-first chat app. Real-time messaging without cloud dependency — low-latency, offline-first communication within local networks.",
    stack: ["Networking", "Real-time", "Privacy"],
    href: "https://github.com/Harish-SN/Pinglo",
  },
  {
    name: "harish8.com",
    blurb: "React portfolio hosted on S3 + CloudFront with a serverless AWS Lambda backend for dynamic functionality.",
    stack: ["React", "S3", "CloudFront", "Lambda"],
    href: "https://harish8.com",
  },
  {
    name: "DevBook & Sticky Notes",
    blurb: "Lightweight web tools focused on fast access and clean UI. Responsive layouts with vanilla HTML, CSS, and JavaScript.",
    stack: ["JavaScript", "HTML", "CSS"],
    href: "https://github.com/Harish-SN",
  },
];

export const skills = {
  "Cloud": ["AWS", "Google Cloud"],
  "Containers & Orchestration": ["Kubernetes", "Docker", "Helm"],
  "Infrastructure as Code": ["Terraform", "CloudFormation", "Ansible"],
  "CI / CD & GitOps": ["GitHub Actions", "Jenkins", "Argo CD", "Flux CD"],
  "Observability": ["Prometheus", "Grafana", "OpenTelemetry"],
  "Security & DevSecOps": ["IAM", "Secrets management", "Network security", "TLS"],
  "Languages": ["Go", "Python", "Bash"],
  "Linux & Systems": ["Linux", "Networking", "Performance tuning"],
  "Editor & Workflow": ["Neovim", "LazyVim", "tmux", "Git", "zsh"],
};