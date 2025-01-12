import React, { useState, useEffect } from "react";
import axiosInstance from "../../helper/apiHelper";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const EditArticle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    photo: null,
  });
  const [currentPhoto, setCurrentPhoto] = useState("");

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axiosInstance.get(`/articles/${id}`);
        const article = response.data;
        console.log("Article data:", article);
        setFormData({
          title: article.title,
          content: article.content,
          photo: null,
        });
        setCurrentPhoto(article.photo);
      } catch (error) {
        console.error("Error fetching article:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to fetch article data",
        });
      }
    };

    fetchArticle();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const formDataToSend = new FormData();
      formDataToSend.append("title", formData.title);
      formDataToSend.append("content", formData.content);
      if (formData.photo) {
        formDataToSend.append("photo", formData.photo);
      }

      const response = await axiosInstance.post(
        `/articles/${id}`,
        formDataToSend,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
            "X-HTTP-Method-Override": "PUT",
          },
        }
      );
      Swal.fire({
        icon: "success",
        title: "Article Updated Successfully",
      });
      navigate("/article-panel/data");
    } catch (error) {
      console.error("Update error:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.response?.data?.message || "Failed to update article",
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6">Edit Article</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Article Title
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-accent"
              value={formData.title}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, title: e.target.value }))
              }
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Content
            </label>
            <textarea
              rows="10"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              value={formData.content}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, content: e.target.value }))
              }
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Current Photo
            </label>
            {currentPhoto && (
              <img
                src={`http://127.0.0.1:8000/storage/${currentPhoto}`}
                alt="Current"
                className="w-32 h-32 object-cover rounded mb-2"
              />
            )}
            <input
              type="file"
              accept="image/*"
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-accent hover:file:bg-blue-100"
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, photo: e.target.files[0] }))
              }
            />
          </div>

          <div className="flex space-x-4">
            <button
              type="submit"
              className="w-full bg-accent text-white py-2 px-4 rounded hover:bg-accent transition-colors"
            >
              Update Article
            </button>
            <button
              type="button"
              onClick={() => navigate("/article-panel/data")}
              className="w-full bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditArticle;
