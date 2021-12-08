export default function NavUserItem(props) {
  const { icon=0, count=0} = props;
  return (
    <button className='w-fit h-fit relative'>
      <div className='static p-2'>
        {icon}
      </div>
      <div className='absolute py-0.5 px-1 bottom-1 right-0 rounded-full bg-white text-xs font-bold'>
        {count}
      </div>
    </button>
  );
}
