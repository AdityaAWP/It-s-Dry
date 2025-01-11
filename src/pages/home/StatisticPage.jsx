import React from "react";
import Layout from "../../layouts/Layout";

const StatisticPage = () => {
  const data = [
    {
      percentage: "68%",
      description:
        "Between 1970 and 2020, 68% of deaths caused by natural disasters were due to drought-related events.",
    },
    {
      percentage: "$45 MILLION",
      description:
        "In 2022, an estimated 45 million people across 40 countries face problems due to drought.",
    },
    {
      percentage: "$1.84 BILLION",
      description:
        "Approximately 1.84 billion people are currently experiencing drought conditions, with 4.7% exposed to severe or extreme drought.",
    },
    {
      percentage: "98%",
      description:
        "In 2022, 98% of the 32.6 million new disaster displacements were caused by weather-related hazards, including droughts",
    },
    {
      percentage: "$550 BILLION",
      description:
        "In 2024, climatic extremes, including droughts, resulted in economic losses exceeding $550 billion globally.",
    },
    {
      percentage: "33 YEARS",
      description:
        "The year 2023 was the driest for global rivers in 33 years, exacerbating water scarcity issues worldwide.",
    },
  ];
  return (
    <Layout>
      <div className="flex flex-col gap-20 pt-20 h-screen justify-center items-center bg-primary">
        <h1 className="font-condensed font-bold md:text-4xl text-xl tracking-wide">
          Statistic About Our Disaster:
        </h1>
        <div className="flex flex-wrap gap-11  justify-center items-center">
          {data.map((item, key) => (
            <div className="w-1/3">
              <p className="font-bold md:text-4xl">{item.percentage}</p>
              <hr className="border-black my-3" />
              <p className="md:text-lg text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default StatisticPage;
