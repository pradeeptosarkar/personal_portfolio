import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
//import LeetCodeIcon from "./leetcode.svg";

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
      project_name: "SyncLab - A suite of project management, tracking and productivity applications",
      project_live_link: "https://synclab.vercel.app/",
      project_description:
        "SyncLab is a collection of multiple full stack applications encompassing various use cases broadly covering software project management, collaboration, monitoring and tracking objectives for remote teams.",
      project_image:
        "https://res.cloudinary.com/df5hitkbj/image/upload/v1716613882/Untitled_gpt0te.png",
      project_tech: "Next.js, MySQL, Clerk, Stripe, JQuery, GitHub API, Google Cloud API",
      project_link: "https://github.com/Sync-Lab-2023/synclab-major-production-main",
    },
    {
      project_name: "Taskify - Documentation and Productivity",
      project_live_link: "https://taskify-omega.vercel.app/",
      project_description:
        "Taskify is a full-stack application built using Next.js, React, Convex Database, TypeScript and Tailwind CSS, which allows users to make and publish documents with ease. The authentication is handled using clerk and the database using convex",
      project_image:
        "https://res.cloudinary.com/df5hitkbj/image/upload/v1698061717/taskify_ss_cvmila.png",
      project_tech: "Next.js, React.js, Convex, TypeScript, Tailwind CSS",
      project_link: "https://github.com/pradeeptosarkar/taskify",
    },
    {
      project_name: "EventScale - Event Management Simplified",
      project_live_link: "https://eventscale.vercel.app/",
      project_description:
        "A full stack application to organize online/offline events, manage ticketing, guests, scheduling and related communications built using NextJS, Uploadthing, Prisma ORM and MongoDB.",
      project_image:
        "https://res.cloudinary.com/df5hitkbj/image/upload/v1716612857/Untitled_ab5cfq.png",
      project_tech: "Next.js, MongoDB, Prisma, TypeScript, Uploadthing",
      project_link: "https://github.com/pradeeptosarkar/eventscale",
    },
    {
      project_name: "dotPackages - NPM Packages Manager",
      project_live_link: "https://dotpackages.netlify.app/",
      project_description:
        "dotPackages allows you to list and visualise all the NPM packages used in a project simply by entering the GitHub link of the repositiory. It lists out crucial pieces of information such as license, update status, and most importantly all the dependencies of the package.",
      project_image:
        "https://res.cloudinary.com/df5hitkbj/image/upload/v1696517283/WhatsApp_Image_2023-10-05_at_20.17.17_5c883065_xpc1ed.jpg",
      project_tech: "React, GitHub GraphQL API, Tailwind CSS",
      project_link: "https://github.com/pradeeptosarkar/dotpackages",
    },
    {
      project_name: "dotRead - GitHub Repository and Code Viewer",
      project_live_link: "https://dotread.netlify.app/",
      project_description:
        "dotRead is web application to checkout multiple files of a GitHub repository without the need to download the code or forking it.",
      project_image:
        "https://res.cloudinary.com/df5hitkbj/image/upload/v1691074774/WhatsApp_Image_2023-08-03_at_20.28.13_kzoyhi.jpg",
      project_tech: "React, GitHub GraphQL API, GitHub React Primer, Monaco Editor, React Query",
      project_link: "https://github.com/pradeeptosarkar/dotRead",
    },
    {
      project_name: "The nameSpace Community Website",
      project_live_link: "https://namespacecomm.in",
      project_description:
        "Built the website for nameSpace (formerly NSCC BPIT), the community I founded at my university with over 3000 active members. It features a carousel for team members, event photos, a page for all the members of the society and an events page.",
      project_image:
        "https://res.cloudinary.com/df5hitkbj/image/upload/v1716617099/Untitled_v2avco.png",
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
    { name: <LinkedInIcon />,link: "https://www.linkedin.com/in/pradeeptosarkar/",},
    { name: <AlternateEmailIcon />, link: "mailto:pradeeptosarkarmail@gmail.com" },
    { name: <TwitterIcon />, link: "https://twitter.com/pradeepto_src" },
    { name: <InstagramIcon />, link: "https://www.instagram.com/pradeeptosarkar" },
    //{ name: <LeetCodeIcon />, link: "https://www.instagram.com/pradeeptosarkar" },
  ],

  blogPosts: [
    {
        title: 'Building a Custom Compiler or Transpiler with Node.js',
        description: 'Breaking Boundaries with Node.js: Crafting a Custom Compiler with Advanced Optimization Techniques and Expanded Functionality',
        img: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1719124434477/790da33c-dbd0-4f0b-a9a2-88424b1387d2.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',
        link: 'https://blog.namespacecomm.in/building-a-custom-compiler-or-transpiler-with-nodejs'
    },
    {
        title: 'Automating your workflow with GitHub Actions',
        description: 'From basics to advanced deployments with real-world examples',
        img: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1716101251452/1f430c58-34c4-4a1f-9695-b4017957d75b.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',
        link: 'https://blog.namespacecomm.in/automating-your-workflow-with-github-actions'
    },
    {
        title: "GitHub API Demystified: A Developer's Handbook",
        description: 'Automation, Integration, and Efficiency',
        img: 'https://github.com/pradeeptosarkar/pradeeptosarkar/assets/50446690/b0ea9195-2bbe-47a5-a6f1-1462f6923b5f',
        link: 'https://blog.namespacecomm.in/github-api-demystified-a-developers-handbook'
    },
    {
        title: 'Looking Back: 1 year of NSCC BPIT',
        description: 'A journey of passion and learning',
        img: 'https://github.com/pradeeptosarkar/pradeeptosarkar/assets/50446690/6a7036ed-f98c-4076-b0cc-380cbd51f9ca',
        link: 'https://blog.namespacecomm.in/looking-back-1-year-of-nscc-bpit'
    }
],
};

export default data;
