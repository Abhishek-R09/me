import { Grid } from "@material-ui/core";
import React from "react";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <div id="skills">
      <h2>Skills</h2>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} sm={6} md={4}>
          <SkillCard
            name="React"
            icon={<i className="fab fa-react" style={{ color: "#61DAFB" }}></i>}
            color="#61DAFB"
            content={`React is a popular frontend library for web apps. I have been learning React for quite long
             and developed some experience with it. I'm also quite familiar with the associated packages like
              MaterialUI, Redux, etc.`}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SkillCard
            name="SQL"
            icon={
              <i className="fas fa-database" style={{ color: "#00758F" }}></i>
            }
            color="#00758F"
            content={`SQL stands for Structured Query Language. It is designed for managing data in a 
            RDBMS. Having done a medium sized project which uses MySQL, I have 
            gained some experience with it. Hence, I'm comfortable writing the database queries and can make a full-fledged application.`}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SkillCard
            name="Express.js"
            icon={<i className="fab fa-node" style={{ color: "#77B062" }}></i>}
            color="#77B062"
            content={`Express.js is popular backend framework based on Node.js. I feel it's much easier to build backend of the 
            applications using Express than with Node. I chose it because it's faster to build 
            using Express and also widely used. Quite a few projects showcase my ability and usage of Express which are available in GitHub.`}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Skills;
