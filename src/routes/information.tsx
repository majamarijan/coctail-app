import { NavLink, useLoaderData } from "react-router-dom"
import { getData } from "../api/getData";
import {urls as data} from "../data";
import { Coctails } from "./root";


export async function drinkLoader({params}:{params: {name: string}} | any): Promise<Coctails> {
  const drink = getData<Coctails>(data.search.byName + params.name);
  return drink
}

export default function Information() {
  const data= useLoaderData() as Coctails;
  const drink = data!.drinks[0];

  return (
    <div className="information">
      <NavLink to='/'>Back to home</NavLink>
      <h1>Information</h1>
      <h2>{drink.strDrink}</h2>
      <img src={drink.strDrinkThumb} alt={drink?.strDrink} width='200'/>
    </div>
  )
}