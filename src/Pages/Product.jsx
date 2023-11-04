import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const Product = () => {
  
  const {all_product}=useContext(ShopContext);
  const {productId}=useParams();
  const products = all_product.find((e)=>e.id=== Number(productId));
  return (
    <div>
      <Navbar/>
      <Breadcrum products={products}/>
      <ProductDisplay products={products}/>
      <DescriptionBox/>
      <RelatedProducts/>
      <Footer/>
    </div>
    
  )
}

export default Product
