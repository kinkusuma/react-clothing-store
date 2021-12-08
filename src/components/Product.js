import { RiHeart2Line, RiHeart2Fill, RiAddLine, RiSubtractLine } from "react-icons/ri";
import ProductRate from "./ProductRate";

export default function Product(props) {
  const {
    id,
    name,
    image,
    price,
    rating,
    ratingCount,
    liked,
    inCart,
    likeEvent,
    addCartEvent,
    removeCartEvent
  } = props;

  return (
    <div id={id} className='w-44 m-1 rounded-lg border-2 border-cream-200 relative'>
      <img
        className='w-44 h-40 object-cover rounded-t-md'
        src={image}
        alt=""/>
      {liked ?
        <button onClick={likeEvent} className='absolute top-2 right-2'><RiHeart2Fill size='20' color='#e5383b' /></button> :
        <button onClick={likeEvent} className='absolute top-2 right-2'><RiHeart2Line size='20' color='#e5383b' /></button>
      }
      <div className='m-3'>
        <button className='mb-1 text-md font-sans font-semibold text-left'>
          {name}
        </button>
        <ProductRate value={rating} ratingCount={ratingCount}/>
        <div className='grid grid-cols-2'>
          <div>
            <p className='text-sm font-semibold text-gray-500'>Price:</p>
            <p className='text-md font-semibold'>${price}</p>
          </div>
          { inCart > 0 ?
            (
              <div className='flex justify-self-end place-self-center p-1'>
                <button
                  onClick={addCartEvent}
                  className='w-5 h-5 flex justify-center place-items-center rounded-l bg-cream-300'>
                  <RiAddLine size='16' color='white' />
                </button>
                <div className='w-8 h-5 flex justify-center place-items-center font-bold border-2 border-cream-300 text-xs'>
                  {inCart}
                </div>
                <button
                  onClick={removeCartEvent}
                  className='w-5 h-5 flex justify-center place-items-center rounded-r bg-cream-300'>
                  <RiSubtractLine size='16' color='white' />
                </button>
              </div>
            ) : (
              <button
                onClick={addCartEvent}
                className='justify-self-end place-self-center p-1 border-2 border-cream-100 rounded-lg text-xs font-bold hover:bg-cream-100'>
                Add to cart
              </button>
            )
          }
        </div>
      </div>
    </div>
  );
}
