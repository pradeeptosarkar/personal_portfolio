import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const data = {
  skills: [
    { name: "JavaScript" },
    { name: "ExpressJS" },
    { name: "NodeJS" },
    { name: "Postman" },
    { name: "MongoDB" },
    { name: "mySQL" },
    { name: "ReactJS" },
    { name: "NextJS" },
    { name: "ThreeJS" },
    { name: "CSS" },
    { name: "Bootstrap" },
    { name: "Tailwind CSS" },
    { name: "HTML" },
    { name: "Docker" },
    { name: "Microsoft Azure" },
    { name: "Git and GitHub" },
    { name: "React Native" },
    { name: "ElectronJS" },
    
  ],
  projects: [
    {
      project_name: "NSCC BPIT Website",
      project_live_link: "https://nsccbpit.tech",
      project_description:
        "Built the website for Newton School Coding Club, BPIT, the community I founded at my university with over 2000 active members. It features a carousel for team members, event photos, a page for all the members of the society and an events page.",
      project_image:
        "https://res.cloudinary.com/df5hitkbj/image/upload/v1690757350/WhatsApp_Image_2023-07-31_at_04.17.32_abkeiw.jpg",
      project_tech: "HTML, CSS, JavaScript, React, ThreeJS",
      project_link: "https://github.com/pradeeptosarkar/NSCC-BPIT-Website",
    },
    {
      project_name: "Sociopedia - The Social Media for Sociopaths",
      project_live_link: "https://sociopediaindia.netlify.app",
      project_description:
        "Sociopedia is a free-to-use social media app with powerful features built for the 21st century and beyond. This application is a full-stack project with fully functional front-end and back-end. The application’s novel features include, registration, login, authorization, authentication, text and photo upload, add friends, commenting on others’ to name a few.",
      project_image:
        "https://res.cloudinary.com/df5hitkbj/image/upload/v1690757594/WhatsApp_Image_2023-07-31_at_04.22.52_jelqox.jpg",
      project_tech:
        "React, Redux, Node, Express, MongoDB, Bootstrap, React-Router, JSON Web Tokens",
      project_link: "https://github.com/pradeeptosarkar/social_media_app_frontend",
    },
    {
      project_name: "List Making and Task Scheduling App",
      project_live_link: "https://trello-clone-kohl-six.vercel.app/",
      project_description:
        "This is a clone of popular project management application Trello (Listing Tasks). I have created it with React in frontend, Node and Express for backend and MongoDB for storing data. For authentication Firebase is used.",
      project_image:
        "https://res.cloudinary.com/df5hitkbj/image/upload/v1690758335/WhatsApp_Image_2023-07-31_at_04.34.50_khchoj.jpg",
      project_tech: "React, Redux, Node, Express, MongoDB, Bootstrap, React-Router, Firebase",
      project_link: "https://github.com/pradeeptosarkar/trello-clone",
    },
    
  ],
  socials: [
    { name: <GitHubIcon />, link: "https://github.com/pradeeptosarkar" },
    {
      name: <LinkedInIcon />,link: "https://www.linkedin.com/in/pradeeptosarkar/",
    },
    { name: <AlternateEmailIcon />, link: "mailto:pradeeptosarkarmail@gmail.com" },
    { name: <TwitterIcon />, link: "https://twitter.com/pradeepto_src" },
    { name: <InstagramIcon />, link: "https://www.instagram.com/pradeeptosarkar" },
  ],
};

export default data;
