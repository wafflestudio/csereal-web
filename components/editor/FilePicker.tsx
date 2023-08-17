import type { Identifier, XYCoord } from 'dnd-core';
import { ChangeEventHandler, useRef, useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

interface Item {
  url: string;
  blob: Blob;
}

export default function FilePicker() {
  const [files, setFiles] = useState<Item[]>([]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    if (!e.target.files || e.target.files.length === 0) return;
    const file = e.target.files[0];
    const fileURL = URL.createObjectURL(file);
    if (files.find((x) => x.url === fileURL) !== undefined) {
      // TODO: toast 같은걸로 대체
      alert('이미 추가된 파일입니다.');
      return;
    }
    setFiles((files) => [...files, { blob: file, url: fileURL }]);
  };

    const moveFile = (dragIndex: number, hoverIndex: number) => {
      setFiles((prevCards: Item[]) => {
        const nextCards = [...prevCards];
        nextCards.splice(dragIndex, 1);
        nextCards.splice(hoverIndex, 0, prevCards[dragIndex]);
        return nextCards;
      });
    };

  return (
    <DndProvider backend={HTML5Backend}>
      <label
        className={`rounded-sm border-[1px] border-neutral-700
            h-[1.875rem] px-[.62rem] mb-3
            flex items-center
            font-noto text-xs font-normal self-start 
            hover:bg-neutral-100`}
      >
        파일 선택
        <input type="file" className="hidden" onChange={handleChange} />
      </label>
      {files.map((file, index) => (
        <FileRow key={file.url} index={index} url={file.url} blob={file.blob} moveFile={moveFile} />
      ))}
    </DndProvider>
  );
}

interface FileRowProps {
  index: number;
  url: string;
  blob: Blob;
  moveFile: (dragIndex: number, hoverIndex: number) => void;
}

interface DragItem {
  index: number;
  id: string;
  type: string;
}

// https://react-dnd.github.io/react-dnd/examples/sortable/simple
function FileRow({ index, url, blob, moveFile }: FileRowProps) {
  const ref = useRef<HTMLDivElement>(null);

  const [{ handlerId }, drop] = useDrop<DragItem, void, { handlerId: Identifier | null }>({
    accept: 'file',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: DragItem, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      // Get vertical middle
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      // Determine mouse position
      const clientOffset = monitor.getClientOffset();

      // Get pixels to the top
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      // Time to actually perform the action
      moveFile(dragIndex, hoverIndex);

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: 'file',
    item: () => {
      return { url, index };
    },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <div ref={ref} data-handler-id={handlerId}>
      {blob.name}
    </div>
  );
}
