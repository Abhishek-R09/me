import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { CardActions, CardHeader } from '@material-ui/core';
import classes from './projectCard.module.css';

const useStyles = makeStyles((theme) => ({
  card: {
    // boxShadow: '#0c0c0c 2px 2px 6px 2px',
    boxShadow: `${theme.palette.primary.cardShadow} 2px 2px 6px 2px`,
    width: '100%',
    height: '100%',
    margin: '20px 0',
    borderRadius: '10px',
    color: theme.palette.primary.fontColor1,
    '&.MuiPaper-root': {
      // backgroundColor: theme.palette.primary.card,
      backgroundColor: theme.palette.primary.secondary,
    },
  },
  header: {
    padding: '16px',
    '& .MuiCardHeader-title': {
      fontSize: '1.3em',
      margin: '5px',
      fontFamily: 'Montserrat',
    },
    '& .MuiCardHeader-subheader': {
      fontSize: '0.8em',
      margin: '5px',
      color: theme.palette.primary.fontColor1,
    },
  },
  cardActions: {
    padding: '0 16px 16px',
    flexFlow: 'row',
    justifyContent: 'space-between',
  },
  srcCodeBtn: {
    color: theme.palette.primary.fontColor1,
    borderColor: theme.palette.primary.fontColor1,
    '&:hover': {
      color: theme.palette.primary.fontColor2,
      borderColor: theme.palette.primary.fontColor2,
    },
    '&:focus': {
      color: theme.palette.primary.fontColor2,
      borderColor: theme.palette.primary.fontColor2,
    },
  },
  cardContent: {
    color: theme.palette.primary.fontColor1,
    padding: '0 20px 20px',
    '& p': {
      color: theme.palette.primary.fontColor1,
      fontFamily: 'Open Sans',
    },
  },
  expand: {
    transform: 'rotate(0deg)',
    padding: 0,
    marginLeft: 'auto',
    color: theme.palette.primary.fontColor1,
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    '&:hover': {
      color: theme.palette.primary.fontColor2,
    },
    '&:focus': {
      color: theme.palette.primary.fontColor1,
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
          title={imgTitle}
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
          <button
            type="button"
            className={`${classes.srcCodeBtn} ${localClasses.srcCodeBtn}`}
          >
            Source Code
          </button>
        </a>
        <Tooltip
          TransitionComponent={Zoom}
          title={`${expanded ? 'Collapse' : 'Expand'} to ${
            expanded ? 'hide' : 'see'
          } description
          `}
          arrow
        >
          <IconButton
            className={`${localClasses.expand} ${
              expanded ? localClasses.expandOpen : null
            }`}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label={`${expanded ? 'show description' : 'hide description'}`}
          >
            <ExpandMoreIcon />
          </IconButton>
        </Tooltip>
      </CardActions>
      <Collapse
        aria-expanded={expanded}
        in={expanded}
        timeout="auto"
        mountOnEnter
        unmountOnExit
      >
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
