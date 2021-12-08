import React, { useState } from "react";
import Product from "./Product";
import ProductSearchBar from "./ProductSearchBar";
import ProductSortItem from "./ProductSortItem";

export default function ProductList(props) {
  const { product, likeEvent, islike, addCartEvent, inCart, removeCartEvent }= props;
  const sortItem = ['Popular', 'Newest', 'Cheapest'];
  const [currentSort, setCurrentSort] = useState(sortItem[0]);


  return (
    <>
      <ProductSearchBar />
      <div className='m-5 md:mx-0 flex place-items-center gap-x-2'>
        <p className='font-mono text-gray-600'>Sort by:</p>
        { sortItem.map(item=><ProductSortItem
          value={item}
          current={currentSort===item}
          onClick={()=>{setCurrentSort(item)}}
          />)
        }
      </div>
      <div className='flex flex-wrap justify-center md:justify-start justify-items-center md:gap-x-5 gap-y-4 md:gap-y-5'>
        {
          [...product].map(item=>
            <Product
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
              rating={item.rating}
              ratingCount={item.ratingCount}
              liked={islike(item.id)}
              inCart={inCart(item.id)}
              likeEvent={()=>{likeEvent(item.id)}}
              addCartEvent={()=>{addCartEvent(item.id)}}
              removeCartEvent={()=>{removeCartEvent(item.id)}}
            />)
        }
      </div>
    </>
  );
}
