// Skills icons - https://react-icons.github.io/react-icons/
import {
  FaReact,
  FaGitAlt,
  FaLink,
  FaJsSquare,
  FaNodeJs,
  FaDocker,
  FaPython,
  FaJava,
  FaLinux,
  FaRaspberryPi,
  FaPhoneAlt,
} from "react-icons/fa";
import { SiKubernetes, SiMysql, SiDjango } from "react-icons/si";
import { HiMail } from "react-icons/hi";

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "subramanyakashyap";

// Blog link icon (imported above)
export const Blog = <FaLink />;

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo = (
  <p>
    I love building things that make difference. <br />
    The only fuel I need is caffiene. <br />
    <FaPhoneAlt /> +91 8970619120 <br />
    <HiMail /> sukruth21@gmail.com
    <br />
  </p>
);

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, there must be one icon imported above per skill below.
*/
export const skillData = [
  {
    id: 1,
    skill: <FaReact className="display-4" />,
    name: "React",
  },
  {
    id: 2,
    skill: <FaJsSquare className="display-4" />,
    name: "JS",
  },
  {
    id: 3,
    skill: <FaNodeJs className="display-4" />,
    name: "NestJS",
  },
  {
    id: 4,
    skill: <FaDocker className="display-4" />,
    name: "Docker",
  },
  {
    id: 5,
    skill: <SiKubernetes className="display-4" />,
    name: "Kubernetes",
  },
  {
    id: 6,
    skill: <FaPython className="display-4" />,
    name: "Python",
  },
  {
    id: 7,
    skill: <FaJava className="display-4" />,
    name: "Java",
  },
  {
    id: 8,
    skill: <FaGitAlt className="display-4" />,
    name: "Git",
  },
  {
    id: 9,
    skill: <SiMysql className="display-4" />,
    name: "Mysql",
  },
  {
    id: 10,
    skill: <SiDjango className="display-4" />,
    name: "Django",
  },
  {
    id: 11,
    skill: <FaLinux className="display-4" />,
    name: "Linux",
  },
  {
    id: 12,
    skill: <FaRaspberryPi className="display-4" />,
    name: "RaspberryPi",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume =
  "https://drive.google.com/file/d/1Eto3mxzHVT3N56FK-69aqK9A5LSrUjJQ/view?usp=sharing";

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["TheOCR", "PotHoleDetection-CNN"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 13-14)
export const projectCardImages = [];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/mvoypkbl";
