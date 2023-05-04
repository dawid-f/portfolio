import { VscSourceControl } from "react-icons/vsc";
import { MdLaunch } from "react-icons/md";
import project1d from "../assets/images/project1-d.png";
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
    name: "my portfolio",
    description:
      "My portfolio project that was built using React and SCSS. It's a lightweight, performance-focused, Single Page Application.",
    stack: ["react", "context API", "SCSS"],
    img: project2d,
    siteUrl: "https://dficek.netlify.app",
    gitUrl: "https://github.com/dawid-f/portfolio",
    siteIcon: <MdLaunch />,
    gitIcon: <VscSourceControl />,
    cl: "project-b",
  },
];
