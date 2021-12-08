import { RiSearch2Line, RiCloseLine } from 'react-icons/ri'

export default function ProductSearchBar(props) {
  return (
    <form className='h-10 p-2 m-5 md:mx-0 flex place-items-center gap-x-2 border-2 border-gray-300 rounded-md'>
      <RiSearch2Line size='16' color='gray' />
      <input id='productSearchInput' className='w-full focus:outline-none text-gray-400' type="text" />
      <button type='reset'>
        <RiCloseLine size='16' color='gray' />
      </button>
    </form>
  );
}
