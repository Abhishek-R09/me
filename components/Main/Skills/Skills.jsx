import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faReact, faNode } from '@fortawesome/free-brands-svg-icons';
import SkillCard from './SkillCard';
// import ProficiencyGraph from './ProficiencyGraph/ProficiencyGraph';

const skills = [
  {
    name: 'React',
    icon: <FontAwesomeIcon icon={faReact} />,
    color: '#61DAFB',
    content: `React is a popular frontend library for web apps. I have been learning React for quite long
     and developed some experience with it. I'm also quite familiar with the associated packages like
      MaterialUI, Redux, etc.`,
  },
  {
    name: 'SQL',
    icon: <FontAwesomeIcon icon={faDatabase} />,
    color: '#00758F',
    content: `SQL stands for Structured Query Language. It is designed for managing data in a 
            RDBMS. Having done a medium sized project which uses MySQL, I have 
            gained some experience with it. Hence, I'm comfortable writing the database queries and can make a full-fledged application.`,
  },
  {
    name: 'Express.js',
    icon: <FontAwesomeIcon icon={faNode} />,
    color: '#77B062',
    content: `Express.js is popular backend framework based on Node.js. I feel it's much easier to build backend of the 
            applications using Express than with Node. I chose it because it's faster to build 
            using Express and also widely used. Quite a few projects showcase my ability and usage of Express which are available in GitHub.`,
  },
];

const useStyles = makeStyles((theme) => ({
  skills: {
    backgroundColor: theme.palette.primary.card,
    '& h2': {
      color: theme.palette.primary.fontColor2,
    },
  },
}));

const Skills = () => {
  const localClasses = useStyles();
  return (
    <>
      <section id="skills" className={localClasses.skills}>
        <h2>Skills</h2>
        <Grid container spacing={3} justify="center">
          {skills.map((skill) => (
            <Grid item xs={12} sm={6} md={4} key={skill.name}>
              <SkillCard
                name={skill.name}
                icon={skill.icon}
                color={skill.color}
                content={skill.content}
              />
            </Grid>
          ))}
        </Grid>
        {/* <ProficiencyGraph /> */}
      </section>
    </>
  );
};

export default Skills;
