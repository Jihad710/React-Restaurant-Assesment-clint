import menuimg from '../../../../assets/Featured/clem-onojeghuo-zlABb6Gke24-unsplash.jpg';
import saladImg from '../../../../assets/FoodCategory/Salad.jpg';
import pizzaImg from '../../../../assets/FoodCategory/Pizza.jpg';
import soupImg from '../../../../assets/FoodCategory/Soup.jpg';
import dessertImg from '../../../../assets/FoodCategory/Dessert.jpg';
import useMenu from '../../../../hooks/useMenu';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import Cover from '../../../Shared/Cover/Cover';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === 'dessert');
  const soup = menu.filter((item) => item.category === 'soup');
  const salad = menu.filter((item) => item.category === 'salad');
  const pizza = menu.filter((item) => item.category === 'pizza');
  const offered = menu.filter((item) => item.category === 'offered');

  return (
    <div className="container mx-auto mb-10">
      <Cover img={menuimg} />
      <SectionTitle subHeading="Don't Miss" heading="Today's Offer" />
      {/* Offered menu items */}
      <MenuCategory items={offered} />
      {/* Salad menu items */}
      <MenuCategory items={salad} title="Salad" img={saladImg} />
      {/* Pizza menu items */}
      <MenuCategory items={pizza} title="Pizza" img={pizzaImg} />
      {/* Soup menu items */}
      <MenuCategory items={soup} title="Soup" img={soupImg} />
      {/* Desserts menu items */}
      <MenuCategory items={desserts} title="Dessert" img={dessertImg} />
    </div>
  );
};

export default Menu;
