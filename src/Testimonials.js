import { useRef, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { MotionSlider } from "./components/MotionSlider";

const useStyles = makeStyles({});

const reviews = [
  {
    id: 0,
    text: "Cyanic Lab handled to deliver the platform despite the nature of prototyping. The team communicated well and was flexible meetings. They were collaborative, and their decent code quality was impressive in the workflow.",
    name: "Eric Heung",
    jobTitle: "CTO, Chartipedia",
    img: "img/user-placeholder.png",
  },
  {
    id: 1,
    text: "Jas, Thank you for your work, you are very helpful and it was a pleasure to cooperate! I hope that we can collaborate again soon on something else :)",
    name: "Sofia Rrighetti",
    jobTitle: "Company Owner",
    img: "img/Risorsa-27.webp",
  },
  {
    id: 2,
    text: "After our first week, it's been easy to find trust in this company.",
    name: "Benjamin Sernji",
    jobTitle: "CEO & CTO, Digital Generalist OÜ",
    img: "img/ben.jpeg",
  },
  {
    id: 3,
    text: "They were very professional, willing to listen, good command of English, and committed to completing the job.",
    name: "Martin Peet",
    jobTitle: "Owner Business Fundamentals",
    img: "img/mpeet.jfif",
  },
  {
    id: 4,
    text: "They are professional, good listeners, and offer good comments about requests, and committed to finishing the project.",
    name: "Robinson Nunez",
    jobTitle: "VP of Product Development, Bostel Communication",
    img: "img/rnunz.jfif",
  },
  // ashok add
  {
    id: 5,
    text: "Review: Cyanic Lab is a very reliable partner — they've proven capable of providing the right solutions to problems in a timely manner. What's more, they've been proactive in coming up with their own ideas and asking for feedback. The team is also flexible, optimistic, and organized.",
    name: "Robin Henriksson",
    jobTitle: "Founder, Website",
    img: "img/user-placeholder.png",
  },
  {
    id: 6,
    text: "Review: They demonstrate excellent communication and programming skills.",
    name: "Ville Rontt",
    jobTitle: "Chief, CEO",
    img: "img/user-placeholder.png",
  },
];

export default function Testimonials({ props, dispatch }) {
  const classes = useStyles();

  return (
    <div className="p50 overflow-x-scroll">
      <h2 className="heading mb-5 color_man tc wow fadeInUp">What Our <span> {" "}Clients Say</span></h2>

      <div className="inline-flex min-w-full gap-8 mx-16 sm:mx-8 overflow-y-visible flex-row flex-nowrap justify-center row wow fadeInUp animated" data-wow-duration="2s" data-wow-delay="0.6s">
        {reviews
          .filter((review) => !review.img.includes("placeholder"))
          .map(({ text, name, img, id, jobTitle }) => (
            <TestimonialCard
              key={id}
              text={text}
              name={name}
              img={img}
              jobTitle={jobTitle}
            />
          ))}
      </div>
    </div>
  );
}

function TestimonialCard({ text, name, jobTitle, img }) {
  const [hover, setHover] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (ref === null) {
      return;
    }

    ref.current.addEventListener("mouseenter", () => setHover(true));
    ref.current.addEventListener("mouseleave", () => setHover(false));

    return () => {
      ref.current.removeEventListener("mouseenter", () => setHover(false));
      ref.current.removeEventListener("mouseleave", () => setHover(true));
    };
  }, [ref]);

  return (
    <div
      className="h-full w-56 h-96 rounded-xl relative mb-56 flex flex-col group transform hover:-rotate-6 transition duration-300 overflow-hidden testimonial fadeInUp"
      ref={ref}
    >
      {hover ? (
        <div className="absolute inset-0 z-20 w-full p-4 bg-white h-64 flex flex-col text-gray-900 overflow-y-scroll testimonial-card-inner">
          <h3 className="text-gray-900 text-base mb-1">{name}</h3>
          <h4 className="text-sm font-normal text-gray-500">{jobTitle}</h4>
          <p className="text-gray-700">{text}</p>
        </div>
      ) : null}

      <div className="flex flex-col z-10 w-full p-4 bg-gradient-to-t from-gray-900 to-black/10 h-64">
        <h3 className="text-white text-base mt-auto mb-1">{name}</h3>
        <h4 className="text-sm text-gray-400">{jobTitle}</h4>
      </div>

      <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-black/0 w-full h-1/2 z-0" />

      <img
        src={`/${img}`}
        alt={text}
        className="absolute inset-0 min-w-full min-h-full object-fill rounded-lg z-0"
      />
    </div>
  );
}
