import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../../../assets/FoodCategory/slide1.jpg";
import slide2 from "../../../assets/FoodCategory/slide2.jpg";
import slide3 from "../../../assets/FoodCategory/slide3.jpg";
import slide4 from "../../../assets/FoodCategory/slide4.jpg";
import slide5 from "../../../assets/FoodCategory/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle
        subHeading={"We see our customers as invited guests to a party, and we are the hosts. It’s our job every day to make every important aspect of the customer experience a little bit better. "}
        heading={"Order Online"}
      ></SectionTitle>

      <Swiper
        slidesPerView={5}
        className="mySwiper mb-24 "
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h3 className="text-4xl uppercase  -mt-16 text-white">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">
            Soup
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">
            Pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">
            Desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">
            Salads
          </h3>
        </SwiperSlide>
      </Swiper>

      <button className="btn btn-outline text-white border-0 border-b-4 mt-3 ">
        Order Now
      </button>
    </section>
  );
};

export default Category;
