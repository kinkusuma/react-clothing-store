import { TiStarFullOutline, TiStarOutline, TiStarHalfOutline } from "react-icons/ti"

export default function ProductRate(props) {
  const {value, ratingCount=0} = props;

  return (
    <div className='flex mb-5'>
      { (value % 1 === 0) ?
        [...Array(value).keys()].map(()=>{return <TiStarFullOutline color='#ffb703' size='16' />}) :
        ( <>
          {[...Array(parseInt(value)).keys()].map(()=>{return <TiStarFullOutline color='#ffb703' size='16' />})}
          <TiStarHalfOutline color='#ffb703' size='16' />
          </>
        )
      }
      {
        [...Array(parseInt(5-value)).keys()].map(()=>{return <TiStarOutline color='#ffb703' size='16' />})
      }

      <p className='mx-1 text-xs font-semibold'>({ratingCount})</p>
    </div>
  );
}
