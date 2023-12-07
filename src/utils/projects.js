import { VscSourceControl } from "react-icons/vsc";
import { MdLaunch } from "react-icons/md";
import project1d from "../assets/images/project1-d.png";
import project2d from "../assets/images/project2-d.png";

export const projects = [
  {
    id: 1,
    name: "magsensor",
    description:
      "Magsensor is a website built for a small sensory integration business. It's a reliable and robust application that is designed to grow and adapt as user needs evolve, thanks to the Headless CMS - Contentful. This app is optimized for speed and performance, ensuring that users can access it quickly and efficiently.",
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
    siteUrl: "https://dficek.com",
    gitUrl: "https://github.com/dawid-f/portfolio",
    siteIcon: <MdLaunch />,
    gitIcon: <VscSourceControl />,
    cl: "project-b",
  },
];
