output "cloudfront_distribution_id" {
  value       = aws_cloudfront_distribution.site.id
  description = "Add this to GitHub Secrets as CF_DISTRIBUTION_ID"
}

output "cloudfront_domain" {
  value = aws_cloudfront_distribution.site.domain_name
}

output "github_actions_role_arn" {
  value       = aws_iam_role.github_actions.arn
  description = "Add this to GitHub Secrets as AWS_ROLE_ARN"
}

output "s3_bucket" {
  value = aws_s3_bucket.site.id
}