import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoMdSchool } from "react-icons/io";
import { MdWork } from "react-icons/md";
import "../styles/Experience.css";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor=" #414e8b ">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="1996 - 1999"
          iconStyle={{ background: " #414e8b ", color: "#ffffff" }}
          icon={<IoMdSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            High School, Debrezeit High School, Debrezeit Ethiopia
          </h3>
          <p> High School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2000 - 2002"
          iconStyle={{ background: " #414e8b ", color: "#ffffff" }}
          icon={<IoMdSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            ROYAL COLLAGE, Addid Ababa Ethiopia
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Diploma</h4>

          <p> Accounting</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2000 - 2002"
          iconStyle={{ background: " #414e8b ", color: "#ffffff" }}
          icon={<IoMdSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            ADAMA SCIENCE AND TECHNOLOGY UNIVERSITY, Adama Ethiopia
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>
          <p> Accounting</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2002 - Present"
          iconStyle={{ background: " #414e8b ", color: "#ffffff" }}
          icon={<IoMdSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            UNIVERSITY OF MINNESOTA, Minneapolis, MN
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Certificate</h4>
          <p> Full Stack Web Development</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2002 - 2018"
          iconStyle={{ background: "#e9d35b", color: "#ffffff" }}
          icon={<MdWork />}
        >
          <h3 className="vertical-timeline-element-title">
            Admin and Finance Head - Addis Ababa University
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Debrezeit, Ethiopua
          </h4>
          <p>
            Lead and manage the project staff, including objective setting,
            performance management, coaching/development and training in the
            finance and IT area.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018-2019"
          iconStyle={{ background: "#e9d35b", color: "#ffffff" }}
          icon={<MdWork />}
        >
          <h3 className="vertical-timeline-element-title">
            MAIL HANDLER, USPS
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Mineapolis, MN</h4>
          <p>
            Sorting and canceling mail using relevant machinery. Preparing large
            batches of mail for distribution. Distributing mail to various
            carriers. Keeping work areas clean and neat.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
