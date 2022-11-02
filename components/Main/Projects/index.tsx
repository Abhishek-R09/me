import React from 'react';
import MainHeadings from '../../Heading';
import Section from '../../Section';
import ProjectCard from './ProjectCard';

const projects = [
  {
    projName: 'Task App',
    type: 'Personal',
    projDesc: `A task app made for storing simple task lists. 
            This is made purely using React. It's a template for making frontend for task apps. 
            The app features task lists which can contain sub tasks. Each sub task can have an 
            associated content and a timestamp.`,
    imgUrl: '/static/images/todoAppProj.png',
    imgTitle: 'Home page of Task App',
    projLink: 'https://github.com/Abhishek-R09/Todo-List-App-React',
    techUsed: ['ABC', 'DEF'],
  },
  {
    projName: 'CPU Scheduling Visualizer',
    type: 'Team Work',
    projDesc: `This project demonstrates several CPU scheduling algorithms in a graphical way. 
            The project is built using Python. The purpose of the app is to help visualize the CPU scheduling algorithms 
            and make it easy to understand. The app was made in collaboration with my classmates.`,
    imgUrl: '/static/images/osVisualizerProj.png',
    imgTitle: 'Sample CPU Scheduling Visualizer',
    projLink: 'https://github.com/Siddharth-Gandhi/CPU-Scheduling-Visualizer',
    techUsed: ['ABC', 'DEF'],
  },
  {
    projName: 'Pharmacy System',
    type: 'Team Work',
    projDesc: `This app helps to manage a single pharmacy store. 
            The app is built with backend in Node.js + Express.js, database used is MySQL and frontend in HTML, CSS and JS with
             Bootstrap library. This is a simple to use app which can generate bills, manage and maintain storage and keeps records 
             of employees with proper authentication.`,
    imgUrl: '/static/images/pharmacyProjImg.jpg',
    imgTitle: 'Home page of Pharmacy Management System',
    projLink: 'https://github.com/Abhishek-R09/Pharmacy-Management-System',
    techUsed: ['ABC', 'DEF', 'GHI'],
  },
];

const Projects = () => {
  return (
    <Section id="projects">
      <MainHeadings title="Projects" />
      <ul className="list-none">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.projName}
            projName={project.projName}
            type={project.type}
            projDesc={project.projDesc}
            imgUrl={project.imgUrl}
            imgTitle={project.imgTitle}
            projLink={project.projLink}
            techUsed={project.techUsed}
            index={index}
          />
        ))}
      </ul>
    </Section>
  );
};

export default Projects;
