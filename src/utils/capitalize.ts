export function capitalize({ str }: { str: string }) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
