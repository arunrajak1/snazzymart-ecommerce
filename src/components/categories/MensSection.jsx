import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { fetchProducts, selectProduct } from '../../redux/ProductSlice';

const MensSection = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const mensClothing = useSelector((state) => state.products.mensClothing);
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    if (mensClothing.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, mensClothing.length]);

  const handleClick = (product) => {
    dispatch(selectProduct(product));
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="font-sans p-4 mx-auto lg:max-w-6xl md:max-w-3xl sm:max-w-12/3 mt-10 mb-10">
      <h2 className="text-4xl font-bold text-gray-800">Men's Clothing</h2>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : error ? (
        <div className="text-red-500 text-center  font-semibold mt-32 text-2xl">Error: {error}</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-10 md:pr-0 md:pl-0 sm:pr-5 pl-5">
          {mensClothing.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              onClick={() => handleClick(product)}
              className="bg-white rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition-all"
            >
              <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-contain object-center"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">{product.title}</h3>
                <div className="mt-4 flex items-center flex-wrap gap-2">
                  <h4 className="text-lg font-bold text-gray-800">${product.price}</h4>
                  <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer ml-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-gray-800 inline-block" viewBox="0 0 64 64">
                      <path
                        d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MensSection;
