import Image from "next/image";
import Link from "next/link";

type PackageProps = {
  data: {
    id: string;
    title: string;
    duration: string;
    averageRate: number;
    price: number;
    imgUrl: string;
  };
};

export default function Package({ data }: PackageProps) {
  return (
    <>
      <div className="embla-packages__slide">
        <div className="pt-5 px-5 pb-[35px] rounded-[10px] bg-[#faf8fd] text-center transition-all duration-300 ease-linear package-item-hover">
          <Link
            href={`/packages/${data.id}`}
            className="w-full block max-h-[262px] overflow-hidden rounded-[8px]"
          >
            <Image
              src={data.imgUrl}
              alt={data.imgUrl}
              width={310}
              height={262}
              className="w-full object-cover"
            />
          </Link>

          <div className="flex-center flex-col w-full mt-[15px]">
            <Link
              href={`/packages/${data.id}`}
              className="text-[24px] text-[#1f3347] font-bold transition-all duration-300 ease-linear package-title-hover"
            >
              {data.title}
            </Link>
            <p className="mt-2.5 text-[#595959]">{data.duration}</p>
            <div className="w-full h-[1px] mt-5 mb-[15px] bg-[#bdbdbd]" />
            <div className="flex-between w-full">
              <div className="flex items-center gap-[5px]">
                <Image src="/rating.svg" alt="rating" width={12} height={14} />
                <div className="regular-14">{data.averageRate}</div>
              </div>
              <div className="text-[16px] font-semibold">
                Start from <span className="text-[#ff621f]">${data.price}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
