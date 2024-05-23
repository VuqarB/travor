import { getPackages } from "../../../prisma/script";
import Package from "./Package";

interface Packages {
  id: string;
  title: string;
  duration: string;
  averageRate: number;
  price: number;
  imgUrl: string;
}

const PackagesWrapper = async () => {
  const packages: any = await getPackages(6);

  return (
    <>
      {packages.map((data: Packages) => (
        <Package key={data.id} data={data} />
      ))}
    </>
  );
};

export default PackagesWrapper;
