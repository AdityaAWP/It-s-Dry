import { FiArrowUpRight } from "react-icons/fi";
import Hero from "../../assets/hero.jpeg";
import Button from "../../elements/Button";
import { Link } from "react-router-dom";
const Blog = () => {
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
    <div className="bg-second py-16">
      <div className="flex justify-between mx-24 items-center">
        <p>01/Latest Concerns</p>
        <Link to={"/article"}>
          <p className="flex items-center text-accent">
            See All <FiArrowUpRight />
          </p>
        </Link>
      </div>
      <hr className="border-black" />
      <div className="flex md:flex-row flex-col justify-evenly items-center mt-10">
        {news.map((item, key) => (
          <div className="relative flex flex-col md:my-6 my-3 bg-primary shadow-sm border border-slate-200 rounded-lg md:w-96 w-72 md:h-96 h-72">
            <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
              <img src={item.image} alt="card-image" />
            </div>
            <div className="p-4">
              <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                {item.title}
              </h6>
              <p className="text-slate-600 leading-normal font-light">
                {item.description}
              </p>
            </div>
            <div className="px-4 pb-4 pt-0 mt-2">
              <button className="rounded-md bg-accent py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg hover:bg-slate-700">
                Read more
              </button>
            </div>
          </div>
        ))}
      </div>
      <Link to={"/login"}>
        <Button text={"Write You're Own Concerns"} />
      </Link>
    </div>
  );
};

export default Blog;
