import SelectionList from './SelectionList';
import SelectionTitle from './SelectionTitle';

interface SelectionLayoutProps<T extends { name: string }> {
  items: T[];
  selectedItem: T;
  pagePath: string;
  selectionListGridStyle: string;
}

export default function SelectionLayout<T extends { name: string }>({
  items,
  selectedItem,
  selectionListGridStyle,
  pagePath,
}: SelectionLayoutProps<T>) {
  return (
    <>
      <SelectionList
        names={items.map((item) => item.name)}
        selectedItemName={selectedItem.name}
        path={pagePath}
        gridColumnClass={selectionListGridStyle}
      />
      <SelectionTitle key={selectedItem.name}>{}</SelectionTitle>
    </>
  );
}
