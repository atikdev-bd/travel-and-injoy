import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container w-full">
      <div className="">
        <h1 className="text-center  text-amber-300 font-bold text-4xl pt-44 ">
          {" "}
          This is the travel side{" "}
        </h1>
      </div>
      <div className="grid lg:grid-cols-3 gap-2 mt-52">
        <div className="div-1">
          <h1 className="mt-64 text-3xl font-bold ml-4">COX'S BAZAR</h1>
        </div>
        <div className="div-2">
          <h1 className="mt-64 text-3xl font-bold ml-4">SAJEK</h1>
        </div>
        <div className="div-3">
          <h1 className="mt-64 text-3xl font-bold ml-4">SUNDARBANS</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
