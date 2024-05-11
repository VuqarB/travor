import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function ContactForm() {
  return (
    <div className="flex-1 md:self-end">
      <div className="text-[24px] leading-[1] font-bold text-[#1f3347]  mb-[50px]">
        Leave a comment
      </div>

      <div>
        <form className="flex flex-col gap-[30px]">
          <div className="flex gap-[30px] 2xl:gap-2.5 flex-col 2xl:flex-row">
            <Input type="text" placeholder="Name*" />
            <Input type="email" placeholder="Email*" />
          </div>
          <div className="flex gap-[30px] 2xl:gap-2.5 flex-col 2xl:flex-row">
            <Input type="phone" placeholder="Phone*" />
            <Input type="text" placeholder="Subject*" />
          </div>
          <div className="flex gap-2.5">
            <textarea
              className="h-[281px] w-full block py-3 px-5 border border-[#696969] rounded-[16px] bg-transparent regular-14 leading-[1.43] text-[#595959] outline-none transition-all duration-300 ease-linear focus:border-[#ff621f]"
              placeholder="Write here"
              required
            ></textarea>
          </div>
          <div className="mt-2.5 w-full">
            <Button>Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
