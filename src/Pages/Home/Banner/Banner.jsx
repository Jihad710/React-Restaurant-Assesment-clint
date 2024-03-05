import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Banner01 from '../../../assets/Banner/01.jpg'
import Banner02 from '../../../assets/Banner/02.jpg'
import Banner03 from '../../../assets/Banner/03.png'


const Banner = () => {
  return (
    <div>
      <Carousel>
        <div>
            <img src={Banner01} />
        
        </div>
        <div>
            <img src={Banner02} />
        
        </div>
        <div>
            <img src={Banner03} />
        
        </div>
       
       
        
    </Carousel>
    </div>
  )
}

export default Banner
