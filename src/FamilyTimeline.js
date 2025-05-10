// src/components/FamilyTimeline.tsx
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  FaChild,
  FaHeart,
  FaCamera,
  FaKiss,
  FaCoffee,
  FaTruckMoving,
  FaSkiing,
  FaGift,
  FaHome,
  FaRing,
  FaPlus,
} from "react-icons/fa";

import Mar_11_2020 from "./images/Mar_11_2020.jpg";
import May_9_2020 from "./images/May_9_2020.jpg";
import Jul_1_2020 from "./images/Jul_1_2020.jpg";
import Sep_7_2020 from "./images/Sep_7_2020.jpg";
import Sep_11_2020 from "./images/Sep_11_2020.jpg";
import Oct_9_2020 from "./images/Oct_9_2020.jpg";
import Dec_12_2020 from "./images/Dec_12_2020.jpg";
import Dec_31_2020 from "./images/Dec_31_2020.jpg";
import Jan_10_2021 from "./images/Jan_10_2021.jpg";
import Mar_7_2021 from "./images/Mar_7_2021.jpg";
import Apr_3_2021 from "./images/Apr_3_2021.jpg";
import May_22_2021 from "./images/May_22_2021.jpg";
import Jun_4_2021 from "./images/Jun_4_2021.jpg";
import Aug_12_2021 from "./images/Aug_12_2021.jpg";

const timelineData = [
  {
    date: "2020-03-11 00:00:00 EST",
    title: "First Date",
    description:
      "First date at Aroma and the infamous chocolate powder incident. You were not impressed by my 5k time but little did you know that I would be faster than you in a few months.",
    icon: <FaCoffee />,
    image: Mar_11_2020,
  },
  {
    date: "2020-03-28 00:00:00 EST",
    title: "Geocaching Adventure",
    description:
      'Our geocaching third date! You were early, I was ridiculously early. I taught you the "rules" of geocaching that were totally real and not made up at all. ',
    icon: <FaKiss />,
    image: May_9_2020,
  },
  {
    date: "2020-07-01 00:00:00 EST",
    title: "Trip to Tobermory",
    description:
      "Scuba diving, white fish, and Canada's best butter tarts! Our driving Spotify playlist is still there and I always smile when I see it.",
    icon: <FaCamera />,
    image: Jul_1_2020,
  },
  {
    date: "2020-09-07 00:00:00 EST",
    title: "Camping with Danny and Olga",
    description:
      "Canoeing in Algonquin. My steering needed work but we got there didn't we? The paddle to the water-taxi was harrowing although you and Danny seemed less concerned about it that me.",
    icon: <FaCamera />,
    image: Sep_7_2020,
  },
  {
    date: "2020-09-11 00:00:00 EST",
    title: "First 'I Love You'",
    description:
      "First time we dressed up any when out for our 6-month anniversary. We sat on a bench after dinner and I told you that I loved you. You said it back too fast!",
    icon: <FaHeart />,
    image: Sep_11_2020,
  },
  {
    date: "2020-10-09 00:00:00 EST",
    title: "Trip to the farm with Mom",
    description:
      "'See that tree Jenny? I'll buy it for you if you give me 4 grandkids.'",
    icon: <FaCamera />,
    image: Oct_9_2020,
  },
  {
    date: "2020-12-12 00:00:00 EST",
    title: "Move-In Day",
    description:
      "I finally give up my bachelor pad for you. You lose your weekend cottage but now you have someone to hang up pictures for you.",
    icon: <FaTruckMoving />,
    image: Dec_12_2020,
  },
  {
    date: "2020-12-31 00:00:00 EST",
    title: "First Ever Beef Wellington",
    description:
      "Our first New Year's Eve together! We made Beef Wellington and started way too late. It became our signature dish and when we made it for Granny she said it was the best she'd ever had.",
    icon: <FaTruckMoving />,
    image: Dec_31_2020,
  },
  {
    date: "2021-01-10 00:00:00 EST",
    title: "Skiing at Mount Tremblant",
    description:
      "Had to show you how good I was at skiing because of what I said on first Hinge message to you. Also, the I experienced the madness of the tent sale.",
    icon: <FaSkiing />,
    image: Jan_10_2021,
  },
  {
    date: "2021-03-07 00:00:00 EST",
    title: "Mystery Birthday Gift",
    description:
      "We never found out who sent this to me. Probably a mistress I've long forgotten about.",
    icon: <FaGift />,
    image: Mar_7_2021,
  },
  {
    date: "2021-04-03 00:00:00 EST",
    title: "Bought our first house",
    description:
      "After months of back-and-forth trips to London, we finally bought our first house! People think we're crazy getting a house with 4 bedrooms and no kids. We set our roots down in London only for everyone to leave us.",
    icon: <FaHome />,
    image: Apr_3_2021,
  },
  {
    date: "2021-04-03 00:00:00 EST",
    title: "We're Engaged!",
    description:
      "After weeks of secretly creating the website, planning the proposal I proposed! You knew it was coming when I brought your hiking boots to the farm without asking you. I'll be more sneaky the next time I propose.",
    icon: <FaRing />,
    image: May_22_2021,
  },
  {
    date: "2021-07-04 00:00:00 EST",
    title: "Accident On Purpose",
    description:
      "The morning when parents meet for the first time we find out that we've got a little Babu on the way. I only believed you after we got a real pregnancy test!",
    icon: <FaPlus />,
    image: Jun_4_2021,
  },
  {
    date: "2021-08-12 00:00:00 EST",
    title: "Our Special Day",
    description:
      "A beautiful day. We've known each other for less than 18 months but we knew in our hearts we were right for each other.",
    icon: <FaRing />,
    image: Aug_12_2021,
  },
];

const FamilyTimeline = () => {
  return (
    <VerticalTimeline>
      {timelineData.map((item, idx) => (
        <VerticalTimelineElement
          key={idx}
          date={new Date(item.date).toDateString("en-US", {
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
