import Button from "./Button";
import { FILTER_TYPES, FILTER_GUESTS } from "@/constants";

export default function Filter() {
  return (
    <div className="max-container">
      <div className="w-full p-10 filter-border rounded-[20px] cLg:rounded-[500px] bg-[#faf8fd]">
        <form>
          <div className="flex-center cLg:flex-between gap-4 flex-wrap cLg:flex-nowrap">
            <div className="w-full xs:w-[45%] cLg:w-1/5">
              <div className="text-[#1f3347] font-bold mb-[5px]">
                Destination
              </div>
              <input
                type="text"
                placeholder="Search Location"
                className="w-full h-5 bg-transparent outline-none block text-[14px] leading-[1.43] text-[#333]"
              />
            </div>
            <div className="hidden cLg:block w-[1px] h-[45px] bg-[#08AC7A] xl:mx-[20px]" />

            <div className="w-full xs:w-[45%] cLg:w-1/5">
              <div className="text-[#1f3347] font-bold mb-[5px]">Type</div>
              <select className="w-full h-5 bg-transparent outline-none block text-[14px] leading-[1.43] text-[#333]">
                {FILTER_TYPES.map((data) => (
                  <option key={data.value} value={data.value}>
                    {data.value}
                  </option>
                ))}
              </select>
            </div>
            <div className="hidden cLg:block w-[1px] h-[45px] bg-[#08AC7A] xl:mx-[20px]" />

            <div className="w-full xs:w-[45%] cLg:w-1/5">
              <div className="text-[#1f3347] font-bold mb-[5px]">Date</div>
              <input
                type="text"
                placeholder="Type Date"
                className="w-full h-5 bg-transparent outline-none block text-[14px] leading-[1.43] text-[#333]"
              />
            </div>
            <div className="hidden cLg:block w-[1px] h-[45px] bg-[#08AC7A] xl:mx-[20px]" />

            <div className="w-full xs:w-[45%] cLg:w-1/5">
              <div className="text-[#1f3347] font-bold mb-[5px]">Guest</div>
              <select className="w-full h-5 bg-transparent outline-none block text-[14px] leading-[1.43] text-[#333]">
                {FILTER_GUESTS.map((data) => (
                  <option key={data.value} value={data.value}>
                    {data.value}
                  </option>
                ))}
              </select>
            </div>

            <div className="w-full xs:w-[45%] cLg:w-1/5 flex items-center justify-center cLg:justify-end">
              <Button translate>Find Trip</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
