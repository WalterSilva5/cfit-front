export default function IsValidPhone(phone: any) {
  return (
    phone &&
    typeof phone === "string" &&
    phone.replace(/\D/g, "").trim().length >= 10 &&
    phone.replace(/\D/g, "").trim().length <= 11
  );
}
