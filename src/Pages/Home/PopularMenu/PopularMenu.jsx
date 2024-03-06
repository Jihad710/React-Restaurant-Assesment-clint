
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";
import { Link } from "react-router-dom";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter(item => item.category === 'popular')


  return (
    <div className="flex justify-center">
      <section className="m-12">
        <SectionTitle
          heading="TOP RATED DISHES"
          subHeading="REFRESH YOUR TASTE BUDS"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {popular.map((item) => (
            <MenuItem key={item._id} item={item} />
          ))}
        </div>
        <div className="flex justify-center mt-5">
          <Link to="/menu" className="btn btn-outline border-0 border-b-4">
            View Full Menu
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PopularMenu;
