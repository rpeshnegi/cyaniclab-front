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
  }
];

export default function Team({ props, dispatch }) {
  const classes = useStyles();

  const [selected, setSelected] = React.useState([]);
  const [position, setPosition] = React.useState(0);

  const isItemSelected = (id) => !!selected.find((el) => el === id);
  const handleClick =
    (id) =>
    ({ getItemById, scrollToItem }) => {
      const itemSelected = isItemSelected(id);

      setSelected((currentSelected) =>
        itemSelected
          ? currentSelected.filter((el) => el !== id)
          : currentSelected.concat(id)
      );
    };
  const { isFirstItemVisible, scrollPrev, isLastItemVisible, scrollNext } =
    React.useContext(VisibilityContext);

  return (
    <div className="p50">
      <h2 className="heading mb-5 color_man tc wow fadeInUp">
        Meet <span> Our Team</span>
      </h2>

        <ScrollMenu
          wrapperClassName="h-96 relative"
          scrollContainerClassName="fadeInUp animated wow gap-4 m-auto max-w-fit"
          itemClassName="h-full w-56 h-96 rounded-xl transform hover:-rotate-3 transition duration-300 overflow-hidden fadeInUp filter saturate-0 min-w-56 flex-shrink-0 max-h-min"
          LeftArrow={
            <FontAwesomeIcon
              icon={["fas", "arrow-left"]}
              className={`text-sm text-gray-100 ${
                isFirstItemVisible ? "opacity-50" : "opacity-100"
              }`}
              onClick={scrollPrev}
            />
          }
          RightArrow={
            <FontAwesomeIcon
              icon={["fas", "arrow-left"]}
              className={`text-sm text-gray-100 ${
                isLastItemVisible ? "opacity-50" : "opacity-100"
              }`}
              onClick={scrollNext}
            />
          }
        >
          {data.map(({ name, img, jobTitle, id }) => (
            <TeamCard
              key={name}
              name={name}
              img={img}
              jobTitle={jobTitle}
              itemId={id}
              onClick={handleClick(id)}
            />
          ))}
        </ScrollMenu>
    </div>
  );
}

function TeamCard({ text, name, jobTitle, img, itemId, onClick }) {
  const visibility = React.useContext(VisibilityContext);

  return (
    <div onClick={() => onClick(visibility)} className="relative mb-4 flex flex-col group overflow-hidden rounded-xl m-1">
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
