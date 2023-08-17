import Image from 'next/image';
import { ChangeEventHandler, MouseEventHandler, useEffect, useState } from 'react';

interface ImagePickerProps {
  blob?: Blob;
  setBlob: (blob?: Blob) => void;
}

export default function ImagePicker({ blob, setBlob }: ImagePickerProps) {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    if (!e.target.files || e.target.files.length === 0) return;
    setBlob(e.target.files[0]);
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
        {`이미지 ${blob ? '변경' : '업로드'}`}
        {/* svg 처리가 애매해서 image/png 사용 안함 */}
        <input type="file" accept=".png, .jpg, .jpeg" className="hidden" onChange={handleChange} />
      </label>
      {blob && <SelectedImageViewer blob={blob} setBlob={setBlob} />}
    </>
  );
}

const IMAGE_WIDTH = 100;

const SelectedImageViewer = ({ blob, setBlob }: { blob: Blob; setBlob: (blob?: Blob) => void }) => {
  const [imageHeight, setImageHeight] = useState(45);

  const imageURL = URL.createObjectURL(blob);
  const blobSizeRounded = Math.floor(blob.size / 100) / 10;
  const handleDeleteBlob: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setBlob(undefined);
  };

  useEffect(() => {
    (async () => {
      const bmp = await createImageBitmap(blob);
      setImageHeight(Math.round((IMAGE_WIDTH / bmp.width) * bmp.height));
    })();
  }, [blob]);

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
        <p className="font-noto text-xs font-normal">{`${blob.name}(${blobSizeRounded}KB)`}</p>
        <button className="font-noto text-xs font-normal underline" onClick={handleDeleteBlob}>
          삭제
        </button>
      </div>
    </div>
  );
};
