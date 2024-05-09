import Image from "next/image";
import Section from "@/app/components/ui/Section";

type Gallery = {
  title?: string;
  gallery: string[];
};

export default function Gallery({ title, gallery }: Gallery) {
  return (
    <Section className="max-container">
      <div className="flex flex-col">
        <div className="max-w-[586px] w-full">
          <h1 className="text-[28px] xs:text-[32px] cLg:text-[36px] text-[#1f3347] leading-[1.38] font-bold mb-2.5">
            Gallery
          </h1>

          <p className="text-[#595959] mt-[15px]">
            Some Basic information about {title} that can help you a lot when
            you visit so check out all the information before starting your tour
          </p>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 cLg:grid-cols-4 gap-[30px] mt-10 cLg:mt-[60px]">
          {gallery.map((imgUrl) => (
            <div key={imgUrl} className="rounded-[10px] overflow-hidden">
              <Image
                src={imgUrl}
                alt={imgUrl}
                width={270}
                height={202}
                className="w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
