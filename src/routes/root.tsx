import { Outlet } from "react-router-dom";
import App from "../App";
import {urls as data} from '../data';

export async function rootLoader() {
  const coctails = await fetch(data.coctails);
  return coctails.json();
}

export default function Root() {
  return (
    <div className="container">
      <App />
      <Outlet />
    </div>
  )
}