import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  card: {
    boxShadow: '#0c0c0c 2px 5px 8px 4px',
    width: '100%',
    margin: 'auto',
    height: '100%',
    '&.MuiPaper-root': {
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
      width: '3.5em',
      height: '70px',
      display: 'flex',
    },
    '& h5': {
      margin: '10px auto',
      fontFamily: 'Montserrat',
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
