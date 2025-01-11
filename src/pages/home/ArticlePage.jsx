import React from "react";
import Layout from "../../layouts/Layout";
import Hero from "../../assets/hero.jpeg";
const ArticlePage = () => {
  const news = [
    {
      image: Hero,
      title: "This is What Will Happen",
      description: "sasaisasiasiasnmaisnansiasinanisasa....",
    },
    {
      image: Hero,
      title: "This is What Will Happen",
      description: "sasaisasiasiasnmaisnansiasinanisasa....",
    },
    {
      image: Hero,
      title: "This is What Will Happen",
      description: "sasaisasiasiasnmaisnansiasinanisasa....",
    },
  ];
  return (
    <Layout>
      <div className="h-screen bg-primary flex flex-col justify-center items-center">
        <p className="text-4xl font-condensed font-bold uppercase">
          Our Article :{" "}
        </p>
        <hr className="border-black" />
        <div className="flex md:flex-row w-full flex-col justify-evenly items-center mt-10">
          {news.map((item, key) => (
            <div className="relative flex md:flex-col flex-row justify-between items-center md:mx-0 mx-10 md:my-6 my-3 bg-second shadow-sm border border-slate-200 rounded-lg md:w-96 md:h-96 h-44">
              <div className="relative md:h-56 m-2.5 overflow-hidden text-white rounded-md">
                <img src={item.image} alt="card-image" />
              </div>
              <div className="p-4 md:w-full w-1/2 pr-5">
                <h6 className="mb-2 text-slate-800 md:text-xl text-sm font-semibold">
                  {item.title}
                </h6>
                <p className="text-slate-600 md:block hidden leading-normal font-light">
                  {item.description}
                </p>
              </div>
              <div className="px-4 pb-4 pt-0 mt-2">
                <button className="rounded-md bg-accent py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg hover:bg-slate-700">
                  more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ArticlePage;
