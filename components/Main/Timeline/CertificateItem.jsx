import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "15px auto",
  },
  media: {
    height: 140,
  },
});

function CertificateItem(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root} raised={true}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="body1" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Platform: {props.platform}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Completed: {props.completed}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
        <Button
          href={props.link}
          size="small"
          color="primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Certificate
        </Button>
      </CardActions>
    </Card>
  );
}

export default CertificateItem;
