import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faReact, faNode } from '@fortawesome/free-brands-svg-icons';
import img from '../../../public/static/images/IMG20220813163307.jpg';

const skills = [
  {
    name: 'TypeScript',
    icon: <FontAwesomeIcon icon={faReact} />,
    color: '#61DAFB',
  },
  {
    name: 'React.js',
    icon: <FontAwesomeIcon icon={faReact} />,
    color: '#61DAFB',
  },
  {
    name: 'Spring Boot',
    icon: <FontAwesomeIcon icon={faDatabase} />,
    color: '#00758F',
  },
  {
    name: 'Express.js',
    icon: <FontAwesomeIcon icon={faNode} />,
    color: '#77B062',
  },
  {
    name: 'SQL',
    icon: <FontAwesomeIcon icon={faNode} />,
    color: '#77B062',
  },
  {
    name: 'MongoDB',
    icon: <FontAwesomeIcon icon={faNode} />,
    color: '#77B062',
  },
];

const About = () => {
  const contentPara1 = `Hi! I'm Abhishek Ramasubramanian. I'm a Computer Science student from Vellore Institute of Technology, Vellore. The amount of progress made in the field of computer science fascinates me and motivates me to explore new things. I'm open to learning new stuff and going beyond them.`;

  const contentPara2 = `I have some experience in using different Web Technologies and also work with Databases in SQL as well as NoSQL. The best of my projects are listed down below and they are open-source. I would welcome suggestions to improve them. I have even collaborated on some of them. Please do check it out.`;

  const contentPara3 = `I'm an apt leader and a good communicator where needed. I focus on my goal and don't deviate from it unless necessary. I give priority to the completion of the assigned work and not leave it till the end. This is my guarantee. I'm fluent in English and Hindi while Tamil is my mother tongue. Generally I don't post much things on social media but I'm present there to be updated with the current affairs.`;

  const contentPara4 = `Here are a few technologies I’ve been working with recently:`;

  return (
    <section id="about" className="mb-20 min-h-screen">
      <h2 className="relative mb-10 flex w-full items-center text-xl font-bold text-slate-300 before:relative before:mr-3 before:h-px before:w-full before:bg-emerald-300 after:relative after:ml-3 after:h-px after:w-full after:bg-emerald-300">
        About
      </h2>
      <div className="text-slate-400">
        <p className="mb-3">{contentPara1}</p>
        <p className="mb-3">{contentPara2}</p>
        <p className="mb-3">{contentPara3}</p>
        <p className="mb-3">{contentPara4}</p>
      </div>
      <div>
        <ul className="grid grid-cols-2 gap-2">
          {skills.map((skill) => (
            <li
              className="relative mb-2 pl-4 font-mono text-sm text-slate-400 before:absolute before:left-0 before:text-emerald-300 before:content-['▹']"
              key={skill.name}
            >
              {skill.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="mx-auto mt-8 box-border h-full w-4/5">
        <Image
          src={img}
          alt="My image"
          title="Abhishek Ramasubramanian"
          width={100}
          height={100}
          layout="responsive"
          objectFit="cover"
          objectPosition="top"
          placeholder="blur"
          className="rounded-md"
        />
      </div>
    </section>
  );
};

export default About;
