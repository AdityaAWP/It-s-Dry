import { FiArrowUpRight } from "react-icons/fi";
import Button from "../../elements/Button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axiosInstance from "../../helper/apiHelper";

const Blog = () => {
  const [articles, setArticles] = useState([]);

  const fetchArticles = async () => {
    try {
      const response = await axiosInstance.get("/articles");
      const latestArticles = response.data.data.slice(0, 3);
      setArticles(latestArticles);
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

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
        {articles.map((item, key) => (
          <div
            key={key}
            className="relative flex flex-col md:my-6 my-3 bg-primary shadow-sm border border-slate-200 rounded-lg md:w-96 w-72 md:h-96 h-72"
          >
            <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
              <img
                src={`http://127.0.0.1:8000/storage/${item.photo}`}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                {item.title}
              </h6>
              <p className="text-slate-600 leading-normal font-light">
                {item.content.length > 100
                  ? `${item.content.substring(0, 100)}...`
                  : item.content}
              </p>
            </div>
            <div className="px-4 pb-4 pt-0 mt-2">
              <Link to={`/article/${item.id}`}>
                <button className="rounded-md bg-accent py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg hover:bg-slate-700">
                  Read more
                </button>
              </Link>
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
