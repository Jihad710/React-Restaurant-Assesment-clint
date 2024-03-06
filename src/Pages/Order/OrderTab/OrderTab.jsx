
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


import FoodCard from "../../../components/FoodCard/FoodCard";

// todo: implement pegination here on this page

const OrderTab = ({ items }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <div>
      <Swiper
        pagination={pagination}
     
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="grid md:grid-cols-3 gap-3">
            {items.map((item) => (
              <FoodCard key={item._id} item={item}></FoodCard>
            ))}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OrderTab;