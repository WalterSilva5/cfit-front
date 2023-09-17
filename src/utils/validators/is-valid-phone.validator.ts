export default function IsValidPhone (phone: string): boolean {
  return (
    phone.replace(/\D/g, '').trim().length >= 10 &&
    phone.replace(/\D/g, '').trim().length <= 11
  )
}
