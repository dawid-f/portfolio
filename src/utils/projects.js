import { VscSourceControl } from "react-icons/vsc";
import { MdLaunch } from "react-icons/md";
import project1d from "../assets/images/project1-d.png";
import project1m from "../assets/images/project1-m.png";
import project2m from "../assets/images/project2-m.png";
import project2d from "../assets/images/project2-d.png";

export const projects = [
  {
    id: 1,
    name: "magsensor",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptate, vel perferendis a harum consequuntur laudantium similique veniam accusantium.",
    stack: ["gatsby", "contentful", "styled-components"],
    img: project1d,
    siteUrl: "https://magsensor.pl",
    gitUrl: "https://github.com/dawid-f/magsensor",
    siteIcon: <MdLaunch />,
    gitIcon: <VscSourceControl />,
    cl: "project-a",
  },
  {
    id: 2,
    name: "jobify - job tracker",
    description:
      "Quidem expedita consectetur corrupti pariatur sunt tempora neque dicta soluta enim assumenda perferendis. Mollitia sequi veniam non vitae architecto consectetur eos voluptatem.",
    stack: ["react", "redux", "SCSS"],
    img: project2d,
    siteUrl: "https://magsensor.pl",
    gitUrl: "https://github.com/dawid-f/magsensor",
    siteIcon: <MdLaunch />,
    gitIcon: <VscSourceControl />,
    cl: "project-b",
  },
];
