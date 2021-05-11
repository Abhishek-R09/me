import React from "react";
import classes from "./about.styles.module.css";

function About(props) {
  const aboutMeTitle = "Hi! I'm Abhishek Ramasubramanian";
  const contentPara1 = `I'm a Computer Science student from Vellore Institute of Technology, Vellore.
  The amount of progress made in the field of computer science fascinates me and motivates me to 
  explore new things. I'm open to learning new stuff and going beyond them.`;

  const contentPara2 = `I have experience in Web Technologies including Databases in SQL as well as
   NoSQL and Android Development. The best of my projects are listed down below and they are open-source.
   I would welcome suggestions to improve them. I have even collaborated on some of them. Please do check it out.`;

  const contentPara3 = `I'm an apt leader and a good communicator where needed. I focus on my goal 
   and don't deviate from it unless necessary. I give priority to the completion of
   the assigned work and not leave it till the end. This is my guarantee. I'm fluent in English and Hindi while 
   Tamil is my mother tongue. Generally I don't post much things on social media but I'm present there to
   be updated with the current affairs.`;

  return (
    <div id="about" className={classes.about}>
      <h2>About</h2>
      <div className={classes.aboutImg}></div>
      <div className={classes.aboutContent}>
        <h3 style={{ textAlign: "start" }}>{aboutMeTitle}</h3>
        <p>{contentPara1}</p>
        <p>{contentPara2}</p>
        <p>{contentPara3}</p>
      </div>
    </div>
  );
}

export default About;
