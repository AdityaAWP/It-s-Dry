import React, { useState, useEffect } from "react";
import axiosInstance from "../../helper/apiHelper";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ArticleData = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get("/articles");
      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        const token = localStorage.getItem("token");
        await axiosInstance.delete(`/articles/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        Swal.fire("Deleted!", "Your article has been deleted.", "success");
        fetchData();
      }
    } catch (error) {
      console.error("Error deleting article:", error);
      Swal.fire("Error!", "Failed to delete article.", "error");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="bg-primary py-4 pr-10 flex justify-end">
        <Link to={"/article-panel/write"}>
          <button className="bg-accent text-white py-2 px-3 rounded">
            Write My Own +
          </button>
        </Link>
      </div>
      <div className="p-4">
        <table className="w-full border-collapse border border-slate-400">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-slate-400 p-2 text-left">Title</th>
              <th className="border border-slate-400 p-2 text-left">Content</th>
              <th className="border border-slate-400 p-2 text-left">Photo</th>
              <th className="border border-slate-400 p-2 text-left">
                Created By
              </th>
              <th className="border border-slate-400 p-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, key) => (
              <tr key={key}>
                <td className="border border-slate-400 p-2">{item.title}</td>
                <td className="border border-slate-400 p-2">
                  {item.content.length > 100
                    ? `${item.content.substring(0, 100)}...`
                    : item.content}
                </td>
                <td className="border border-slate-400 p-2">
                  <img
                    src={`http://127.0.0.1:8000/storage/${item.photo}`}
                    alt={item.title}
                    className="w-32 h-32 object-cover rounded"
                  />
                </td>
                <td className="border border-slate-400 p-2">
                  {item.author || "Unknown User"}
                </td>
                <td className="border border-slate-400 p-2">
                  <Link to={`/article-panel/edit/${item.id}`}>
                    <button className="bg-accent text-white py-1 px-2 rounded">
                      Edit
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-500 text-white py-1 px-2 rounded ml-2 hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ArticleData;
