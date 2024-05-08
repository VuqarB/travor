import Link from "next/link";

type ButtonProps = {
  href?: string;
  className?: string;
  children: React.ReactNode;
  green?: boolean;
  translate?: boolean;
  padding: string;
  onClick?: () => void;
};

export default function Button({
  className,
  href,
  onClick,
  children,
  green,
  translate,
  padding,
}: ButtonProps) {
  const classes = `inline-block rounded-[200px] transition-all duration-200 ease-linear text-[16px] md:text-[18px] text-white text-center font-bold cursor-pointer  
    ${padding || "py-[7px] md:py-2.5 px-5 md:px-[25px]"} 
    ${green ? "bg-[#08ac9e] green-shadow" : "bg-[#ff621f] orange-shadow"} 
    ${translate && "hover:translate-y-[-3px]"} ${className || ""}`;

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );

  const renderLink = () => (
    <Link href={href || ""} className={classes} onClick={onClick}>
      {children}
    </Link>
  );

  return href ? renderLink() : renderButton();
}
