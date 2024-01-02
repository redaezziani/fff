import { ProficiencyStar } from "./Icons";

const Star = ({ count }) => {
  const stars = Array.from({ length: count }, (_, i) => i);

  return (
    <div className="flex space-x-1">
      {stars.map((_, i) => (
        <ProficiencyStar key={i} className='h-4 w-auto fill-primary-400 group-hover:fill-primary-500 group-hover:scale-105 transition duration-500 ease-in-out' />
      ))}
    </div>
  );
};

export default Star;