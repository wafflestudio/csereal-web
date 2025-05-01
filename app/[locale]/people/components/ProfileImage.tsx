import styles from '@/app/[locale]/people/components/style.module.css';
import ImageWithFallback from '@/components/common/ImageWithFallback';

export default function ProfileImage({ imageURL }: { imageURL: string | null }) {
  return (
    <ImageWithFallback
      alt="대표 이미지"
      src={imageURL}
      width={200}
      height={264}
      className={`object-contain ${styles.memberImage}`}
      sizes="186px, 248px"
    />
  );
}
