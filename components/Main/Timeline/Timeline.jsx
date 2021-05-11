import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimeLineItem from "./TimeLineItem";
import Certificate from "./Certificate";

const Education = (props) => {
  return (
    <div id="timeline">
      <h2>Timeline</h2>
      <div>
        <Timeline align="alternate" style={{ padding: 0 }}>
          <TimeLineItem
            dotColor="secondary"
            connector={true}
            opposite={true}
            paperSide="paperRight"
            institute="D.A.V Public School, Thane West"
            years="2004-2017"
          />
          <TimeLineItem
            dotColor="primary"
            connector={true}
            paperSide="paperLeft"
            institute="PACE Jr. Science College, Thane West"
            years="2017-2019"
          />
          <TimeLineItem
            dotColor="secondary"
            connector={true}
            paperSide="paperRight"
            institute="Vellore Institute of Technology, Vellore"
            years="2019-2023"
          />
          <TimeLineItem
            dotColor="primary"
            connector={true}
            paperSide="paperLeft"
            institute="React Intern @ FindMind Analytics"
            years="Jan 2021-Present"
          />
          <TimeLineItem last={true} dotColor="secondary" />
        </Timeline>
      </div>
    </div>
  );
};

export default Education;
