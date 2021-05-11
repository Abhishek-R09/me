import React from "react";
import classes from "./projectCard.module.css";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  expand: {
    transform: "rotate(0deg)",
    padding: 0,
    marginLeft: "auto",
    color: "#bbe1fa",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
    "&:hover": {
      color: "#1b262c",
    },
    "&:focus": {
      color: "#bbe1fa",
    },
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

function ProjectCard(props) {
  const localClasses = useStyles();

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <div className={classes.ProjectCard}>
      <div className={classes.projectImage}>
        <Image
          src={`${props.imgUrl}`}
          alt={props.imgTitle}
          layout="fill"
          objectFit="cover"
          objectPosition="0 0"
        />
      </div>
      <div className={classes.projectName}>
        <h4>{props.projName}</h4>
        <h6>{props.type}</h6>
      </div>
      <div className={classes.projectCardActions}>
        <a
          href={props.projLink && props.projLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className={classes.srcCodeBtn}>Source Code</button>
        </a>
        <IconButton
          className={`${localClasses.expand} ${
            expanded ? localClasses.expandOpen : null
          }`}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </div>
      <Collapse in={expanded} timeout="auto" mountOnEnter unmountOnExit>
        <div className={classes.projectContent}>{props.projDesc}</div>
      </Collapse>
    </div>
  );
}

export default ProjectCard;
