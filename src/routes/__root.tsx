import { Outlet, createRootRoute } from "@tanstack/react-router"
import { other } from "../ui"

export const Route = createRootRoute({
  component: () => (
    <>
      <div>{other}</div>
      <Outlet />
    </>
  ),
})
