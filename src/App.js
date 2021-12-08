import React, { useState } from 'react';
import NavBar from "./components/NavBar";
import SideBar from './components/SideBar';
import ProductList from "./components/ProductList";
import generateProduct from './data/productData';
import categories from './data/filterCategories';

function App() {
  const [product, setProduct] = useState(generateProduct());
  // [{id:<productId>, count:<itemInCart>}]
  const [cartValue, setCartValue] = useState([]);
  // [<productId>]
  const [likeValue, setLikeValue] = useState([]);

  const likeEvent = (id) => {
    if(likeValue.includes(id)) {
      setLikeValue(likeValue.filter(item=>item!==id));
    } else {
      setLikeValue([...likeValue, id]);
    }
  }

  const countLike = () => {
    return likeValue.length;
  }

  const isLike = (id) => {
    return likeValue.includes(id);
  };

  const addCartEvent = (productId) => {
    if(cartValue.filter(item=>item.id===productId).length > 0) {
      setCartValue(cartValue.map(item => item.id === productId ? {...item, count:item.count+1} : item))
    } else {
      setCartValue([...cartValue, {id:productId, count:1}])
    }
  };

  const countCart = (productId) => {
    let result = 0;
    if(productId) {
      let product = cartValue.filter(item=>item.id===productId);
      if(product.length > 0) {
        result = product[0].count
      }
    } else {
      cartValue.map(item=>result+=item.count)
    }
    return result;
  }

  const removeCartEvent = (productId) => {
    if(cartValue.filter(item=>item.id===productId).length > 0) {
      setCartValue(cartValue.map(item => item.id === productId ? {...item, count:item.count-1} : item))
    }
  };

  return (
    <div className='md:mx-10 my-3'>
      <NavBar cartValue={countCart()} likeValue={countLike()} />
      <div className='grid grid-cols-7 gap-x-10'>
        <SideBar categories={categories} />
        <div className='col-span-6'>
          <ProductList
            product={product}
            likeEvent={likeEvent}
            islike={isLike}
            inCart={countCart}
            addCartEvent={addCartEvent}
            removeCartEvent={removeCartEvent}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
