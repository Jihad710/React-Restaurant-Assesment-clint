import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Featuredimg from "../../../assets/Featured/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-20">
      <SectionTitle
        subHeading="Check it Out"
        heading="Featured Item"
      ></SectionTitle>
      <div className="md:flex justify-center items-center bg-black bg-opacity-30 pb-20 pt-12 px-36">
        <div>
          <img src={Featuredimg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>March 6, 2024</p>
          <p className="uppercase">Where can i get some?</p>
          <p>
            A whole bunch of food that got cold. Shots of tequila, salads,
            burgers with satanic pineaples, lots of spilled salt and some more
            tequila. Looks like someone forgot to drink that beer.
          </p>
          <button className="btn btn-outline text-white border-0 border-b-4  mt-3 ">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
