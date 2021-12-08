export default function NavBarItem(props) {
  const {name, current, onClick} = props;

  return (
    <button
      className={`p-3 flex items-center text-center ${current? 'border-b-2 border-cream-200 text-gray-900' : 'text-gray-500'} `}
      onClick={onClick}
    >
      <p className='font-semibold font-sans'>
        {name}
      </p>
    </button>
  )
}
