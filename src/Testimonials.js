import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({});

const data = [
  {
    id: 0,
    text: "Cyanic Lab is not just the service delivery company. They actively participated in the brainstorming, and produced very creative and great solutions. They acted as they are part of the company and cared that we do things properly and in the most optimized way.",
    name: "Mladen Sudar",
    jobTitle: "CVO, Helioz Technologies",
    img: "img/mladen.jfif",
  },
  {
    id: 1,
    text: "Review: They demonstrate excellent communication and programming skills.",
    name: "Ville Rontt",
    jobTitle: "Chief, CEO",
    img: "img/ville.jfif",
  },
  {
    id: 2,
    text: "They were very professional, willing to listen, good command of English, and committed to completing the job.",
    name: "Martin Peet",
    jobTitle: "Owner Business Fundamentals",
    img: "img/mpeet.jfif",
  },
  {
    id: 3,
    text: "Review: Cyanic Lab is a very reliable partner — they've proven capable of providing the right solutions to problems in a timely manner. What's more, they've been proactive in coming up with their own ideas and asking for feedback. The team is also flexible, optimistic, and organized.",
    name: "Robin Henriksson",
    jobTitle: "Founder, Website",
    img: "img/robin.jfif",
  },
  {
    id: 4,
    text: "After our first week, it's been easy to find trust in this company.",
    name: "Benjamin Sernji",
    jobTitle: "CEO & CTO, Digital Generalist OÜ",
    img: "img/ben.jpeg",
  },
  // ashok add
  {
    id: 5,
    text: `I highly recommend Cyanic Lab and their team, led by Jas Khatri to anyone in need of top-quality development services. 
They are a group of dedicated developers who truly understand the needs of their clients and the industry. They are fast, reliable, and have excellent communication skills. The working atmosphere is great, and they consistently deliver fresh ideas and innovative solutions to problems. It has been an absolute pleasure to work with them. 
Maybe one of the best collaborations in my career. ❤️😊
`,
    name: "Renato Nenadić",
    img: "img/renato.jfif",
    jobTitle: "Product Owner, Helioz Technologies",
  },
  {
    id: 6,
    text: "Cyanic Lab handled to deliver the platform despite the nature of prototyping. The team communicated well and was flexible meetings. They were collaborative, and their decent code quality was impressive in the workflow.",
    name: "Eric Heung",
    jobTitle: "CTO, Chartipedia",
    img: "img/user-placeholder.png",
  },
  {
    id: 7,
    text: "They are professional, good listeners, and offer good comments about requests, and committed to finishing the project.",
    name: "Robinson Nunez",
    jobTitle: "VP of Product Development, Bostel Communication",
    img: "img/rnunz.jfif",
  },
  {
    id: 8,
    text: "Jas, Thank you for your work, you are very helpful and it was a pleasure to cooperate! I hope that we can collaborate again soon on something else :)",
    name: "Sofia Rrighetti",
    jobTitle: "Company Owner",
    img: "img/Risorsa-27.webp",
  },
];

export default function Testimonial({ props, dispatch }) {
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

  console.log({
    isFirstItemVisible,
    isLastItemVisible,
  });

  return (
    <div className="p50">
      <h2 className="heading mb-5 color_man tc wow fadeInUp">
        What <span> Our Clients Say</span>
      </h2>

      <div>
        <ScrollMenu
          wrapperClassName="h-72 py-2.5 relative"
          scrollContainerClassName="fadeInUp animated wow gap-4 m-auto max-w-fit"
          itemClassName="h-full w-56 h-96 rounded-xl transform hover:-rotate-3 transition duration-300 overflow-hidden fadeInUp filter saturate-0 min-w-56 flex-shrink-0 max-h-min"
          arrowClassName="bg-red-500"
          LeftArrow={<LeftArrow />}
          RightArrow={<RightArrow />}
        >
          {data
            .filter((review) => !review.img.includes("placeholder"))
            .map(({ name, img, jobTitle, id, text }) => (
              <TestimonialCard
                key={name}
                text={text}
                name={name}
                img={img}
                jobTitle={jobTitle}
                itemId={id}
                onClick={handleClick(id)}
              />
            ))}
        </ScrollMenu>
      </div>
    </div>
  );
}

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);

  return (
    <span className="my-auto mx-4">
      <FontAwesomeIcon
        onClick={() => scrollPrev()}
        icon={["fas", "arrow-left"]}
        className={`text-sm text-gray-100 w-6 h-6 ${
          isFirstItemVisible ? "opacity-50" : "opacity-100"
        }`}
      />
    </span>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <span className="my-auto mx-4">
      <FontAwesomeIcon
        onClick={() => scrollNext()}
        icon={["fas", "arrow-right"]}
        className={`text-sm text-gray-100 w-6 h-6 ${
          isLastItemVisible ? "opacity-50" : "opacity-100"
        }`}
      />
    </span>
  );
}

function TestimonialCard({ text, name, jobTitle, img, itemId, onClick }) {
  const [hover, setHover] = React.useState(false);
  const visibility = React.useContext(VisibilityContext);
  const ref = React.useRef(null);

  React.useEffect(() => {
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
      onClick={() => onClick(visibility)}
      ref={ref}
      className="relative mb-4 flex flex-col group overflow-hidden rounded-xl m-1"
      tabIndex={0}
    >
      {hover ? (
        <div className="absolute inset-0 z-20 w-full p-4 bg-white h-64 flex flex-col text-gray-900 overflow-y-scroll testimonial-card-inner">
          <h3 className="text-gray-900 text-base mb-1">{name}</h3>
          <h4 className="text-sm font-normal text-gray-800">{jobTitle}</h4>
          <p className="text-gray-700">{text}</p>
        </div>
      ) : null}

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
