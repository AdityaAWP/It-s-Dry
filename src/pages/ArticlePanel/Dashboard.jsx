import React, { useState, useEffect } from "react";
import axiosInstance from "../../helper/apiHelper";

const Dashboard = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get("/articles");
      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col h-full items-center justify-center">
      <h1 className="text-5xl my-4">Dashboard</h1>
      <div className="bg-white p-10 rounded-lg shadow-lg">
        <p className="text-3xl">Total Article : {data.length}</p>
      </div>
    </div>
  );
};

export default Dashboard;
