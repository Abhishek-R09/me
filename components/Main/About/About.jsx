import React from 'react';
import Image from 'next/image';
import { makeStyles } from '@material-ui/core/styles';
import classes from './about.styles.module.css';

const useStyles = makeStyles((theme) => ({
  about: {
    '& h2': {
      color: theme.palette.primary.fontColor2,
    },
  },
  aboutContent: {
    '& h3': {
      color: theme.palette.primary.fontColor2,
    },
    '& p': {
      color: theme.palette.primary.fontColor1,
    },
  },
}));

const About = () => {
  const localClasses = useStyles();
  const aboutMeTitle = "Hi! I'm Abhishek Ramasubramanian";
  const contentPara1 = `I'm a Computer Science student from Vellore Institute of Technology, Vellore. The amount of progress made in the field of computer science fascinates me and motivates me to explore new things. I'm open to learning new stuff and going beyond them.`;

  const contentPara2 = `I have some experience in using different Web Technologies and also work with Databases in SQL as well as NoSQL. The best of my projects are listed down below and they are open-source. I would welcome suggestions to improve them. I have even collaborated on some of them. Please do check it out.`;

  const contentPara3 = `I'm an apt leader and a good communicator where needed. I focus on my goal and don't deviate from it unless necessary. I give priority to the completion of the assigned work and not leave it till the end. This is my guarantee. I'm fluent in English and Hindi while Tamil is my mother tongue. Generally I don't post much things on social media but I'm present there to be updated with the current affairs.`;

  return (
    <section id="about" className={`${classes.about} ${localClasses.about}`}>
      <h2>About</h2>
      <div className={classes.aboutImg}>
        <Image
          src="/static/images/my-image.jpg"
          alt="My image"
          title="Abhishek Ramasubramanian"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
        />
      </div>
      <div className={`${classes.aboutContent} ${localClasses.aboutContent}`}>
        <h3 style={{ textAlign: 'start' }}>{aboutMeTitle}</h3>
        <p>{contentPara1}</p>
        <p>{contentPara2}</p>
        <p>{contentPara3}</p>
      </div>
    </section>
  );
};

export default About;
