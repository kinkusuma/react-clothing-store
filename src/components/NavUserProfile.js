export default function NavUserProfile(props) {
  const {image} = props;
  return(
    <button className='flex justify-center items-center'>
      <img className='w-8 h-8 rounded-full border-2 border-cream-200' src={image} alt=""/>
    </button>
  )
}
