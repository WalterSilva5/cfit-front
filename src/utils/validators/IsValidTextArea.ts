export default function IsValidTextArea(text: any) {
  return text && typeof text === 'string'
    && text.length >= 5;
}
