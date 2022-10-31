import React from 'react';
// import {
//   TimelineItem,
//   TimelineSeparator,
//   TimelineConnector,
//   TimelineContent,
//   TimelineOppositeContent,
//   TimelineDot,
// } from '@material-ui/lab';
// import { Paper, Typography } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import useLoaded from '../../../hooks/use-loaded';

// const useStyles = makeStyles((theme) => ({
//   timelineRoot: {
//     height: '150px',
//   },
//   oppositeColor: {
//     color: theme.palette.primary.fontColor1,
//     fontFamily: 'Open Sans',
//   },
//   oppositeContent: {
//     flex: '0',
//     padding: '0',
//     '@media (max-width: 900px)': {
//       // flex: '0.2',
//     },
//   },
//   timelineContent: {
//     padding: '0 16px',
//     margin: '10px',
//   },
//   paperStyle: {
//     padding: '15px',
//     color: theme.palette.primary.fontColor1,
//     // width: '100%',
//     // boxShadow: '#0c0c0c 2px 5px 8px 4px',
//     boxShadow: `${theme.palette.primary.cardShadow} 2px 2px 6px 2px`,
//     '&.MuiPaper-root': {
//       // backgroundColor: theme.palette.primary.card,
//       backgroundColor: theme.palette.primary.primary,
//       height: '90%',
//       display: 'flex',
//       flexDirection: 'column',
//       justifyContent: 'center',
//     },
//     // width: '400px',
//     width: 'auto',
//     '@media (max-width: 768px)': {
//       width: '100%',
//     },
//     // '@media (max-width: 600px)': {
//     //   width: '100%',
//     // },
//   },
//   timeLineType: {
//     fontSize: '1rem',
//     '@media (min-width: 600px)': {
//       fontSize: '1.2rem',
//     },
//   },
//   instituteNameStyle: {
//     color: theme.palette.primary.fontColor2,
//     fontSize: '0.7rem',
//     fontFamily: 'Open Sans',
//     '@media (min-width: 600px)': {
//       fontSize: '0.8rem',
//     },
//   },
//   yearStyle: {
//     fontSize: '0.7rem',
//     fontFamily: 'Open Sans',
//     '@media (min-width: 600px)': {
//       fontSize: '0.8rem',
//     },
//   },
// }));

const TimeLineItem = ({
  type,
  dotColor,
  connector,
  last,
  paperSide,
  institute,
  years,
}) => {
  const classes = useStyles();
  const loaded = useLoaded();
  return (
    <TimelineItem
      className={classes.timelineRoot}
      style={{ height: last ? '10px' : '' }}
    >
      <TimelineOppositeContent className={classes.oppositeContent} />
      <TimelineSeparator>
        <TimelineDot
          style={{
            color: loaded && dotColor,
            backgroundColor: loaded && dotColor,
          }}
        />
        {connector && <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent className={classes.timelineContent}>
        {last && (
          <Typography variant="body2" className={classes.oppositeColor}>
            2001
          </Typography>
        )}
        {paperSide && (
          <Paper className={`${paperSide} ${classes.paperStyle}`}>
            <Typography variant="h6" className={classes.timeLineType}>
              {type}
            </Typography>
            <Typography
              variant="caption"
              className={classes.instituteNameStyle}
            >
              {institute}
            </Typography>
            <Typography variant="caption" className={classes.yearStyle}>
              {/* `\u00B7` */} {years}
            </Typography>
          </Paper>
        )}
      </TimelineContent>
    </TimelineItem>
  );
};

TimeLineItem.defaultProps = {
  type: '',
  connector: false,
  last: false,
  paperSide: null,
  institute: null,
  years: null,
};

TimeLineItem.propTypes = {
  type: PropTypes.string,
  connector: PropTypes.bool,
  dotColor: PropTypes.string.isRequired,
  last: PropTypes.bool,
  paperSide: PropTypes.string,
  institute: PropTypes.string,
  years: PropTypes.string,
};

export default TimeLineItem;
