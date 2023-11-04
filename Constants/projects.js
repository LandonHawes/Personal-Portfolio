// import project demo images as follows.
import PROJECT1_1 from "../styles/projects/Project1_1.jpg";
import PROJECT1_2 from "../styles/projects/Project1_2.jpg";
import PROJECT1_3 from "../styles/projects/Project1_3.jpg";
import PROJECT2_1 from "../styles/projects/Project2_1.jpg";
import PROJECT2_2 from "../styles/projects/Project2_2.jpg";
import PROJECT2_3 from "../styles/projects/Project2_3.jpg";
import PROJECT3_1 from "../styles/projects/Project3_1.jpg";
import PROJECT3_2 from "../styles/projects/Project3_2.jpg";
import PROJECT3_3 from "../styles/projects/Project3_3.jpg";

// first 3 projects are visible on the homepage while all are visible on the work page.

export const projects = [
  //leave the githublink field blank if it is a private repo or doent exist, alerts will take care of it
  //leave the projectlink field blank if it the project has not been deployed, alerts will take care of it
  {
    name: "PreSnap", //project name
    description:
      "Full-stack engineer building and maintaining the company website.", //project description
    githubLink: "", //github repo link
    projectLink: "", //deployed project link
    tech: ["React", "JavaScript", "Next.js"], //techstack of the project, it is advisavble to mention only upto 3 technologies here to maintain the ui
    photo: [PROJECT1_1, PROJECT1_2, PROJECT1_3], //list of names of images from above imports.
  },
  {
    name: "JoyStick Gaming Twitch Extension",
    description:
      "Created an interactive Twitch Extension where streamers could create polls that their viewers could participate in and win prizes.",
    githubLink: "/",
    projectLink: "/",
    tech: ["React", "Flask", "Bootstrap"],
    photo: [PROJECT2_1, PROJECT2_2, PROJECT2_3],
  },
  {
    name: "Web based video editor",
    description:
      "Created a web based video editor that creators could use to better format their videos for platforms such as TikTok or Youtube Shorts.",
    githubLink: "/",
    projectLink: "/",
    tech: ["React", "Flask", "Bootstrap"],
    photo: [PROJECT3_1, PROJECT3_2, PROJECT3_3],
  },
];
