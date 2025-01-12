import React, { useState, useEffect } from "react";
import Layout from "../../layouts/Layout";
import axiosInstance from "../../helper/apiHelper";
import { Link } from "react-router-dom";

const ArticlePage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchArticles = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get("/articles");
      setArticles(response.data.data);
    } catch (error) {
      console.error("Error fetching articles:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen bg-primary flex justify-center items-center">
          <p className="text-2xl">Loading...</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen pt-44 bg-primary p-8">
        <h1 className="text-center font-condensed uppercase font-bold text-4xl mb-11">
          Our Article
        </h1>

        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-accent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={`http://127.0.0.1:8000/storage/${article.photo}`}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2">{article.title}</h2>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-sm text-gray-500">
                      By {article.author || "Unknown"}
                    </span>
                    <Link to={`/article/${article.id}`}>
                      <button className="bg-accent text-white px-4 py-2 rounded hover:bg-opacity-90 transition-colors">
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-8">
              <p className="text-xl text-gray-600">No articles found</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ArticlePage;
