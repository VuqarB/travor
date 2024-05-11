import { getTestimonals } from "../../../prisma/script";
import Testimonal from "./Testimonal";

const TestimonalWrapper = async () => {
  const testimonals = await getTestimonals();

  return (
    <>
      {testimonals.map((testimonal) => (
        <Testimonal key={testimonal.travelerName} testimonal={testimonal} />
      ))}
    </>
  );
};

export default TestimonalWrapper;
