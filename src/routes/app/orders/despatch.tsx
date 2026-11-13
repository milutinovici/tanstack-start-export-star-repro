import { createFileRoute } from "@tanstack/react-router"
import { LazyGrid } from "../../../console/LazyGrid"

export const Route = createFileRoute("/app/orders/despatch")({
  component: () => <LazyGrid label="despatch" />,
})
