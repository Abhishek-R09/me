import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  card: {
    // boxShadow: '#0c0c0c 4px 4px 2px 0px',
    boxShadow: '#0c0c0c 2px 5px 8px 4px',
    width: '100%',
    margin: 'auto',
    height: '100%',
    '&.MuiPaper-root': {
      // backgroundColor: '#0f4c75',
      // backgroundColor: '#303030',
      backgroundColor: theme.palette.primary.card,
    },
  },
  cardContent: {
    height: '100%',
    color: theme.palette.primary.fontColor1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& p': {
      color: theme.palette.primary.fontColor1,
      fontFamily: 'Open Sans',
    },
    '& div': {
      width: '2.5em',
      height: '70px',
      display: 'flex',
    },
    '& h5': {
      margin: '10px auto',
      fontFamily: 'Montserrat',
    },
  },
}));

const SkillCard = ({ icon, name, content }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <div>{icon}</div>
        <Typography gutterBottom variant="h5" component="h5" align="center">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

SkillCard.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  content: PropTypes.string.isRequired,
};

export default SkillCard;
