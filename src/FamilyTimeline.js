// src/components/FamilyTimeline.tsx
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  FaHandHoldingHeart,
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
  FaBaby,
  FaStarOfDavid,
  FaSynagogue,
  FaWalking,
  FaHiking,
  FaUmbrellaBeach,
  FaFire,
  FaBirthdayCake,
  FaTired,
  FaSun,
  FaCanadianMapleLeaf,
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
import Feb_12_2022 from "./images/Feb_19_2022.jpg";
import Feb_26_2022 from "./images/Feb_26_2022.jpg";
import Mar_21_2022 from "./images/Mar_21_2022.jpg";
import May_7_2022 from "./images/May_7_2022.jpg";
import May_8_2022 from "./images/May_8_2022.jpg";
import Jun_17_2022 from "./images/Jun_17_2022.jpg";
import Sep_8_2022 from "./images/Sep_8_2022.jpg";
import Oct_22_2022 from "./images/Oct_22_2022.jpg";
import Dec_2_2022 from "./images/Dec_2_2022.jpg";
import Jan_31_2023 from "./images/Jan_31_2023.jpg";
import Feb_19_2023 from "./images/Feb_19_2023.jpg";
import Jun_30_2023 from "./images/Jun_30_2023.jpg";
import Aug_13_2023 from "./images/Aug_13_2023.jpg";
import Oct_31_2023 from "./images/Oct_31_2023.jpg";
import Jan_25_2024 from "./images/Jan_25_2024.jpg";
import Mar_5_2024 from "./images/Mar_5_2024.jpg";
import May_18_2024 from "./images/May_18_2024.jpg";
import Jun_21_2024 from "./images/Jun_21_2024.jpg";
import Nov_3_2024 from "./images/Nov_3_2024.jpg";
import Jan_6_2025 from "./images/Jan_6_2025.jpg";
import Apr_29_2025 from "./images/Apr_29_2025.jpg";

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
      "First time we dressed up and when out for our 6-month anniversary. We sat on a bench after dinner and I told you that I loved you. You said it back too fast!",
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
  {
    date: "2022-02-19 00:00:00 EST",
    title: "Caleb is born!",
    description:
      "After a very stressful labour, we get to meet our little Babu. I barely sleep the first night in the hospital and we're surprised they just let us take our baby home! I'll never forget the ride home - playing 'Hey Jude' and cherishing our first ride together home as a family.",
    icon: <FaBaby />,
    image: Feb_12_2022,
  },
  {
    date: "2022-02-26 00:00:00 EST",
    title: "The Bris",
    description:
      "Caleb's bris was a little stressful but smooth sailing. Most exciting part was your dad almost falling asleep at the wheel on the way home.",
    icon: <FaStarOfDavid />,
    image: Feb_26_2022,
  },
  {
    date: "2022-03-21 00:00:00 EST",
    title: "He's the Savior!",
    description:
      "We have to buy Caleb back from the Rabbi because he is the savior of humanity. We're pretty sure the Rabbi was looking up the ceremony on Wikipedia when we talked to her about it on the phone. ",
    icon: <FaSynagogue />,
    image: Mar_21_2022,
  },
  {
    date: "2022-05-07 00:00:00 EST",
    title: "Walks Downtown",
    description:
      "One of our first walks downtown with children. The college girls at Bungalow thought Caleb was adorable. I always love thinking about this walk and hope we have so many more.",
    icon: <FaWalking />,
    image: May_7_2022,
  },
  {
    date: "2022-05-08 00:00:00 EST",
    title: "First Mother's Day",
    description:
      "Caleb stays at home so we can go to Idylwyld and have delicious scallops.",
    icon: <FaHeart />,
    image: May_8_2022,
  },
  {
    date: "2022-05-08 00:00:00 EST",
    title: "A dapper little boy",
    description:
      "My cousin's wedding and our first time to show-off little man in a suit. He's a big hit and we get a chance to go to a wedding as a couple.",
    icon: <FaRing />,
    image: Jun_17_2022,
  },
  {
    date: "2022-05-08 00:00:00 EST",
    title: "Family Photos",
    description:
      "Our first family photo session! Could have gone better since Caleb didn't smile until the very end but we still got some great shots of his amazing smile.",
    icon: <FaCamera />,
    image: Sep_8_2022,
  },
  {
    date: "2022-05-08 00:00:00 EST",
    title: "California Hiking",
    description:
      "The first big trip with a child. We barely make our connecting flight in Calgary but it all works out. That hiking bag was a great investment!",
    icon: <FaHiking />,
    image: Oct_22_2022,
  },
  {
    date: "2022-12-02 00:00:00 EST",
    title: "Florida is the best!",
    description:
      "Even though we're living in a construction zone Florida is still pretty fantastic. We decide we're going to retire here and start our own family bootcamp (a la Granny).",
    icon: <FaUmbrellaBeach />,
    image: Dec_2_2022,
  },
  {
    date: "2023-01-31 00:00:00 EST",
    title: "Hot hand",
    description:
      "Our trip to Vale has some ups and downs and cold and HOT moments. Babu seems fine though but he still a little bit nervous around fireplaces.",
    icon: <FaFire />,
    image: Jan_31_2023,
  },
  {
    date: "2023-02-19 00:00:00 EST",
    title: "Caleb's First Birthday!",
    description:
      "Our little big guy turns one. We have our first birthday party and we learn firsthand the stress of children's birthday parties.",
    icon: <FaBirthdayCake />,
    image: Feb_19_2023,
  },
  {
    date: "2023-06-30 00:00:00 EST",
    title: "Welcome Pearl!",
    description:
      "The Little lady finally arrives! She waited just after the cottage weekend but in the middle of the night. Most of the birth is us waiting for your mom to show up at our house.",
    icon: <FaBaby />,
    image: Jun_30_2023,
  },
  {
    date: "2023-08-13 00:00:00 EST",
    title: "Pearl's Baby Naming",
    description:
      "These post-birth celebrations are not relaxing! From picking the right plate to putting together a rain plan, you and Cathy were stressed up until the last minute. Either way, the weather cooperated and we had plenty of food and no one said a single word about the plating.",
    icon: <FaStarOfDavid />,
    image: Aug_13_2023,
  },
  {
    date: "2023-10-31 00:00:00 EST",
    title: "Cali Trip Round 2",
    description:
      "A tough flight followed by multiple nights of Pearl not sleeping. We make the most of it and realize that travelling with kids is not the cakewalk it used to be.",
    icon: <FaTired />,
    image: Oct_31_2023,
  },
  {
    date: "2024-01-25 00:00:00 EST",
    title: "Vale Trip Round 2",
    description:
      "Turns out the key to kids is just have lots of help and older kids taking care of younger kids. Sirina is worth her weight in gold and we actually have a great time skiing. Sara doesn't kill anyone on the slopes too.",
    icon: <FaSkiing />,
    image: Jan_25_2024,
  },
  {
    date: "2024-03-05 00:00:00 EST",
    title: "Hawaiian Honeymoon",
    description:
      "We finally have our honeymoon - 2 & 1/2 years after getting married. No kids, lots of sun but 1 less pair of amazing sunglasses. Although we (I) missed the kids we had an amazing time together. We learned to stop at every fruit stand and the weirder a fruit looked, the better it tasted. Can't wait to take another romantic trip with you again.",
    icon: <FaSun />,
    image: Mar_5_2024,
  },
  {
    date: "2024-05-18 00:00:00 EST",
    title: "Utah Girls Trip",
    description:
      "You take Pearl on a girls trip to Utah with your mom and Sara. She tells me her favorite part is you telling your mother that she cannot have a 1 hour breakfast before a day of hiking.",
    icon: <FaSun />,
    image: May_18_2024,
  },
  {
    date: "2024-06-21 00:00:00 EST",
    title: "Alan's Birthday Bash",
    description:
      "Alan has a big birthday with all the grandkids! When we get home, we decide to add to his count.",
    icon: <FaBirthdayCake />,
    image: Jun_21_2024,
  },
  {
    date: "2024-11-03 00:00:00 EST",
    title: "Pearl & Caleb - BFFs",
    description:
      "Caleb and Pearl are starting to play more and more with each other. Running laps around the house together, holding hands, and Pearl always asks for 'Babu' as soon as she wakes up from her nap.",
    icon: <FaHandHoldingHeart />,
    image: Nov_3_2024,
  },
  {
    date: "2025-01-26 00:00:00 EST",
    title: "Jakey Joins The Party",
    description:
      "In what is considered the fastest labour of all time, little Jakey is born! Little less fanfare from the family but we're just training him for life as a third child. You pick the perfect song for him, Father and Son, I always choke up (just a little!) whenever I hear it.",
    icon: <FaBaby />,
    image: Jan_6_2025,
  },
  {
    date: "2025-01-26 00:00:00 EST",
    title: "Our Ridiculous Loving Family",
    description:
      "Three kids in three years. People think we're crazy for pulling off a stunt like this but we know that the insanity is totally worth it. From Caleb telling us how 'that's so cozy!' to Pearl's screaming 'ME!' at every character in a book to Jakey being our ",
    icon: <FaCanadianMapleLeaf />,
    image: Apr_29_2025,
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
