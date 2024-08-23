import { NavLink } from "react-router-dom";

export default function ErrorBoundary() {
  return (
    <div>
      <h1>Something went wrong.</h1>
      <NavLink to="/">Back to home</NavLink>
    </div>
  )
}