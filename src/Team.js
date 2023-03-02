import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({});

const team = [
  {
    name: "Jas Khatri",
    jobTitle: "Chief Executive Officer",
    img: "img/team-1.jpg",
  },
];

export default function Team({ props, dispatch }) {
  const classes = useStyles();

  return (
    <div className="p50 overflow-x-scroll">
      <h2 className="heading mb-5 color_man tc wow fadeInUp">
        Meet <span> Our Team</span>
      </h2>

      <div
        className="inline-flex min-w-full gap-8 mx-16 sm:mx-8 overflow-y-visible flex-row flex-nowrap justify-center row wow fadeInUp animated"
        data-wow-duration="2s"
        data-wow-delay="0.6s"
      >
        {team
          .filter((review) => !review.img.includes("placeholder"))
          .map(({ name, img, jobTitle }) => (
            <TeamCard key={name} name={name} img={img} jobTitle={jobTitle} />
          ))}
      </div>
    </div>
  );
}

function TeamCard({ text, name, jobTitle, img }) {
  return (
    <div className="h-full w-56 h-96 rounded-xl relative mb-56 flex flex-col group transform hover:-rotate-3 transition duration-300 overflow-hidden testimonial fadeInUp">
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
