import { NavLink } from "react-router-dom";

export default function App() {
  const ran = Math.floor(Math.random() * 1000);
  return (
    <div className='wrapper'>
      <h1>Coctail App</h1>
      <NavLink to={`/information/${ran}`}>Information</NavLink>
      <NavLink to='/test'>Test</NavLink>
    </div>
  )
}