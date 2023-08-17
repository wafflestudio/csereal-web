import Image from 'next/image';
import { ChangeEventHandler, MouseEventHandler, useEffect, useState } from 'react';

interface ImagePickerProps {
  file?: File;
  setFile: (file?: File) => void;
}

export default function ImagePicker({ file, setFile }: ImagePickerProps) {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    if (!e.target.files || e.target.files.length === 0) return;
    setFile(e.target.files[0]);
  };

  return (
    <>
      <label
        className={`rounded-sm border-[1px] border-neutral-700
            h-[1.875rem] px-[.62rem] mb-3
            flex items-center
            font-noto text-xs font-normal self-start 
            hover:bg-neutral-100`}
      >
        {`이미지 ${file ? '변경' : '업로드'}`}
        {/* SelectedImageViewer쪽 svg 처리가 애매해서(귀찮아서) accept=image/* 사용 안함 */}
        <input type="file" accept=".png, .jpg, .jpeg" className="hidden" onChange={handleChange} />
      </label>
      {file && <SelectedImageViewer file={file} setFile={setFile} />}
    </>
  );
}

const IMAGE_WIDTH = 100;

const SelectedImageViewer = ({ file, setFile }: { file: Blob; setFile: (file?: File) => void }) => {
  const [imageHeight, setImageHeight] = useState(45);

  const imageURL = URL.createObjectURL(file);
  const fileSizeRounded = Math.floor(file.size / 100) / 10;
  const handleDeleteBlob: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setFile(undefined);
  };

  useEffect(() => {
    (async () => {
      const bmp = await createImageBitmap(file);
      setImageHeight(Math.round((IMAGE_WIDTH / bmp.width) * bmp.height));
    })();
  }, [file]);

  return (
    <div
      className={`
    relative flex self-start gap-3
    pt-2 pr-4 pb-2 pl-2 
    bg-neutral-50 rounded-sm border-[1px] border-neutral-200`}
    >
      <Image
        src={imageURL}
        alt="선택된 이미지"
        width={IMAGE_WIDTH}
        height={imageHeight}
        // 경고 제거용 style prop
        // 참고: https://github.com/vercel/next.js/issues/40762
        style={{ width: IMAGE_WIDTH, height: imageHeight }}
      />
      <div className="flex flex-col justify-between items-start">
        <p className="font-noto text-xs font-normal">{`${file.name}(${fileSizeRounded}KB)`}</p>
        <button className="font-noto text-xs font-normal underline" onClick={handleDeleteBlob}>
          삭제
        </button>
      </div>
    </div>
  );
};
