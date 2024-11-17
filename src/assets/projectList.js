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

export const projectList = {
  "portfolio-v2": {
    number: "01",
    title: "Portfolio V2",
    description:
      "This is my second version of my portfolio. I plan on reworking it every year to represent me in the best way possible. I will probably keep an archive of past versions. As a project, I tried to reflect my personality and went through multiple designs.",
    imageUrl: portfolioIntro,
    tags: ["React", "SASS", "UI", "Figma"],
    link: "https://github.com/georgeiliop/portfolio-v2",
    designContent: [
      {
        subtitle: "Kit",
        subtitleDescription:
          "With the design I focused on western and horror, things I love a lot. I used a creamy yellow for the main pages and a bold red for the extras.",
        img: portfolioDesign,
        description:
          "I ended up using 3 colors throughout, and different western fonts. The icons are also a western icons font pack. ",
      },
      {
        subtitle: "High Fidality Wireframes",
        subtitleDescription:
          "I worked on desktop and mobile wireframes to help me identify the end result I wanted to achieve and make the coding part faster.",
        img: portfolioDesignHifi,
        description:
          "On my next iteration of my portfolio I will include low fi wireframes and will determine the flow beforehand to make it easier to design.",
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
          "Using React and SASS, I wanted to make minimal use of other frameworks and libraries. I used 3 main folders to structure the project. Assets, Components and Routes. I used the components folder for resuable components, and routes to include all the routes and the components that make up each route.",
        img: portfolioStructure,
        description:
          "Each component has its own scss file, and I used a global file for colors and layout properties that I would use universally. For the projects I used a dynamic route approach",
      },
      {
        subtitle: "Header & Menu",
        subtitleDescription:
          "For the header, I wanted to make it sticky when the user scroll up and to hide it while scrolling down. I used a listener for the scroll and a state to control the styles.",
        img: portfolioHeader,
        description:
          "For the menu, I used media quaries to control when it shows up. When the menu is open, I disabled scolling. I also used animations for the burder menu button and for the color changes.",
      },
      {
        subtitle: "Motion",
        subtitleDescription:
          "I used various animations throughout the page with different approaches. Listeners, hover transforms, keyframes and mount changes.",
        img: portfolioMotion,
      },
      {
        subtitle: "Responsive design",
        subtitleDescription:
          "I used many media quaries throughout the project to achieve both desktop and mobile design. I also used dynamic font sizes, dynamic paddings and margins, and a lot of flexbox.",
        img: portfolioResponsive,
        description:
          "To create the slightly random grid on the extra page I used 2 grids and controlled the layout with the grid display.",
      },
    ],
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

// "learning-app": {
//     number: "01",
//     route: "learning-app",
//     title: "Learning App",
//     description: "This is the description for Project 1.",
//     imageUrl: learningAppImg,
//     tags: ["React", "React Native", "SCSS", "Typescript", "UI/UX"],
//     link: "https://github.com/georgeiliop/learning-app",
//     designContent: [
//       {
//         subtitle: "UI/UX",
//         subtitleDescription: "This is the description for Project 2.",
//         img: learningAppImg,
//         description: "This is the description for Project 2.",
//       },
//       {
//         img: learningAppImg,
//         description: "This is the description for Project 2.",
//       },
//     ],
//     codeContent: [
//       {
//         subtitle: "Subtitle",
//         subtitleDescription: "This is the description for Project 2.",
//         img: RickAppImage,
//         description: "This is the description for Project 2.",
//       },
//       {
//         img: RickAppImage,
//         description: "This is the description for Project 2.",
//       },
//     ],
//   },
