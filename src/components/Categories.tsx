type Props = {
  categories: string[];
  selected: string;
  setSelected: (category: string) => void;
};

export default function Categories({
  categories,
  selected,
  setSelected,
}: Props) {
  return (
    <nav className="w-1/3 text-center">
      <h3 className="inline-block text-xl font-bold border-b-2 border-sky-500 mb-2">
        Category
      </h3>
      <ul className="">
        {categories.map((category) => (
          <li
            key={category}
            onClick={() => setSelected(category)}
            className={`${
              selected === category && "text-sky-500"
            } cursor-pointer`}
          >
            {category}
          </li>
        ))}
      </ul>
    </nav>
  );
}
