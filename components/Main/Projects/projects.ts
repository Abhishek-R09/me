import todoAppProj from '../../../public/static/images/todoAppProj.png'
import osVisualizerProj from '../../../public/static/images/osVisualizerProj.png'
import farmTrade from '../../../public/static/images/farmTradeProj.png'
import pharmacyProjImg from '../../../public/static/images/pharmacyProjImg.jpg'

export const projects = [
  {
    projName: 'FarmTrade',
    type: 'Personal',
    projDesc: `A task app made for storing simple task lists. 
            This is made purely using React. It's a template for making frontend for task apps. 
            The app features task lists which can contain sub tasks. Each sub task can have an 
            associated content and a timestamp.`,
    imgUrl: farmTrade,
    imgTitle: 'Home page of Task App',
    projLink: 'https://github.com/Abhishek-R09/Farm-Trade',
    techUsed: ['Next.js', 'REST APIs', 'MongoDB', 'Material UI'],
  },
  {
    projName: 'Task App',
    type: 'Personal',
    projDesc: `A task app made for storing simple task lists. 
            This is made purely using React. It's a template for making frontend for task apps. 
            The app features task lists which can contain sub tasks. Each sub task can have an 
            associated content and a timestamp.`,
    imgUrl: todoAppProj,
    imgTitle: 'Home page of Task App',
    projLink: 'https://github.com/Abhishek-R09/Todo-List-App-React',
    techUsed: ['React.js', 'React Router', 'Redux', 'GitHub Pages', 'Axios'],
    website: 'https://abhishek-r09.github.io/Todo-List-App-React',
  },
  // {
  //   projName: 'CPU Scheduling Visualizer',
  //   type: 'Team Work',
  //   projDesc: `This project demonstrates several CPU scheduling algorithms in a graphical way.
  //           The project is built using Python. The purpose of the app is to help visualize the CPU scheduling algorithms
  //           and make it easy to understand. The app was made in collaboration with my classmates.`,
  //   imgUrl: osVisualizerProj,
  //   imgTitle: 'Sample CPU Scheduling Visualizer',
  //   projLink: 'https://github.com/Siddharth-Gandhi/CPU-Scheduling-Visualizer',
  //   techUsed: ['ABC', 'DEF'],
  // },
  {
    projName: 'Pharmacy System',
    type: 'Team Work',
    projDesc: `This app helps to manage a single pharmacy store. 
            The app is built with backend in Node.js + Express.js, database used is MySQL and frontend in HTML, CSS and JS with
             Bootstrap library. This is a simple to use app which can generate bills, manage and maintain storage and keeps records 
             of employees with proper authentication.`,
    imgUrl: pharmacyProjImg,
    imgTitle: 'Home page of Pharmacy Management System',
    projLink: 'https://github.com/Abhishek-R09/Pharmacy-Management-System',
    techUsed: ['Express.js', 'MySQL', 'EJS', 'Passport.js'],
  },
]
