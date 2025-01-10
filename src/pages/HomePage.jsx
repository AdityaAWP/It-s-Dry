import React from "react";
import Layout from "../layouts/Layout";
import Hero from "../components/home/Hero";
import About from "../components/home/About";

const HomePage = () => {
  return (
    <Layout>
      <div className="bg-[#f2e7dc]">
        <Hero />
        <About/>
      </div>
    </Layout>
  );
};

export default HomePage;
