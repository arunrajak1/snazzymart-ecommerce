import React from 'react'
import { useNavigate } from 'react-router-dom';

const Catergories = () => {
    const navigate=useNavigate()

    const handleCategoryClick = (category) => {
        navigate(`/category/${category}`);
    };


    

        return (
            <div className="p-10 ">
                <div className="flex justify-center items-center ">
                    <div className="2xl:mx-auto 2xl:container  md:py-5 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
                        <div className="flex flex-col jusitfy-center items-center space-y-10">
                            <div className="flex flex-col justify-center items-center space-y-2">
                                <p className="text-xl leading-5 text-gray-600">2024 Trendsetters</p>
                                <h1 className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-gray-800">Shop By Category</h1>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 md:gap-x-8 w-full border bg-white p-5">
                                <div className="relative group flex justify-center items-center h-96 w-full">
                                    <img className="object-center object-cover h-full w-full" src="https://i.ibb.co/ThPFmzv/omid-armin-m-VSb6-PFk-VXw-unsplash-1-1.png" alt="girl-image" />
                                    <button  onClick={() => handleCategoryClick('womens-clothes')} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">Women</button>
                                    <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                                </div>
                                <div className="flex flex-col space-y-4 md:space-y-8 mt-4 md:mt-0 ">
                                    <div className="relative group flex justify-center items-center h-96 w-full">
                                        <img className="object-center object-cover h-full w-full" src="https://i.ibb.co/Hd1pVxW/louis-mornaud-Ju-6-TPKXd-Bs-unsplash-1-2.png" alt="Electronics-image" />
                                        <button  onClick={() => handleCategoryClick('electronics')} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">Electronics</button>
                                        <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                                    </div>
                                </div>
                                <div className="flex flex-col space-y-4 md:space-y-8 mt-4 md:mt-0 ">
                                    <div className="relative group flex justify-center items-center h-96 w-full">
                                        <img className="object-center object-cover h-full w-full" src="https://i.ibb.co/PTtRBLL/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-1.png" alt="Jewelery-image" />
                                        <button  onClick={() => handleCategoryClick('jewelery')} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">Electronics</button>
                                        <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                                    </div>
                                </div>
                                {/* <div className="flex group justify-center items-center h-96 w-full  md:mt-0 mt-5 lg:flex">
                                    <img className="object-center object-cover h-full w-full" src="https://i.ibb.co/PTtRBLL/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-1.png" alt="jewelery-image" />
                                    <button  onClick={() => handleCategoryClick('electronics')}  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 md:left-36 left-28 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">jewelery</button>
                                    <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6  md:ml-2 ml-2 z-0  md:left-32 left-24 px-20 w-36 bg-white bg-opacity-50" />
                                </div> */}
                            
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        );
    }
export default Catergories