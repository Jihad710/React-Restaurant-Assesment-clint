import { Parallax } from "react-parallax";

const Cover = ({ img,title }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="the menu"
      strength={-200}
      style={{ height: "500px" }} // Add style to remove margin and padding
    >
      <div className="hero ">
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            
            <h1 className="mb-5 text-3xl text-white font-bold uppercase">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
