import { Outlet } from "react-router-dom";
import App from "../App";
import {urls as data} from '../data';
import { getData } from "../api/getData";


export type Coctails = {
  drinks: {
    [key: string]: string
  }[]
} | undefined

export async function rootLoader(): Promise<Coctails> {
  const coctails = getData<Coctails>(data.coctails);
  return coctails;
}

export default function Root() {
  return (
    <div className="container">
      <App />
      <Outlet />
    </div>
  )
}