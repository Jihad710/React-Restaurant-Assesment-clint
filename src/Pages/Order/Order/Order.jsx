import { useState } from "react";
import Cover from "../../Shared/Cover/Cover";
import orderCover from "../../../assets/Featured/shop-bg-darken.jpg"; 
import useMenu from "../../../hooks/useMenu";
import { useParams } from "react-router-dom";
import OrderTab from "../OrderTab/OrderTab";

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const soup = menu.filter(item => item.category === 'soup');
    const desserts = menu.filter(item => item.category === 'dessert');
    const drinks = menu.filter(item => item.category === 'drinks');

    return (
        <div className="mx-auto bg-black "> 
            <Cover img={orderCover} title="Order Food"></Cover>
            <div className="flex justify-center space-x-4 mt-4 flex-wrap"> 
                {categories.map((category, index) => (
                    <button
                        key={index}
                        className={`px-4 py-2 rounded-md focus:outline-none ${
                            index === tabIndex ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-900'
                        }`}
                        onClick={() => setTabIndex(index)}
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                ))}
            </div>
            <div className="mt-4 flex justify-center"> 
                {tabIndex === 0 && <OrderTab items={salad} />}
                {tabIndex === 1 && <OrderTab items={pizza} />}
                {tabIndex === 2 && <OrderTab items={soup} />}
                {tabIndex === 3 && <OrderTab items={desserts} />}
                {tabIndex === 4 && <OrderTab items={drinks} />}
            </div>
        </div>
    );
};

export default Order;
