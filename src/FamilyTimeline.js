// src/components/FamilyTimeline.tsx
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaChild, FaHeart, FaCamera } from "react-icons/fa";

const timelineData = [
  {
    date: "2018-06-22",
    title: "Wedding Day",
    description: 'The day we said "I do".',
    icon: <FaHeart />,
    image: "/images/wedding.jpg",
  },
  {
    date: "2020-03-10",
    title: "First Baby Born",
    description: "Our family grew by one ❤️",
    icon: <FaChild />,
    image: "/images/baby.jpg",
  },
  {
    date: "2023-08-15",
    title: "First Family Vacation",
    description: "Beach days, laughter, and ice cream.",
    icon: <FaCamera />,
    image: "/images/vacation.jpg",
  },
];

const FamilyTimeline = () => {
  return (
    <VerticalTimeline>
      {timelineData.map((item, idx) => (
        <VerticalTimelineElement
          key={idx}
          date={item.date}
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
