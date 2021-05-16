import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimeLineItem from './TimeLineItem';

const useStyles = makeStyles((theme) => ({
  timeline: {
    '& h2': {
      color: theme.palette.primary.fontColor2,
    },
  },
}));

const Education = () => {
  const localClasses = useStyles();
  const theme = useTheme();
  return (
    <section id="timeline" className={localClasses.timeline}>
      <h2>Timeline</h2>

      <Timeline style={{ padding: 0 }}>
        <TimeLineItem
          dotColor={theme.palette.primary.fontColor1}
          connector
          paperSide="paperRight"
          type="React Intern"
          institute="FindMind Analytics"
          years="Jan 2021-Feb 2021"
        />
        <TimeLineItem
          dotColor={theme.palette.primary.fontColor2}
          connector
          paperSide="paperRight"
          type="B.Tech Computer Science & Engineering"
          institute="Vellore Institute of Technology, Vellore"
          years="2019-2023"
        />
        <TimeLineItem
          dotColor={theme.palette.primary.fontColor1}
          connector
          paperSide="paperRight"
          type="Senior Secondary School"
          institute="PACE Jr. Science College, Thane West"
          years="2017-2019"
        />
        <TimeLineItem
          dotColor={theme.palette.primary.fontColor2}
          connector
          opposite
          paperSide="paperRight"
          type="Primary & Secondary School"
          institute="D.A.V Public School, Thane West"
          years="2004-2017"
        />
        <TimeLineItem last dotColor={theme.palette.primary.fontColor1} />
      </Timeline>
    </section>
  );
};

export default Education;
