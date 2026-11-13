import { Suspense, lazy } from "react"

const Grid = lazy(() => import("./Grid").then((m) => ({ default: m.Grid })))

export function LazyGrid({ label }: { label: string }) {
  return (
    <Suspense fallback={<div>loading</div>}>
      <Grid label={label} />
    </Suspense>
  )
}
