import React from "react";
import Layout from "../../layouts/Layout";
import Logo from "../../assets/logo.png";

const AboutPage = () => {
  return (
    <Layout>
      <div className="bg-primary h-screen flex flex-col justify-center items-center">
        <div className="flex justify-between items-center w-full">
          <p className="flex-1 text-center font-condensed md:text-5xl text-2xl font-bold">
            WHO WE ARE?
          </p>
          <div className="flex-1 flex items-center justify-center ">
            <p className="font-jersey text-4xl font-bold">Its Dry</p>
            <img src={Logo} className="w-1/4 " alt="" />
          </div>
        </div>
        <div className="w-4/5">
          <h1 className="font-jersey md:text-4xl text-xl font-bold">
            Every Drops Matters.
          </h1>
          <hr className="border-black pb-3" />
          <p className="font-condensed tracking-wide md:text-xl text-sm leading-normal">
            Welcome to It’s Dry, a platform dedicated to fighting the growing
            global threat of drought. We believe in the power of collective
            action, education, and advocacy to address one of the most critical
            challenges facing humanity. Our mission is to inspire individuals,
            communities, and organizations to take part in creating a
            water-secure and sustainable future for all.
          </p>
          <h2 className="font-jersey md:text-2xl text-lg font-bold my-3">
            Our Mission
          </h2>
          <p className="font-condensed tracking-wide text-xl leading-normal">
            At It’s Dry, we’re on a mission to combat drought by:
          </p>
          <ul className="font-condensed md:text-xl text-sm leading-normal">
            <li>
              - Educating the public about drought’s causes, effects, and
              solutions.
            </li>
            <li>
              - Inspiring action through events, campaigns, and community-driven
              initiatives.
            </li>
            <li>
              - Empowering communities to conserve water and implement
              sustainable practices.
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
