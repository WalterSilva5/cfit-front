export const IsValidLinkedIn = (url: any) => {
  const r = /(https:\/\/)?([w]{3}\.)?([\w]+\.)?linkedin\.com\/[\w|\D]{3,}/gi;
  return r.test(url)
}

export const IsValidGitHub = (url: any) => {
  const r = /(https:\/\/)?([w]{3}\.)?github\.com\/[\w|\D]{3,}/gi;
  return r.test(url)
}