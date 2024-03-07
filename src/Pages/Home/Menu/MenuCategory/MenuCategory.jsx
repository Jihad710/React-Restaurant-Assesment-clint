
import { Link } from "react-router-dom";
import Cover from "../../../Shared/Cover/Cover";
import MenuItem from "../../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="pt-8 mx-auto max-w-screen-lg">
      {title && <Cover img={img} title={title}></Cover>}
      <div className="menu-category-content px-4">
        <div className="grid md:grid-cols-2 gap-10 my-16 sm:grid-cols-1">
          {items.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <div className="flex justify-center mt-3">
          <Link to={'/order'}>
            <button className="btn btn-warning border-0 border-b-4 mt-3">
              Order Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuCategory;
