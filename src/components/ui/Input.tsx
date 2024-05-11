type InputProps = {
  type: string;
  placeholder: string;
};

export default function Input({ type, placeholder }: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="h-[50px] w-full block py-3 px-5 border border-[#696969] rounded-[200px] bg-transparent regular-14 leading-[1.43] text-[#595959] outline-none transition-all duration-300 ease-linear focus:border-[#ff621f]"
      required
    />
  );
}
