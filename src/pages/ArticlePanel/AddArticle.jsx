import React, { useState } from "react";
import axiosInstance from "../../helper/apiHelper";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddArticle = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    photo: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const response = await axiosInstance.post("/articles", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      const articleWithUser = response.data.data;
      console.log("Article created by:", articleWithUser.user.name);

      Swal.fire({
        icon: "success",
        title: "Article Created",
        text: `Article published by ${articleWithUser.user.name}`,
      });

      navigate("/article-panel/data");
    } catch (error) {
      console.error("Error creating article:", error);
      alert(
        "Failed to create article: " +
          (error.response?.data?.message || "Unknown error")
      );
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6">Add New Article</h2>

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
              photo
            </label>
            <input
              type="file"
              accept="photo/*"
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-accent hover:file:bg-blue-100"
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, photo: e.target.files[0] }))
              }
            />
          </div>

          <button
            type="submit"
            className="w-full bg-accent text-white py-2 px-4 rounded hover:bg-accent transition-colors"
          >
            Publish Article
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddArticle;
