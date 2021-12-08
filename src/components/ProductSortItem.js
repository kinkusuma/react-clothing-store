export default function ProductSortItem(props) {
  const {value, current, onClick} = props;

  return (
    <button
      className={`px-2 py-1 rounded-full font-mono text-sm md:text-base ${current? 'bg-cream-200' : 'border-2 border-gray-300'}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
}
