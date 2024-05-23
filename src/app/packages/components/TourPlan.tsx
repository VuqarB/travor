"use client";

import Section from "@/components/ui/Section";
import Image from "next/image";
import { useMemo, useState } from "react";

type PlanList = {
  id: string;
  item: string;
}

type Plan = {
  title: string;
  desc: string;
  imgUrl: string;
  planList: PlanList[];
};

type TourPlanProps = {
  plans: Plan[];
};

const TourPlan = ({ plans }: TourPlanProps) => {
  const [activePlan, setActivePlan] = useState<string>(plans[0].title);
  const planNavs = useMemo(() => plans.map((item) => item.title), [plans]);
  const activePlanDetails = useMemo(
    () => plans.find((plan) => plan.title === activePlan),
    [plans, activePlan]
  );

  console.log(activePlanDetails);
  

  const handleActivePlan = (title: string) => {
    if (title !== activePlan) {
      setActivePlan(title);
    }
  };

  return (
    <Section>
      <div className="max-container">
        <h2 className="text-[28px] xs:text-[32px] cLg:text-[36px] mt-0 text-[#1f3347] font-bold leading-[1.375] mb-2.5">
          Tour Plan
        </h2>

        <div className="mt-[30px] cLg:mt-[50px]">
          <nav>
            <ul className="flex flex-wrap justify-center cLg:justify-normal gap-[35px] md:gap-[50px] cLg:gap-[70px] mb-5">
              {planNavs.map((listNav) => (
                <li
                  key={listNav}
                  className={`cursor-pointer ${
                    listNav === activePlan ? "text-[#08ac9e]" : "text-[#cfcfcf]"
                  } underline font-bold text-[20px] md:text-[24px]`}
                  onClick={() => handleActivePlan(listNav)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) =>
                    e.key === "Enter" && handleActivePlan(listNav)
                  }
                >
                  {listNav}
                </li>
              ))}
            </ul>
          </nav>

          {activePlanDetails && (
            <div className="grid items-center grid-cols-1 md:grid-cols-[440px_1fr] gap-x-[50px] gap-y-[16px]">
              <div>
                <div className="mb-[20px] text-[#595959] font-semibold">
                  Visit: {activePlanDetails.desc}
                </div>

                <ul className="flex flex-col pl-0 mb-0 gap-y-[20px]">
                  {activePlanDetails.planList.map((plan) => (
                    <li
                      key={plan.id}
                      className="flex items-center gap-x-[10px] text-[16px] text-[#595959]"
                    >
                      <div className="w-[10px] h-[10px] rounded-full bg-[#d9d9d9]" />
                      <div>{plan.item}</div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-center md:justify-normal">
                <Image
                  src={activePlanDetails.imgUrl}
                  width={421}
                  height={397}
                  alt={activePlanDetails.imgUrl}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
};

export default TourPlan;
