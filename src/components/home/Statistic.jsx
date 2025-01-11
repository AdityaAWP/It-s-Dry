import { Link } from "react-router-dom";
import Button from "../../elements/Button";

const Statistic = () => {
  const data = [
    {
      percentage: "68%",
      description:
        "Between 1970 and 2020, 68% of deaths caused by natural disasters were due to drought-related events.",
    },
    {
      percentage: "45 MILLION",
      description:
        "In 2022, an estimated 45 million people across 40 countries face problems due to drought.",
    },
  ];
  return (
    <div className="mt-20 font-condensed bg-second py-10">
      <div className="flex md:flex-row flex-col md:gap-0 gap-10 ">
        <div className="flex-1 flex items-center justify-center">
          <h1 className="font-bold md:text-5xl text-2xl md:w-1/2 leading-normal  uppercase">
            What We Facing? <br />
            And Why We Care
          </h1>
        </div>
        <div className="flex-1 flex gap-11 justify-center items-center">
          {data.map((item, key) => (
            <div className="w-1/3">
              <p className="font-bold md:text-4xl">{item.percentage}</p>
              <hr className="border-black my-3" />
              <p className="md:text-lg">{item.description}</p>
            </div>
          ))}
        </div>
        <hr className="border-black" />
      </div>
      <Link to={"/statistic"}>
        <Button text={"See More"} />
      </Link>
    </div>
  );
};

export default Statistic;
