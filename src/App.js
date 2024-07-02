import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import HeroSection from './components/hero/HeroSection';
import Home from './components/home/Home';
import ProductView from './components/productView/ProductView';
import ShoppingCart from './components/shoppingCart/ShoppingCart';
import CheckoutForm from './components/checkout/CheckoutForm';
import PageNotFound from './components/notFound/PageNotFound';
import MensSection from './components/categories/MensSection';
import WomenSection from './components/categories/WomenSection';
import ElectronicsSection from './components/categories/ElectronicsSection';
import JewelerySection from './components/categories/JewelerySection';
function App() {
  return (
    <div className="">
      <Header/>
      <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/hero-section'  element={<HeroSection/>}/>
        <Route path='/products/:productId'  element={<ProductView/>}/>
        <Route path='/shopping-cart/'  element={<ShoppingCart/>}/>
        <Route path='/checkout' element={<CheckoutForm/>}/>
        <Route path='category/mens-clothes' element={<MensSection/>}/>
        <Route path='category/womens-clothes' element={<WomenSection/>}/>
        <Route path='category/electronics' element={<ElectronicsSection/>} />
        <Route path='category/jewelery' element={<JewelerySection/>}/>
        <Route path='*' element={<PageNotFound/>}/>

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
