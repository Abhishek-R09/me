import React from 'react';
// import { Card, CardContent, Typography } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

// const useStyles = makeStyles((theme) => ({
//   card: {
//     // boxShadow: '#0c0c0c 2px 5px 8px 4px',
//     boxShadow: `${theme.palette.primary.cardShadow} 2px 2px 6px 2px`,
//     width: 'fit-content',
//     margin: 'auto',
//     height: '100%',
//     '&.MuiPaper-root': {
//       // backgroundColor: theme.palette.primary.card,
//       backgroundColor: theme.palette.primary.secondary,
//     },
//   },
//   cardContent: {
//     height: '100%',
//     color: theme.palette.primary.fontColor1,
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     '& p': {
//       color: theme.palette.primary.fontColor1,
//       fontFamily: 'Open Sans',
//       fontSize: '0.9em',
//     },
//     '& div': {
//       width: '2.5em',
//       height: '60px',
//       display: 'flex',
//     },
//     '& h5': {
//       margin: '5px auto',
//       fontFamily: 'Montserrat',
//       fontSize: '1.3em',
//     },
//   },
// }));

type SkillCardProps = {
  icon: JSX.Element;
  name: string;
  content: string;
  color: string;
};

const SkillCard = ({ icon, name, content, color }: SkillCardProps) => {
  return (
    <div>
      <div>
        <div style={{ color }}>{icon}</div>
        <h5>{name}</h5>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default SkillCard;
