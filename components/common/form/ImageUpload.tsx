import Image from 'next/image';
import React, { ChangeEvent, useRef, useState } from 'react';

interface ImageUploadProps {
  onImageSelect: (file: File | null) => void;
}

const ImageUpload = ({ onImageSelect }: ImageUploadProps) => {
  const [previewImage, setPreviewImage] = useState<string | ArrayBuffer | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
        onImageSelect(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageRemove = () => {
    setPreviewImage(null);
    onImageSelect(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div>
      {previewImage ? (
        <div>
          <Image src={previewImage as string} alt="Preview" width={200} height={200} />
          <button
            className="hover:bg-red-600 mt-2 rounded-lg border px-4 py-2 text-xs"
            onClick={handleImageRemove}
          >
            삭제
          </button>
        </div>
      ) : (
        <button
          className="hover:bg-blue-600 rounded-lg border px-4 py-2 text-xs"
          onClick={handleButtonClick}
        >
          이미지 선택
        </button>
      )}
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        className="hidden"
        onChange={handleImageChange}
      />
    </div>
  );
};

export default ImageUpload;
