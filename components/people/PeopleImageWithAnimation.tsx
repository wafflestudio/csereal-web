import Image from 'next/image';

export interface PeopleImageWithAnimationProps {
  imageURL: string;
}

export default function PeopleImageWithAnimation({ imageURL }: PeopleImageWithAnimationProps) {
  return (
    <div className="w-[186px] h-[248px] absolute top-0 right-0 ">
      <div
        className="absolute w-full h-full z-20"
        style={{
          filter: 'drop-shadow(0px 0px 4px rgba(0,0,0,0.15))',
        }}
      >
        <Image
          alt="대표 이미지"
          src={imageURL}
          priority={true}
          fill
          className="w-full h-full object-cover"
          sizes="186px, 248px"
          style={{
            clipPath: 'polygon(84.375% 0%, 100% 11.71875%, 100% 100%, 0% 100%, 0% 0%)',
          }}
        />
      </div>
      <div className="relative h-full w-full">
        <div
          className="h-full w-full absolute bottom-[-17px] left-[-17px] animate-fadeIn"
          style={{
            background:
              'repeating-linear-gradient(-45deg, black, black 5px, #E9390B 5px, #E9390B 6px)',
            clipPath: 'polygon(84.375% 0%, 100% 11.71875%, 100% 100%, 0% 100%, 0% 0%)',
          }}
        />
      </div>
    </div>
  );
}
