import { NavLink, useLoaderData } from "react-router-dom";
import { Coctails } from "./routes/root";

const ingredients:string[] = [];
for(var i=1;i<=15;i++) {
      ingredients.push(`strIngredient${i}`);
  }

export default function App() {
  const coctails = useLoaderData() as Coctails;  
  
  return (
    <div className='wrapper'>
      <h1>Coctail App</h1>
      <div className="container">
        {coctails && coctails.drinks.map(coctail => (
          <NavLink key={coctail.idDrink} to={`/information/${coctail.strDrink}`}>
            <div className="card">
              <h2>{coctail.strDrink}</h2>
              <div className="image">
                <img src={coctail.strDrinkThumb} alt={coctail.strDrink} width='100' />
              </div>
              <div className="description">
                <h3>Category: {coctail.strCategory}</h3>
                <p>{coctail.strInstructions}</p>
                <h3>Ingredients</h3>
                <ul>
                  {ingredients.filter(i => coctail[i]).map(i => <li key={i}>{coctail[i]}</li>)}
                </ul>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  )
}