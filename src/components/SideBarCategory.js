export default function SideBarCategory(props) {
  const { category } = props;
  return (
    <form className='py-3 flex flex-col'>
      <p className='font-mono text-base pr-3 pb-2'>
        { category.name }
      </p>
      { category.items.map(item=>(
        <label className='font-mono text-base'>
          <input
            type='checkbox'
            className='mr-2 opacity-60 border'/>
          {item}
        </label>
      ))}
    </form>
  )
}
