import learningAppImg from "./images/project-images/learning.png";
import RickAppImage from "./images/project-images/rick_morty.png";

export const projectList = {
  "learning-app": {
    number: "01",
    route: "learning-app",
    title: "Learning App",
    description: "This is the description for Project 1.",
    imageUrl: learningAppImg,
    tags: ["React", "React Native", "SCSS", "Typescript", "UI/UX"],
    link: "https://github.com/georgeiliop/learning-app",
    aboutDescription: "This is the description for Project 2.",
    designContent: [
      {
        subtitle: "UI/UX",
        subtitleDescription: "This is the description for Project 2.",
        img: learningAppImg,
        description: "This is the description for Project 2.",
      },
      {
        img: learningAppImg,
        description: "This is the description for Project 2.",
      },
    ],
    codeContent: [
      {
        subtitle: "Subtitle",
        subtitleDescription: "This is the description for Project 2.",
        img: RickAppImage,
        description: "This is the description for Project 2.",
      },
      {
        img: RickAppImage,
        description: "This is the description for Project 2.",
      },
    ],
  },
  "rick-morty-finder": {
    number: "02",
    route: "rick-morty-finder",
    title: "Rick and Morty Finder App",
    description: "This is the description for Project 2.",
    imageUrl: RickAppImage,
    tags: ["React", "Rick&MortyAPI"],
    link: "https://github.com/georgeiliop/Rick-Morty-finder-app",
    aboutDescription: "This is the description for Project 2.",
    // designContent: [
    //   {
    //     subtitle: "Subtitle",
    //     subtitleDescription: "This is the description for Project 2.",
    //     img: "fd",
    //     description: "This is the description for Project 2.",
    //   },
    //   {
    //     img: "fd",
    //     description: "This is the description for Project 2.",
    //   },
    // ],
    // codeContent: [
    //   {
    //     subtitle: "Subtitle",
    //     subtitleDescription: "This is the description for Project 2.",
    //     img: "fd",
    //     description: "This is the description for Project 2.",
    //   },
    //   {
    //     img: "fd",
    //     description: "This is the description for Project 2.",
    //   },
    // ],
  },
};
