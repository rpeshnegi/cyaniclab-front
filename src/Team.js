import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({});

const data = [
  {
    id: 1,
    name: "Jas Khatri",
    jobTitle: "Chief Executive Officer",
    img: "img/team-1.jpg",
  },
  {
    id: 2,
    name: "Rupendra Singh Negi",
    jobTitle: "Chief Technology Officer",
    img: "img/team-2.jpeg",
  },
  {
    id: 3,
    name: "Kishore Khatri",
    jobTitle: "Business Development Specialist",
    img: "img/team-3.jpeg",
  },
  {
    id: 4,
    name: "Harsha Khatri",
    jobTitle: "Account Manager",
    img: "img/team-4.jpeg",
  },
  {
    id: 5,
    name: "Vedant Nandwana",
    jobTitle: "Software Engineer",
    img: "img/team-5.jpg",
  },
  {
    id: 6,
    name: "Ashok Kumawat",
    jobTitle: "Software Engineer",
    img: "img/team-6.jpeg",
  },
  {
    id: 7,
    name: "Sunny Verma",
    jobTitle: "Software Engineer",
    img: "img/team-7.jpeg",
  },
];

export default function Team({ props, dispatch }) {
  const classes = useStyles();
  return (
    <div className="p50">
      <h2 className="heading mb-5 color_man tc wow fadeInUp">
        Meet <span> Our Team</span>
      </h2>

      <div className="flex gap-8 flex-wrap items-center justify-center">
        {data.map(({ name, img, jobTitle, id }) => (
          <TeamCard
            key={name}
            name={name}
            img={img}
            jobTitle={jobTitle}
            itemId={id}
          />
        ))}
      </div>
    </div>
  );
}

function TeamCard({ text, name, jobTitle, img, itemId, onClick }) {
  return (
    <div className="relative mb-4 flex flex-col group overflow-hidden rounded-xl m-1 flex-shrink-0 w-56">
      <div className="flex flex-col z-10 w-full p-4 bg-gradient-to-t from-gray-900 to-black/10 h-64 pointer-events-none">
        <h3 className="text-white text-base mt-auto mb-1">{name}</h3>
        <h4 className="text-sm text-gray-400">{jobTitle}</h4>
      </div>

      <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-black/0 w-full h-1/2 z-0 pointer-events-none" />

      <img
        src={`/${img}`}
        alt={text}
        className="absolute inset-0 min-w-full min-h-full object-fill rounded-lg z-0 pointer-events-none"
      />
    </div>
  );
}
