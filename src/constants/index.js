import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  sql,
  aws,
  spring,
  java,
  meta,
  starbucks,
  tesla,
  shopify,
  iit,
  lti,
  paypal,
  carrent,
  jobit,
  tripguide,
  threejs,
  dog,
  bank,
  crud,
  
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
 
  {
    name: "NodeJS",
    icon: nodejs,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Spring",
    icon: spring,
  },
  {
    name: "Java",
    icon: java,
  },
  
  {
    name: "git",
    icon: git,
  },
  ,
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Senior Software Engineer",
    company_name: "LTIMindtree",
    icon: lti,
    iconBg: "#E6DEDD",
    date: "Mar 2022 - Present",
    points: [
      "Developed website editing experience for low-code no-code users to create & edit images, videos, text, webpages etc. in React, Typescript and Javascript",
      "Developed a Dashboard for Managers in collaboration with PM's using Spring Boot, AWS S3, ReactJS; that Enabled managers to easily track employee performance, set goals and get real-time analytics; application achieved 99.9% uptime and reduced performance review time by 60%."
    ],
  },
  {
    title: "Software Engineer",
    company_name: "LTIMindtree",
    icon: lti,
    iconBg: "#E6DEDD",
    date: "Jul 2021 - Mar 2022",
    points: [
      "Successfully built and implemented a CI/CD pipeline for microservices on Kubernetes using Azure DevOps",
      "Effectively resolved deployment errors in the System Integration Testing (SIT) environment during various sprints.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Provided expert backend support to business operations using Java and TAFJ (Temenos Application Framework for Java) also managed daily COB (Close of Business) execution and resolved errors in the DEV and TEST environments to ensure smooth business operations.",

    ],
  },
  {
    title: "Software Development Engineer Intern",
    company_name: "PayPal",
    icon: paypal,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - July 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Research Intern",
    company_name: "IIT-Roorkee",
    icon: iit,
    iconBg: "#E6DEDD",
    date: "May 2020 - Jul 2020 ",
    points: [
      "Researched Dynamic graph algorithms for pangenomics, focusing on POA (Partial Order Alignment) and Bitvector alignment algorithms.",
      "Analyzed strengths and limitations of both algorithms.",
      "Concluded that the POA algorithm is versatile and widely used, while bitvector alignment algorithm offers faster runtime, making it suitable for large-scale pangenomic analyses.",
      ,
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Performance Management CRUD Web App",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "axios",
        color: "pink-text-gradient",
      },
      {
        name: "SpringBoot",
        color: "green-text-gradient",
      },
    ],
    image: crud,
    source_code_link: "https://github.com/",
  },
  {
    name: "Bank Management Web App",
    description:
      " Online banking application is specifically developed for internet banking for balance enquiry, funds transfer to another account, change of profile information and account statement.",
    tags: [
      {
        name: "Angular",
        color: "pink-text-gradient",
      },
      {
        name: "oracle-11g",
        color: "blue-text-gradient",
      },
      {
        name: "SpringBoot",
        color: "green-text-gradient",
      },
      {
        name: "smtp",
        color: "pink-text-gradient",
      },
    ],
    image: bank,
    source_code_link: "https://github.com/kay-verma/Banking-Application",
  },
  {
    name: "Pets detection System",
    description:
      "Pets Detection System with Fast R-CNN Algorithm: A high-accuracy, efficient, and adaptable computer vision project for real-time object detection, tracking, and classification, utilizing the Fast R-CNN algorithm.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "deeplearning",
        color: "green-text-gradient",
      },
      {
        name: "fast-RCNN",
        color: "pink-text-gradient",
      },
    ],
    image: dog,
    source_code_link: "https://github.com/kay-verma/objectdetection",
  },
];

export { services, technologies, experiences, testimonials, projects };
