import ImageWithFallback from '@/components/common/ImageWithFallback';

export default function ProfileImage({ imageURL }: { imageURL: string | null }) {
  return (
    <ImageWithFallback
      alt="대표 이미지"
      src={imageURL}
      width={200}
      height={264}
      className="object-cover"
      sizes="186px, 248px"
      style={{
        clipPath: 'polygon(84.375% 0%, 100% 11.71875%, 100% 100%, 0% 100%, 0% 0%)',
        filter: 'drop-shadow(0px 0px 4px rgba(0,0,0,0.15))',
      }}
    />
  );
}
