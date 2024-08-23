import { Coctails } from "../routes/root";

export async function getData<Coctails>(url:string): Promise<Coctails | undefined> {
  try{
    const response = await fetch(url);
    const json: Coctails = await response.json();
    console.log(json)
    return json
  }catch(err) {
    console.log(err)
  }
}