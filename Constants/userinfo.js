//PLEASE FOLLOW THE FORMAT OF THIS FILE.

import {
  faGithubAlt,
  faLinkedinIn,
  faMediumM,
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
  faBehance,
} from "@fortawesome/free-brands-svg-icons";

export const userinfo = {
  logoText: "Landon Hawes", //This text is visible on your navbar and footer like your logo.
  contact: {
    email: "landonwiggen@gmail.com", //It is always a good idea to mention your email on your website. Good platform to communicate.
    phone: "3615712221", //Phone number is optional, if you dont want it, consider leaving it blank .
    countrycode: "+1", //It is advisable to add the country code incase you mention your contact number.
  },
  socials: [
    //For aesthetics, it is advisable for you to mention upto 4 social media links only. Fill in the links.
    //more icons are imported above, use as you like them.
    { type: "github", link: "https://github.com/LandWigg", icon: faGithubAlt },
    {
      type: "linkedin",
      link: "https://www.linkedin.com/in/landon-hawes-93b642246/",
      icon: faLinkedinIn,
    },
    {
      type: "instagram",
      link: "https://www.instagram.com/landonhawes1/",
      icon: faInstagram,
    },
  ],
  greeting: {
    //this text goes on your landing page
    title: "Hey there, I am Landon.",
    subtitle:
      "As a self-taught developer, I'm driven to acquire new programming skills and am always looking for a new challenge.",
  },
  capabilities: [
    //this text goes on your home page in table format.
    //For aesthetics, it is advisable for you to mention upto 4 catgeories links only.
    //For aesthetics, it is advisable for you to keep similar number of skills in each category
    {
      category: "Frontend", // eg.frontend, backend, devops etc
      skills: ["Javascript", "TypeScript", "HTML & CSS"], //eg. react, html, python etc.
    },
    {
      category: "Backend",
      skills: ["Python", "PostgreSQL", "Flask"],
    },
    {
      category: "Devops",
      skills: ["Kubernetes", "Terraform", "GitHub Actions"],
    },
    {
      category: "Frameworks",
      skills: ["Next.js", "React", "Tailwind CSS"],
    },
  ],
  about: {
    //this text goes at the bottom of your home page.
    content:
      "I am Landon, a self-taught developer from Texas. I have over 3 years of building websites and designing software. Additionally I am pursuing certifications in AWS and Kubernetes. Currently I work as a full-stack engineer at PreSnap where I build and maintain the company's website and internal tools.",
    resume:
      "https://drive.google.com/file/d/1aKkYzrEUU5RmMyHs2YcF8JlXgXSKSRno/view?usp=drive_link", //link your resume here. it can be drive link or any other link
  },
  education: {
    visible: false, //set this to false if you want to omit this section
    educationList: [
      {
        time: "May - Oct 2020", //timespan
        title: "Degree name", //eg. BTech in Compuster Engineering
        organization: "School Name", //eg. VJTI, Mumbai
        description: "Lorem ipsum dolor sit amet consectetur", //eg. secured a cgpa of 9.25 in all sems appeared in so far
      },
      {
        time: "May - Oct 2020",
        title: "Degree name",
        organization: "School Name",
        description: "Lorem ipsum dolor sit amet consectetur",
      },
      {
        time: "May - Oct 2020",
        title: "Degree name",
        organization: "School Name",
        description: "Lorem ipsum dolor sit amet consectetur",
      },
    ],
  },
  experience: {
    visible: true, //set this to false if you want to omit this section
    experienceList: [
      {
        company: "PreSnap", //company name eg.Microsoft
        companylogo: "https://www.presnap.com/*", //companylogo
        position: "Software Engineer", //post you held eg.Senior SDE
        time: "March 2022 - Present", //timespan
        description:
          "Created and maintained a web application that facilitated remote coaching for athletes, as well as scheduling and payment for services. Used React/Next.js for the frontend, as well as node and postgres for the backend.", //eg. spearheaded the graphics team in designing SASS product UIs
      },
      {
        company: "Mindir",
        // companylogo:
        //   "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-did-steve-carell-leave-the-office-1585597666.jpg?crop=0.563xw:0.844xh;0.287xw,0.128xh&resize=480:*",
        position: "Software Engineer",
        time: "January 2021 - March 2022",
        description:
          "Freelance software engineer that worked on and created a variety of products including a web based video editor, a food ordering website, and an extension for Twitch.tv utilizing tools such as React, Next.js, AWS, Flask, Websocks, and Bootstrap.",
      },
      // {
      //   company: "Dunder Mifflin",
      //   companylogo:
      //     "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-did-steve-carell-leave-the-office-1585597666.jpg?crop=0.563xw:0.844xh;0.287xw,0.128xh&resize=480:*",
      //   position: "Regional Manager",
      //   time: "March 2020 - May 2020",
      //   description:
      //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum",
      // },
    ],
  },
  blogs: {
    //set this to false if you want to omit this section
    visible: false,
  },
};

export const headings = {
  //you can customise all the headings here.
  workHomePage: "Work",
  workMainPage: "Projects",
  capabilities: "Capabilities",
  about: "About Me",
  education: "Education",
  experience: "Experiences",
  blogs: "I write!",
  contact: "Contact Me",
};

export const ctaTexts = {
  //you can customise all the cta texts here.
  landingCTA: "My work",
  workCTA: "View All",
  capabCTA: "Get in Touch",
  educationCTA: "About Me",
  resumeCTA: "Resume",
  submitBTN: "Submit",
};
