import Banner from "../Banner/Banner"
import Category from "../Category/Category"
import Featured from "../Featured/Featured"
import PopularMenu from "../PopularMenu/PopularMenu"
import Reviews from "../Reviews/Reviews"

const Home = () => {
  return (
    <div>
      <Banner/>
      <Category/>
      <PopularMenu/>
      <Featured/>
      <Reviews/>
    </div>
  )
}

export default Home
