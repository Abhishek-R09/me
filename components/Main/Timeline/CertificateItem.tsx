/* eslint-disable react/prop-types */
import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import {
//   Card,
//   CardMedia,
//   CardActionArea,
//   CardActions,
//   CardContent,
//   Button,
//   Typography,
// } from '@material-ui/core';
// import { CardMedia } from '@material-ui/core';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth: 345,
//     margin: '15px auto',
//     backgroundColor: theme.palette.primary.primary,
//     padding: '10px 5px',
//     boxShadow: `${theme.palette.primary.cardShadow} 2px 2px 6px 2px`,
//   },
//   media: {
//     height: 150,
//     width: 150,
//     margin: 'auto',
//   },
//   title: {
//     color: theme.palette.primary.fontColor1,
//   },
//   details: {
//     color: theme.palette.primary.fontColor2,
//   },
//   certificateBtn: {
//     color: theme.palette.primary.fontColor1,
//     borderColor: theme.palette.primary.fontColor1,
//     '&:hover': {
//       color: theme.palette.primary.fontColor2,
//       borderColor: theme.palette.primary.fontColor2,
//     },
//   },
//   AWS: {
//     // width: '60%',
//     // maxWidth: 'none',
//     // '@media (max-width: 1280px)': {
//     //   maxWidth: '345px',
//     //   width: 'fit-content',
//     // },
//     gridColumn: '1 / span 3',
//   },
//   design: {
//     gridColumn: '1 / span 1',
//     '@media (max-width: 1280px)': {
//       gridColumn: '1 / span 3',
//     },
//   },
//   web: {
//     gridColumn: '3 / span 1',
//     '@media (max-width: 1280px)': {
//       gridColumn: '1 / span 3',
//     },
//   },
// }));

function CertificateItem({
  title,
  platform,
  completed,
  link,
  imageURL,
  imageTitle,
  className,
  style,
}) {
  const classes = useStyles();
  return (
    <Card
      className={`${classes.root} ${className ? classes[className] : ''}`}
      raised
      style={style && { ...style }}
    >
      <CardActionArea>
        {imageURL && (
          <CardMedia
            image={imageURL}
            title={imageTitle}
            className={classes.media}
          />
        )}
        <CardContent>
          <Typography
            gutterBottom
            variant="body1"
            component="h2"
            className={classes.title}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.details}
          >
            Issued By: {platform}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.details}
          >
            Completed: {completed}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
        <Button
          href={link}
          size="small"
          // color="primary"
          className={classes.certificateBtn}
          target="_blank"
          variant="outlined"
          rel="noopener noreferrer"
        >
          {className === 'AWS' ? 'Badge' : 'Certificate'}
        </Button>
      </CardActions>
    </Card>
  );
}

export default CertificateItem;
