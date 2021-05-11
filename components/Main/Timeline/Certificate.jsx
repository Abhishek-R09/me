import React from "react";
import CertificateItem from "./CertificateItem";

function Certificate(params) {
  return (
    <div>
      <CertificateItem
        title="Web Design for Everybody: Basics of Web Development & Coding Specialization"
        platform="Coursera"
        completed="July 2020"
        link="https://coursera.org/share/cb160e0cca20385b819f184fcfb664f0"
      />
      <CertificateItem
        title="The Complete 2020 Web Development Bootcamp"
        platform="Udemy"
        completed="November 2020"
        link="https://www.udemy.com/certificate/UC-debdee0e-cb0a-44f4-bebe-ae3f23888c29/"
      />
    </div>
  );
}

export default Certificate;
