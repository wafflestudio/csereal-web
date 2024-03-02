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
            className="mt-2 px-4 py-2 border text-xs rounded-lg hover:bg-red-600"
            onClick={handleImageRemove}
          >
            삭제
          </button>
        </div>
      ) : (
        <button
          className="px-4 py-2 border rounded-lg text-xs hover:bg-blue-600"
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
