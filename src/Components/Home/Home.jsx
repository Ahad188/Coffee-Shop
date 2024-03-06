import { About } from "../About/About"
import { Banner } from "../Banner/Banner"
import { Choose } from "../Choose/Choose"
import { CoffeeMenu } from "../CoffeeMenu/CoffeeMenu"
import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header"
import { NewRecipe } from "../NewRecipe/NewRecipe"

 

export const Home = () => {
  return (
     <>
      <div className=" w-[100%] md:w-[1366px] mx-auto">
     <Header></Header>
      <Banner></Banner>
      <About></About>
      <Choose></Choose>
      <CoffeeMenu></CoffeeMenu>
      <NewRecipe></NewRecipe>
    </div>
      <Footer></Footer>
     </>
   
  )
}
