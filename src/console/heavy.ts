export function heavy(label: string): string {
  const marker = "HEAVY_MARKER_" + "x".repeat(6000)
  const more = "HEAVY_TAIL_" + "y".repeat(6000)
  return label + marker.length + more.length
}
