import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { addItemToCart } from '../../redux/CartSlice';
import { useDispatch, useSelector } from 'react-redux';

const ProductView = () => {
    const navigate = useNavigate();
    const { productId } = useParams();
    const dispatch = useDispatch();
    const product = useSelector((state) => state.products.Products.find(product => product.id === Number(productId)));

    const handleAddToCart = () => {
        dispatch(addItemToCart(product));
        navigate('/shopping-cart');
    };

    return (
        <div className="font-sans mt-10 mb-10 ">
            <div className="p-4 max-w-4xl max-md:max-w-xl mx-auto border">
                <div className="grid items-start grid-cols-1 md:grid-cols-2 gap-6 ">

                    <div className="w-full h-1/2 flex gap-3 justify-center  ">
                        <div className="w-1/2 md:w-3/4 flex justify-center  md:justify-end">
                            <img src={product.image} alt="Product" className=" w-full sm:w-full md:w-2/3  h-auto rounded-lg object-contain object-center" />
                        </div> 
                    </div>

                    <div>
                        <h2 className="text-2xl max-sm:text-xl font-semibold text-gray-800 ">{product.title}</h2>
                        <p className='text-base max-sm:text-base text-gray-400 line-clamp-3 mt-2 sm:mt-2'>{product.description}</p>
                        <div className="mt-3 sm:mt-2 md:mt-8">
                            <h3 className="text-gray-800 text-4xl max-sm:text-xl font-semibold">${product.price}</h3>
                        </div>

                        <div className="mt-3 sm:mt-2 md:mt-8">
                            <h3 className="text-xl sm:text-base md:text-xl font-semibold text-gray-800">Sizes</h3>
                            <div className="flex flex-wrap gap-4 mt-2 sm:mt-2 md:mt-4">
                                <button type="button" className="w-12 h-11 border-2 hover:border-gray-800 font-semibold text-xs text-gray-800 rounded-lg flex items-center justify-center shrink-0">SM</button>
                                <button type="button" className="w-12 h-11 border-2 hover:border-gray-800 border-gray-800 font-semibold text-xs text-gray-800 rounded-lg flex items-center justify-center shrink-0">MD</button>
                                <button type="button" className="w-12 h-11 border-2 hover:border-gray-800 font-semibold text-xs text-gray-800 rounded-lg flex items-center justify-center shrink-0">LG</button>
                                <button type="button" className="w-12 h-11 border-2 hover:border-gray-800 font-semibold text-xs text-gray-800 rounded-lg flex items-center justify-center shrink-0">XL</button>
                                <button type="button" className="w-12 h-11 border-2 hover:border-gray-800 font-semibold text-xs text-gray-800 rounded-lg flex items-center justify-center shrink-0">XXL</button>
                            </div>
                        </div>

                        <div className="mt-3 sm:mt-2 md:mt-8">
                            <h3 className="text-xl sm:text-base md:text-xl font-semibold text-gray-800">Colors</h3>
                            <div className="flex flex-wrap gap-4 mt-2 sm:mt-2 md:mt-4">
                                <button type="button" className="w-12 h-11 bg-black border-2 border-white hover:border-gray-800 rounded-lg shrink-0"></button>
                                <button type="button" className="w-12 h-11 bg-gray-400 border-2 border-white hover:border-gray-800 rounded-lg shrink-0"></button>
                                <button type="button" className="w-12 h-11 bg-orange-400 border-2 border-white hover:border-gray-800 rounded-lg shrink-0"></button>
                                <button type="button" className="w-12 h-11 bg-red-400 border-2 border-white hover:border-gray-800 rounded-lg shrink-0"></button>
                            </div>
                        </div>

                        <div className="mt-4 sm:mt-4 md:mt-8 flex flex-wrap gap-4">
                            <button onClick={handleAddToCart} className="flex items-center justify-center px-4 py-3 md:px-8 md:py-4 bg-pink-600 hover:bg-pink-700 text-white border border-pink-800 text-base rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 cursor-pointer fill-current inline mr-3" viewBox="0 0 512 512">
                                    <path d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0" data-original="#000000"></path>
                                </svg>
                                Add to cart
                            </button>

                            <button type="button" className="flex items-center justify-center px-3 py-2 md:px-8 md:py-4 bg-transparent hover:bg-gray-50 text-gray-800 border border-gray-800 text-base rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 cursor-pointer fill-current inline mr-3" viewBox="0 0 64 64">
                                    <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" data-original="#000000"></path>
                                </svg>
                                Add to wishlist
                            </button>
                        </div>


                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default ProductView;
