variable "domain_name" {
  description = "Root domain"
  type        = string
  default     = "kwantumzero.com"
}

variable "bucket_name" {
  description = "S3 bucket name (must be globally unique)"
  type        = string
  default     = "kwantumzero.com"
}

variable "github_repo" {
  description = "GitHub org/repo path for OIDC trust"
  type        = string
  default     = "Harish-SN/kwantumZero"
}

variable "alert_email" {
  description = "Email for budget alerts"
  type        = string
  # No default — set in terraform.tfvars or pass via -var
}