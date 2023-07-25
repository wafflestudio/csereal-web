import Checkbox from './Checkbox';

interface CategoryProps {
  category: string[];
}

export default function Category({ category }: CategoryProps) {
  const iconName = 'expand_more';

  return (
    <div>
      <h4 className="flex items-center gap-1">
        <span className="text-sm font-bold font-yoon">분류</span>
        <span className="material-symbols-outlined">{iconName}</span>
      </h4>
      <div>
        {category.map((tag) => (
          <Checkbox key={tag} tag={tag} />
        ))}
      </div>
    </div>
  );
}
