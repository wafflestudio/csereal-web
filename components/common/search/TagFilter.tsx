import Checkbox from '../form/Checkbox';

interface TagFilterProps {
  tags: string[];
  selectedTags: string[];
  disabled: boolean;
  searchTags: (tags: string[]) => void;
}

export default function TagFilter({ tags, selectedTags, disabled, searchTags }: TagFilterProps) {
  const toggleCheck = (tag: string, isChecked: boolean) => {
    isChecked
      ? searchTags([...selectedTags, tag])
      : searchTags(selectedTags.filter((t) => t !== tag));
  };

  console.log(tags);

  return (
    <div>
      <h5 className="mb-3 mr-6 whitespace-nowrap text-md font-bold tracking-wide">태그</h5>
      <div
        className={`gap-x-7 gap-y-2.5 pl-2.5`}
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(auto-fill, minmax(${calculateWidth(tags)}px, auto))`,
        }}
      >
        {tags.map((tag) => (
          <Checkbox
            key={tag}
            label={tag}
            isChecked={selectedTags.includes(tag)}
            toggleCheck={toggleCheck}
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  );
}

const WIDTH_PER_LETTER = 12;

const calculateWidth = (words: string[]) => {
  let longestLength = 0;
  for (const word of words) {
    if (word.length > longestLength) longestLength = word.length;
  }

  return WIDTH_PER_LETTER * longestLength;
};
