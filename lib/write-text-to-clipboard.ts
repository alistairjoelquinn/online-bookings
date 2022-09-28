export default function writeTextToClipboard(text: string) {
  navigator.clipboard.writeText(text);
}
