import {meta,shopify,starbucks,tesla} from '../assets/images';
import {
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nextjs,
    nodejs,
    react,
    redux,
    tailwindcss
} from "../assets/icons";

export const skills = [
    {   id : 1,
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
];

export const experiences = [
    {
        title: "Software Engineering Intern",
        company_name: "DesiQna",
        iconBg: "#accbe1",
        date: "June 2023 - October 2023",
        points: [
            "Worked on the Design and Development part of a fully responsive webpage for a particular section of Desi QnA.",
            "Worked on User Verification/Authentication + Engineeringchallenges of detecting and removing the fake bots and posts.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Developing and maintaining web applications using React.js and other related technologies.",
        ],
    },
    {
        title: "Machine Learning Intern",
        company_name: "Coincent",
        iconBg: "#fbc3bc",
        date: "August 2022 - November 2022",
        points: [
            "Assisted in developing machine learning models and collaboration with the data science team.",
            "Conducted data cleaning, preprocessing, and exploratory data analysis to enhance model performance.",
            "Collaborated with cross-functional teams to integrate machine learning solutions into existing workflows.",
            "Assisted in implementing and testing machine learning models under the guidance of senior team members.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    
    {   
        iconUrl: github,
        theme: 'btn-back-red',
        name: 'Wikipedia Clone using Rest API',
        description: 'Conceptualized and developed a Wikipedia clone, providing a user-friendly platform for information retrieval and collaborative content creation.',
        link: 'https://github.com/venkateswarlu589/Wikipedia-application-using-Rest-Api',
    },
    {   
        
        iconUrl: github,
        theme: 'btn-back-green',
        name: 'Spotify Clone',
        description: 'Developed Spotify clone as a personal project,the popular music streaming platform.Designed and implemented an intuitive user interface for seamless navigation and an engaging user experience.',
        link: 'https://github.com/venkateswarlu589/Spotify-Clone',
    },
    {   
        
        iconUrl: github,
        theme: 'btn-back-blue',
        name: 'Number Guessing Game ',
        description: 'Guess the number between 1 - 100 . it Generates a Random Number between 1 - 100 .it specifies Description for each wrong submission Whether you submitted the correct number or not.',
        link: 'https://github.com/venkateswarlu589/Number-GuessingGame-UsingJs',
    },
    {   
        
        iconUrl: github,
        theme: 'btn-back-pink',
        name: 'DataStructures and Algorithms',
        description: 'Adept in designing and implementing efficient algorithms and data structures to solve complex computational problems and focusing on optimization and scalability.',
        link: 'https://github.com/venkateswarlu589/Datastructures-and-Algorithms',
    },
    
];