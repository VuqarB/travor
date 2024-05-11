import Image from "next/image";

type ImgSize = {
  width: number;
  height: number;
};

type SubtitleProps = {
  content: string;
  img?: string;
  size?: ImgSize;
  noMargin?: boolean;
  className?: string;
};

export default function Subtitle({
  content,
  img,
  size,
  noMargin,
  className,
}: SubtitleProps) {
  return (
    <div
      className={`w-full flex items-center gap-2.5 ${
        !noMargin && "mb-[17px]"
      } ${className}`}
    >
      <div className="text-[#08ac9e] tracking-[.02px]">{content}</div>
      {img && size && (
        <Image
          src={img}
          alt={content}
          width={size.width}
          height={size.height}
        />
      )}
    </div>
  );
}
