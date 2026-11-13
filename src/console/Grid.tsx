import { heavy } from "./heavy"

export function Grid({ label }: { label: string }) {
  return <div>{heavy(label)}</div>
}
