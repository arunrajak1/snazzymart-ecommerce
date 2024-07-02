import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../redux/CartSlice';
import {
  updateFormData,
  resetFormData,
  selectFormData,
  setLoading,
  setSucceeded,
} from '../../redux/CheckoutSlice';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal); 
  const formData = useSelector(selectFormData);
  const navigate=useNavigate()

  const handleInputChange = (e) => {
      const { name, value } = e.target;
      dispatch(updateFormData({ [name]: value }));

  };

  const handleSubmit = (e) => {
    dispatch(setLoading());

      e.preventDefault();
      setTimeout(() => {
        // Simulate a successful submission
        console.log('Form submitted:', formData);
        console.log('Cart Items:', cartItems);
        console.log('Total:', total);
        
        dispatch(setSucceeded());
        dispatch(resetFormData());
      }, 1000);
     
  };

  const handleCancel=()=>{
    navigate('/shopping-cart')
  }
  return (
<div className="font-[sans-serif] bg-white p-10 relative ">
      <div className="flex max-sm:flex-col gap-12 max-lg:gap-4 h-full">
        <div className="bg-gradient-to-r from-pink-700 via-pink-700 to-pink-800 sm:h-screen sm:sticky sm:top-0 lg:min-w-[370px] sm:min-w-[300px]">
          <div className="relative h-full">
            <div className="px-4 py-8 sm:overflow-auto sm:h-[calc(100vh-60px)]">
              <div className="space-y-4">
              {
                cartItems.map((item)=>(
                  <>
                  <div className="flex items-start gap-4">
                  <div className="w-32 h-28 max-lg:w-24 max-lg:h-24 flex p-3 shrink-0  bg-white rounded-md">
                  <img src={item.image} className="w-full object-contain" alt={item.title}/>
                  </div>
                  <div className="w-full">
                    <h3 className="text-base text-white">{item.title}</h3>
                    <ul className="text-xs text-white space-y-2 mt-2">
                      {/* <li className="flex flex-wrap gap-4">Size <span className="ml-auto">{item.size}</span></li> */}
                      <li className="flex flex-wrap gap-4">Quantity <span className="ml-auto">{item.quantity}</span></li>
                      <li className="flex flex-wrap gap-4">Total Price <span className="ml-auto">${item.price.toFixed(2)}</span></li>
                    </ul>
                  </div>
                </div>
                <div className="md:absolute md:left-0 md:bottom-0 bg-gray-800 w-full p-4">
              <h4 className="flex flex-wrap gap-4 text-base text-white">Total <span className="ml-auto">${(total+6).toFixed(2)}</span></h4>
            </div>
</>
                ))
              } 
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl w-full h-max rounded-md px-4 py-8 relative top-0">
          <h2 className="text-2xl font-bold text-gray-800">Complete your order</h2>
          <form className="mt-8">
            <div>
              <h3 className="text-base text-gray-800 mb-4">Personal Details</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <input type="text" placeholder="First Name"
                         name="firstName"
                         value={formData.firstName}
                         onChange={handleInputChange}
                         required
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-pink-600" />
                </div>

                <div>
                  <input type="text" placeholder="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-pink-600" />
                </div>

                <div>
                  <input type="email" placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-pink-600" />
                </div>

                <div>
                  <input type="number" placeholder="Phone No."
                  name='phoneNumber'
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  required
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-pink-600" />
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-base text-gray-800 mb-4">Shipping Address</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <input type="text" placeholder="Address Line"
                    name='adress'
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-pink-600" />
                </div>
                <div>
                  <input type="text" placeholder="City"
                    name='city'
                    value={formData.city}
                    required
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-pink-600" />
                </div>
                <div>
                  <input type="text" placeholder="State"
                    name='state'
                    value={formData.state}
                    onChange={handleInputChange}
                    required
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-pink-600" />
                </div>
                <div>
                  <input type="text" placeholder="Zip Code"
                    name='postalCode'
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    required
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-pink-600" />
                </div>
              </div>

              <div className="flex gap-4 max-md:flex-col mt-8">
                <button type="button" className="rounded-md px-6 py-3 w-full text-sm tracking-wide bg-transparent hover:bg-gray-100 border border-gray-300 text-gray-800 max-md:order-1" onClick={handleCancel}>Cancel</button>
                <button type="button" className="rounded-md px-6 py-3 w-full text-sm tracking-wide bg-pink-600 hover:bg-pink-700 text-white" onClick={handleSubmit}>Complete Purchase</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>  )
}

export default CheckoutForm