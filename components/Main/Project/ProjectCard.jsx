import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { CardActions, CardHeader } from '@material-ui/core';
import classes from './projectCard.module.css';

const useStyles = makeStyles((theme) => ({
  card: {
    // boxShadow: '#0c0c0c 4px 4px 2px 0px',
    boxShadow: '#0c0c0c 2px 5px 8px 4px',
    width: '100%',
    // margin: 'auto',
    height: '100%',
    margin: '20px 0',
    borderRadius: '10px',
    color: '#bbe1fa',
    '&.MuiPaper-root': {
      // backgroundColor: '#0f4c75',
      backgroundColor: '#303030',
    },
  },
  header: {
    // textAlign: 'center',
    padding: '16px',
    '& .MuiCardHeader-title': {
      fontSize: '1.3em',
      margin: '5px',
      fontFamily: 'Montserrat',
    },
    '& .MuiCardHeader-subheader': {
      fontSize: '0.8em',
      margin: '5px',
      color: '#bbe1fa',
    },
  },
  cardActions: {
    padding: '0 16px 16px',
    // display: flex;
    flexFlow: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
  },
  cardContent: {
    color: '#bbe1fa',
    padding: '0 20px 20px',
    '& p': {
      color: '#bbe1fa',
      fontFamily: 'Open Sans',
    },
  },
  expand: {
    transform: 'rotate(0deg)',
    padding: 0,
    marginLeft: 'auto',
    color: '#bbe1fa',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    '&:hover': {
      color: '#1b262c',
    },
    '&:focus': {
      color: '#bbe1fa',
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

function ProjectCard({ imgUrl, imgTitle, projName, type, projLink, projDesc }) {
  const localClasses = useStyles();

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <Card className={localClasses.card}>
      <CardMedia className={classes.projectImage}>
        <Image
          src={`${imgUrl}`}
          alt={imgTitle}
          layout="fill"
          objectFit="cover"
          objectPosition="0 0"
        />
      </CardMedia>
      <CardHeader
        className={localClasses.header}
        title={projName}
        subheader={type}
      />
      <CardActions className={localClasses.cardActions}>
        <a
          href={projLink && projLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button type="button" className={classes.srcCodeBtn}>
            Source Code
          </button>
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
      </CardActions>
      <Collapse in={expanded} timeout="auto" mountOnEnter unmountOnExit>
        <CardContent className={localClasses.cardContent}>
          <Typography variant="body2" color="textSecondary" component="p">
            {projDesc}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

ProjectCard.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  imgTitle: PropTypes.string.isRequired,
  projName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  projLink: PropTypes.string.isRequired,
  projDesc: PropTypes.string.isRequired,
};

export default ProjectCard;
