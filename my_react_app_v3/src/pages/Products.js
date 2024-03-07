import React from 'react'
import {ProductsList} from '../helpers/ProductsList'
import ProductsItem from '../components/ProductsItem'
import '../styles/Products.css'
function Products() {
  return (
    <div className="products">
        <h1 className="productsTitle">Our Products</h1>
        <div className="productsList"> 
            {ProductsList.map ((productsItem,key)=>{
                return (
                    <ProductsItem 
                    key={key}
                    image={productsItem.image} 
                    name={productsItem.name} 
                    price={productsItem.price}/>
                );
        })}
        </div>
    </div>
  );
}

export default Products