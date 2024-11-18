import learningAppImg from "./images/project-images/learning.png";
import rickAppImage from "./images/project-images/rick_morty.png";
import portfolioIntro from "./images/project-images/portfolio-v2-intro.png";
import portfolioDesignHifi from "./images/project-images/portfolio-v2-design-hifi.png";
import portfolioDesignHifiMobile from "./images/project-images/portfolio-v2-design-hifi-mobile.png";
import portfolioDesign from "./images/project-images/portfolio-v2-design.png";
import portfolioStructure from "./images/project-images/portfolio-v2-structure.png";
import portfolioHeader from "./images/project-images/portfolio-v2-header.png";
import portfolioMotion from "./images/project-images/portfolio-v2-motion.png";
import portfolioResponsive from "./images/project-images/portfolio-v2-responsive.png";
import tipsplitIntro from "./images/project-images/tipsplit-intro.png";
import tipsplitLoFi from "./images/project-images/tipsplit-lo-fi.png";
import tipslitHiFi from "./images/project-images/tipsplit-hi-fi.png";
import tipsplitDesign from "./images/project-images/tipsplit-design.png";
import tipsplitSitemap from "./images/project-images/tipsplit-sitemap.png";
import tipsplitTaskflow from "./images/project-images/tipsplit-task-flow.png";

export const projectList = {
  "portfolio-v2": {
    number: "01",
    title: "Portfolio V2",
    description:
      "This is the second version of my portfolio. I plan on reworking it every year to represent me in the best way possible. I will probably keep an archive of past versions. As a project, I tried to reflect my personality and went through multiple designs.",
    imageUrl: portfolioIntro,
    tags: ["React", "SASS", "UI", "Figma"],
    link: "https://github.com/georgeiliop/portfolio-v2",
    designContent: [
      {
        subtitle: "Kit",
        subtitleDescription:
          "With the design I focused on western and horror. Things I love a lot! Used a creamy yellow for the main pages and a bold red for the extras.",
        img: portfolioDesign,
        description:
          "Ended up using 3 colors throughout, and different western fonts. The icons are also a western icons font pack. ",
      },
      {
        subtitle: "High Fidality Wireframes",
        subtitleDescription:
          "I worked on desktop and mobile wireframes to help me identify the end result I wanted to achieve and make the coding part faster.",
        img: portfolioDesignHifi,
        description:
          "On my next iteration of the portfolio I will include low fi wireframes and will determine the flow beforehand to make it easier to design.",
      },
      {
        img: portfolioDesignHifiMobile,
        description:
          "The mobile design also includes the menu. One thing I will pay attention in the future is breakpoints. The transition from desktop to mobile has some details that I figured out on the implementation.",
      },
    ],
    codeContent: [
      {
        subtitle: "Structure",
        subtitleDescription:
          "Using React and SASS, I wanted to make minimal use of other frameworks and libraries. I used 3 main folders to structure the project. Assets, Components and Routes. The components folder is for resuable components, and routes for all the pages and the components that make up each.",
        img: portfolioStructure,
        description:
          "Each component has its own scss file, and I used a global file for colors and layout properties that I would use universally. Every project has a dynamic route approach",
      },
      {
        subtitle: "Header & Menu",
        subtitleDescription:
          "I wanted to make the header sticky when the user scroll up and to hide it while scrolling down. I used a listener for the scroll and a state to control the styles.",
        img: portfolioHeader,
        description:
          "I used media quaries to control when the menu shows up. When its open, I disabled scolling. I also used animations for the burder menu button and for the color changes.",
      },
      {
        subtitle: "Motion",
        subtitleDescription:
          "I made various animations throughout the page with different approaches. Listeners, hover transforms, keyframes and mount changes.",
        img: portfolioMotion,
      },
      {
        subtitle: "Responsive design",
        subtitleDescription:
          "With media quaries throughout the project I implemented both the desktop and the mobile design. Also dynamic font sizes, dynamic paddings and margins, and a lot of flexbox.",
        img: portfolioResponsive,
        description:
          "To create the slightly random grid on the extra page I made 2 grids and controlled the layout with the grid display.",
      },
    ],
  },
  tipsplit: {
    number: "02",
    title: "Tipsplit",
    description:
      "Currently the project I'm working on. I will share more about it very shortly.",
    imageUrl: tipsplitIntro,
    tags: [
      "React-Native",
      "Expo",
      "SASS",
      "Tamagui",
      "Typescript",
      "UI/UX",
      "Figma",
    ],
    link: "https://github.com/georgeiliop/tipsplit",
    designContent: [
      {
        subtitle: "Sitemap",
        subtitleDescription: "",
        img: tipsplitSitemap,
        description: "",
      },
      {
        subtitle: "Taskflow",
        subtitleDescription: "",
        img: tipsplitTaskflow,
        description: "",
      },
      {
        subtitle: "Low Fidality Wireframes",
        subtitleDescription: "",
        img: tipsplitLoFi,
        description: "",
      },
      {
        subtitle: "Kit",
        subtitleDescription: "",
        img: tipsplitDesign,
        description: "",
      },
      {
        subtitle: "High Fidality Wireframes",
        subtitleDescription: "",
        img: tipslitHiFi,
        description: "",
      },
    ],
    // codeContent: [
    //   {
    //     subtitle: "Structure",
    //     subtitleDescription: "",
    //     // img: portfolioStructure,
    //     description: "",
    //   },
    // {
    //   subtitle: "Header & Menu",
    //   subtitleDescription: "",
    //   img: portfolioHeader,
    //   description: "",
    // },
    // {
    //   subtitle: "Motion",
    //   subtitleDescription: "",
    //   img: portfolioMotion,
    // },
    // {
    //   subtitle: "Responsive design",
    //   subtitleDescription: "",
    //   img: portfolioResponsive,
    //   description: "",
    // },
    // ],
  },
  "learning-app": {
    number: "01",
    title: "Learning App",
    description:
      "A React project part of a school class. I had to create a platform that was user friendly for elementary students. Simple design with playful colors. Utilized local storage for saving data.",
    imageUrl: learningAppImg,
    tags: ["React"],
    link: "https://github.com/georgeiliop/learning-app",
  },
  "rick-morty-finder": {
    number: "02",

    title: "Rick and Morty Finder App",
    description:
      "A simple React app using the Rick and Morty API. Practiced pagination and search.",
    imageUrl: rickAppImage,
    tags: ["React", "Rick&MortyAPI"],
    link: "https://github.com/georgeiliop/Rick-Morty-finder-app",
  },
};

