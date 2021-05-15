import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimeLineItem from './TimeLineItem';

const Education = () => (
  <section id="timeline">
    <h2>Timeline</h2>
    <div>
      <Timeline align="alternate" style={{ padding: 0 }}>
        <TimeLineItem
          dotColor="secondary"
          connector
          opposite
          paperSide="paperRight"
          institute="D.A.V Public School, Thane West"
          years="2004-2017"
        />
        <TimeLineItem
          dotColor="primary"
          connector
          paperSide="paperLeft"
          institute="PACE Jr. Science College, Thane West"
          years="2017-2019"
        />
        <TimeLineItem
          dotColor="secondary"
          connector
          paperSide="paperRight"
          institute="Vellore Institute of Technology, Vellore"
          years="2019-2023"
        />
        <TimeLineItem
          dotColor="primary"
          connector
          paperSide="paperLeft"
          institute="React Intern @ FindMind Analytics"
          years="Jan 2021-Feb 2021"
        />
        <TimeLineItem last dotColor="secondary" />
      </Timeline>
    </div>
  </section>
);

export default Education;
