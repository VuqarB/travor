import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

type SliderButtonProps = {
  positions: string;
  onClick: () => void;
};

export default function SliderNextBtn({
  positions,
  onClick,
}: SliderButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`absolute ${positions} flex-center rounded-full text-white bg-[#08ac9e] hover:bg-[#ff621f] w-[24px] h-[24px] transition-all duration-300 ease-linear`}
    >
      <KeyboardArrowRightIcon fontSize="small" />
    </button>
  );
}
