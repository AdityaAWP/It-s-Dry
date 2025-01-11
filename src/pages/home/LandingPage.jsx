import React from "react";
import Layout from "../../layouts/Layout";
import Hero from "../../components/home/Hero";
import About from "../../components/home/About";
import Statistic from "../../components/home/Statistic";
import Blog from "../../components/home/Blog";

const LandingPage = () => {
  return (
    <Layout>
      <div className="bg-primary ">
        <Hero />
        <Statistic />
        <About />
        <Blog />
      </div>
    </Layout>
  );
};

export default LandingPage;
