import { Outlet } from "react-router-dom";
import App from "../App";
import {urls as data} from '../data';


export type Coctails = {
  drinks: {
    [key: string]: string
  }[]
}

export async function rootLoader(): Promise<Coctails> {
  const coctails = await fetch(data.coctails);
  const json: Coctails = await coctails.json();
  return json;
}

export default function Root() {
  return (
    <div className="container">
      <App />
      <Outlet />
    </div>
  )
}