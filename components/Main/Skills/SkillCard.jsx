import React from 'react';
import { makeStyles, Card, CardContent, Typography } from '@material-ui/core';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  card: {
    // boxShadow: '#0c0c0c 2px 5px 8px 4px',
    boxShadow: `${theme.palette.primary.cardShadow} 2px 2px 6px 2px`,
    width: 'fit-content',
    margin: 'auto',
    height: '100%',
    '&.MuiPaper-root': {
      // backgroundColor: theme.palette.primary.card,
      backgroundColor: theme.palette.primary.secondary,
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
      fontSize: '0.9em',
    },
    '& div': {
      width: '2.5em',
      height: '60px',
      display: 'flex',
    },
    '& h5': {
      margin: '5px auto',
      fontFamily: 'Montserrat',
      fontSize: '1.3em',
    },
  },
}));

const SkillCard = ({ icon, name, content, color }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <div style={{ color }}>{icon}</div>
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
  color: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default SkillCard;
