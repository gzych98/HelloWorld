import React from "react";
import Navbar from "../../UI/organisms/navbar/navbar";
import "./MainTemplate.css";

interface MainTemplateProps {
  children: React.ReactNode;
}

const MainTemplate: React.FC<MainTemplateProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default MainTemplate;
