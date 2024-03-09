import Image from 'next/image';

export default function ProfileImage({ imageURL }: { imageURL: string }) {
  return (
    <div className="absolute right-0 top-0 h-[248px] w-[186px] ">
      <div
        className="absolute z-20 h-full w-full"
        style={{ filter: 'drop-shadow(0px 0px 4px rgba(0,0,0,0.15))' }}
      >
        <Image
          alt="대표 이미지"
          src={imageURL}
          fill
          className="h-full w-full object-cover"
          sizes="186px, 248px"
          style={{ clipPath: 'polygon(84.375% 0%, 100% 11.71875%, 100% 100%, 0% 100%, 0% 0%)' }}
        />
      </div>
      <div className="relative h-full w-full">
        <div
          className="absolute bottom-[-17px] left-[-17px] h-full w-full animate-fadeIn"
          style={{
            background:
              'repeating-linear-gradient(-45deg, white, white 5px, #E9390B 5px, #E9390B 6px)',
            clipPath: 'polygon(84.375% 0%, 100% 11.71875%, 100% 100%, 0% 100%, 0% 0%)',
          }}
        />
      </div>
    </div>
  );
}
