import React, { useContext, useEffect } from 'react';
import myContext from '../../context/data/myContext';

function ProductCard() {
    const context = useContext(myContext);
    const { mode, product = [], searchkey, filterType, filterPrice } = context;

    // Update local storage directly (if needed)
    useEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, []);

    const addCart = (item) => {
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        cartItems.push(item);
        localStorage.setItem('cart', JSON.stringify(cartItems));
        console.log('Added to cart:', item);
    };

    // Filtered products
    const filteredProducts = product
        .filter((obj) => obj.title.toLowerCase().includes(searchkey.toLowerCase()))
        .filter((obj) => obj.category.toLowerCase().includes(filterType.toLowerCase()))
        .filter((obj) => obj.price <= filterPrice); // Adjust this as needed

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-8 md:py-16 mx-auto">
                <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
                    <h1
                        className="sm:text-3xl text-2xl font-medium title-font mb-2"
                        style={{ color: mode === 'dark' ? 'white' : '' }}
                    >
                        Our Latest Collection ({filteredProducts.length} items)
                    </h1>
                    <div className="h-1 w-20 bg-pink-600 rounded"></div>
                </div>

                {/* New Card Section Below Heading */}
                <a href="#" className={`block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ${mode === 'dark' ? 'dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700' : ''}`}>
                    <h5 className={`mb-2 text-2xl font-bold tracking-tight ${mode === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        Noteworthy technology acquisitions 2021
                    </h5>
                    <p className={`font-normal ${mode === 'dark' ? 'text-gray-400' : 'text-gray-700'}`}>
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                    </p>
                </a>

                <div className="flex flex-wrap -m-4 mt-6">
                    {filteredProducts.map((item) => {
                        const { id, title, price, imageUrl } = item;
                        return (
                            <div
                                key={id}
                                onClick={() => (window.location.href = `/productinfo/${id}`)}
                                className="p-4 md:w-1/4 drop-shadow-lg"
                            >
                                <div
                                    className={`h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out border-gray-200 border-opacity-60 rounded-2xl overflow-hidden ${mode === 'dark' ? 'bg-gray-800 text-white' : ''}`}
                                >
                                    <div className="flex justify-center cursor-pointer">
                                        <img
                                            className="rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110 duration-300 ease-in-out"
                                            src={imageUrl}
                                            alt={title}
                                        />
                                    </div>
                                    <div className="p-5 border-t-2">
                                        <h2
                                            className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                                            style={{ color: mode === 'dark' ? 'white' : '' }}
                                        >
                                            E-Bharat
                                        </h2>
                                        <h1
                                            className="title-font text-lg font-medium text-gray-900 mb-3"
                                            style={{ color: mode === 'dark' ? 'white' : '' }}
                                        >
                                            {title}
                                        </h1>

                                        {/* Card-like price display */}
                                        <div className="flex justify-between items-center mb-3">
                                            <span
                                                className="text-lg font-bold"
                                                style={{ color: mode === 'dark' ? 'white' : 'black' }}
                                            >
                                                This is a card
                                            </span>
                                            <span
                                                className="text-xl font-semibold text-pink-600"
                                                style={{ color: mode === 'dark' ? 'white' : 'black' }}
                                            >
                                                ${price}
                                            </span>
                                        </div>

                                        <div className="flex justify-center">
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation(); // Prevent navigation on button click
                                                    addCart(item);
                                                }}
                                                type="button"
                                                className="focus:outline-none text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full py-2"
                                            >
                                                Add To Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default ProductCard;
