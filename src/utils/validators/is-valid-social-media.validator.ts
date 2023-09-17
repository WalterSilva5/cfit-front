export function IsValidSocialMedia (url: string): boolean {
  const r = /(https:\/\/)?([w]{3}\.)?([\w]+\.)?linkedin\.com\/[\w|\D]{3,}/gi
  return r.test(url)
}

export function IsValidSocialMediaGitHub (url: string): boolean {
  const r = /(https:\/\/)?([w]{3}\.)?github\.com\/[\w|\D]{3,}/gi
  return r.test(url)
}
