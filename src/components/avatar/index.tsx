import Image from "next/image";

interface AvatarProps {
  src: string;
  alt: string;
  size?: number;
}

const AvatarComponent: React.FC<AvatarProps> = ({ src, alt, size }) => {
  return (
    <div
      style={{ width: size, height: size }}
      className="overflow-hidden rounded-full "
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="object-cover rounded-full"
      />
    </div>
  );
};

export default AvatarComponent;
