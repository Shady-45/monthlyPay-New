import React from "react";
import Fourth from "../../Fourth";
import MainSection from "../../MainSection";
import { homeObjOne, homeObjThree, homeObjTwo } from "./Data";

const Home = () => {
  return (
    <>
      <MainSection {...homeObjOne} />
      {/* <MainSection {...homeObjThree} /> */}
      <Fourth />
    </>
  );
};

export default Home;