// "portfolio-v2": {
//   number: "01",
//   title: "Portfolio V2",
//   description:
//     "",
//   imageUrl: portfolioIntro,
//   tags: ["React", "SASS", "UI", "Figma"],
//   link: "https://github.com/georgeiliop/portfolio-v2",
//   designContent: [
//     {
//       subtitle: "Kit",
//       subtitleDescription:
//         "",
//       img: portfolioDesign,
//       description:
//         ",
//     },
//     {
//       subtitle: "High Fidality Wireframes",
//       subtitleDescription:
//         "",
//       img: portfolioDesignHifi,
//       description:
//         "",
//     },
//     {
//       img: portfolioDesignHifiMobile,
//       description:
//         "",
//     },
//   ],
//   codeContent: [
//     {
//       subtitle: "Structure",
//       subtitleDescription:
//         "",
//       img: portfolioStructure,
//       description:
//         "",
//     },
//     {
//       subtitle: "Header & Menu",
//       subtitleDescription:
//         "",
//       img: portfolioHeader,
//       description:
//         "",
//     },
//     {
//       subtitle: "Motion",
//       subtitleDescription:
//         "",
//       img: portfolioMotion,
//     },
//     {
//       subtitle: "Responsive design",
//       subtitleDescription:
//         "",
//       img: portfolioResponsive,
//       description:
//         "",
//     },
//   ],
// },
