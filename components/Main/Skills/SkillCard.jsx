import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    // boxShadow: "#c3c3c3 2px 2px 2px 1px",
    border: "1px solid #c3c3c3",
    width: "90%",
    margin: "auto",
    height: "100%",
  },
  cardContent: {
    backgroundColor: "#0f4c75",
    height: "100%",
    color: "#bbe1fa",
    "& p": {
      color: "#bbe1fa",
      fontFamily: "Open Sans",
    },
    "& i": {
      display: "block",
      fontSize: "2em",
      textAlign: "center",
    },
    "& h5": {
      margin: "10px auto",
      fontFamily: "Montserrat",
    },
  },
}));

const SkillCard = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        {props.icon}
        <Typography gutterBottom variant="h5" component="h5" align="center">
          {props.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SkillCard;
