import { RiSubtractLine } from 'react-icons/ri'
import SideBarCategory from './SideBarCategory';

export default function SideBar(props){
  const {categories} = props;
  return(
    <div className='text-lg hidden border-r md:block'>
      <p className='font-mono text-base pr-3 py-3'>
        Filter
      </p>
      <hr />
      { categories.map(item=>< SideBarCategory category={item} />) }
      <hr />
      <p className='font-mono text-base pr-3 pt-5 pb-2'>
        Price range
      </p>
      <div className='flex flex-col gap-3'>
        <form className='flex gap-x-1 place-items-center'>
          <label className=' w-15 grid justify-items-center place-items-center p-1 rounded-lg border border-gray-500 border-opacity-60'>
            <input type='text' placeholder='Min' className='w-10 text-center outline-none font-mono text-xs'/>
          </label>
          <RiSubtractLine />
          <label className=' w-15 grid justify-items-center place-items-center p-1 rounded-lg border border-gray-500 border-opacity-60'>
            <input type='text' placeholder='Max' className='w-10 text-center outline-none font-mono text-xs'/>
          </label>
        </form>
        <button className=' w-32 p-2 rounded-lg font-mono text-sm bg-cream-200 hover:text-gray-100 hover:bg-cream-300'>
          Filter price
        </button>
      </div>
    </div>
  );
}
