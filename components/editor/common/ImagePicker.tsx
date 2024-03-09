import Image from 'next/image';
import { ChangeEventHandler, MouseEventHandler, useEffect, useState } from 'react';

import { LocalImage, PostEditorImage, UploadedImage } from '../PostEditorTypes';

export interface ImagePickerProps {
  file: PostEditorImage;
  setFile: (file: PostEditorImage) => void;
}

export default function ImagePicker({ file, setFile }: ImagePickerProps) {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    if (!e.target.files || e.target.files.length === 0) return;
    setFile({ type: 'LOCAL_IMAGE', file: e.target.files[0] });
  };

  return (
    <>
      <label
        className={`mb-3 flex h-[1.875rem]
            items-center self-start rounded-sm
            border-[1px] border-neutral-700
            px-[.62rem] text-xs 
            hover:bg-neutral-100`}
      >
        {`이미지 ${file ? '변경' : '업로드'}`}
        {/* SelectedImageViewer쪽 svg 처리가 애매해서(귀찮아서) accept=image/* 사용 안함 */}
        <input type="file" accept=".png, .jpg, .jpeg" className="hidden" onChange={handleChange} />
      </label>
      {file && <SelectedImageViewer file={file} removeFile={() => setFile(null)} />}
    </>
  );
}

const IMAGE_WIDTH = 100;

const SelectedImageViewer = ({
  file,
  removeFile,
}: {
  file: LocalImage | UploadedImage;
  removeFile: () => void;
}) => {
  const [imageHeight, setImageHeight] = useState(45);

  useEffect(() => {
    if (!file || file.type !== 'LOCAL_IMAGE') return;
    (async () => {
      const bmp = await createImageBitmap(file.file);
      setImageHeight(Math.round((IMAGE_WIDTH / bmp.width) * bmp.height));
    })();
  }, [file]);

  if (file.type !== 'LOCAL_IMAGE') {
    // TODO: 업로드된 이미지 예쁘게 보여주기
    return <Image src={file.url} alt="선택된 이미지" width={100} height={100} />;
  }

  const imageURL = URL.createObjectURL(file.file);
  const fileSizeRounded = Math.floor(file.file.size / 100) / 10;
  const handleDeleteBlob: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    removeFile();
  };

  return (
    <div
      className={`
    relative flex gap-3 self-start
    rounded-sm border-[1px] border-neutral-200 bg-neutral-50 
    pb-2 pl-2 pr-4 pt-2`}
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
      <div className="flex flex-col items-start justify-between">
        <p className="text-xs">{`${file.file.name}(${fileSizeRounded}KB)`}</p>
        <button className="text-xs underline" onClick={handleDeleteBlob}>
          삭제
        </button>
      </div>
    </div>
  );
};
