const FoodCard = ({item}) => {
    const { name, image, price, recipe } = item;
    return (
        <div className="card w-full md:w-96 bg-black text-white shadow-xl">
            <figure>
                <img src={image} alt="Image" className="w-full h-auto" />
            </figure>
            <p className="absolute top-0 right-0 mr-4 mt-4 bg-black bg-opacity-70 px-4 text-white">
                $ {price}
            </p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title text-center">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <div className="flex justify-center mt-3">
                        <button className="btn btn-outline border-0 bg-white text-black border-b-4 border-orange-400 mt-3">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
