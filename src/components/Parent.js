import React from "react";
import { Banner } from "./Banner";
import { NavBar } from "./NavBar";
import { Education } from "./Education";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import backgroundImage from "../assets/img/banner-background.png";

export const Parent = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        minHeight: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "0",
      }}
    >
      <NavBar />
      <div style={{ maxWidth: "1200px", width: "100%" }}>
        <Banner />
        <Education />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Skills />
        <Projects />
      </div>
    </div>
  );
};
