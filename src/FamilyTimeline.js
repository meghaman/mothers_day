// src/components/FamilyTimeline.tsx
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaChild, FaHeart, FaCamera, FaKiss, FaCoffee } from "react-icons/fa";

import first_date from "./images/Mar_11_2020.jpg";
import geocaching from "./images/May_9_2020.jpg";

const timelineData = [
  {
    date: "2020-03-11",
    title: "First Date",
    description: "First date at Aroma. The infamous chocolate powder incident.",
    icon: <FaCoffee />,
    image: first_date,
  },
  {
    date: "2020-03-28",
    title: "Geocaching Adventure",
    description:
      'Our geocaching third date! You learned the "rules" of geocaching that were totally real and not made up at all. We talked about running and you were not impressed by my 5k time. I was impressed by your 5k time.',
    icon: <FaKiss />,
    image: geocaching,
  },
];

const FamilyTimeline = () => {
  return (
    <VerticalTimeline>
      {timelineData.map((item, idx) => (
        <VerticalTimelineElement
          key={idx}
          date={new Date(item.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
          dateClassName="vertical-timeline-element-date"
          icon={item.icon}
          iconStyle={{ background: "#fca5a5", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">{item.title}</h3>
          <p>{item.description}</p>
          {item.image && (
            <img
              src={item.image}
              alt=""
              style={{
                width: "100%",
                marginTop: "1rem",
                borderRadius: "0.5rem",
              }}
            />
          )}
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default FamilyTimeline;
