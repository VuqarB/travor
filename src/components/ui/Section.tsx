type SectionProps = {
  padding?: string;
  className?: string;
  children: JSX.Element;
};

export default function Section({
  padding,
  className,
  children,
}: SectionProps) {
  return (
    <section
      className={`relative ${
        padding || "pb-[60px] md:pb-[80px] cLg:pb-[100px] xl:pb-[120px]"
      } ${className}`}
    >
      {children}
    </section>
  );
}
