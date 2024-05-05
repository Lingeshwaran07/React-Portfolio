import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  tcs,
  carrent,
  jobit,
  tripguide,
  threejs,
  python,
  drf,
  pandas,
  postman
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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "System Engineer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Python Developer",
    icon: backend,
  },
  {
    title: "Django Web Developer",
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "Django",
    icon: creator,
  },
  {
    name: "Drf",
    icon: drf,
  },
  {
    name: "Pandas",
    icon: pandas,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Postman",
    icon: postman,
  },
];

const experiences = [
  {
    title: "React JS ",
    company_name: "Tata Consultancy Services",
    icon: tcs,
    iconBg: "#383E56",
    date: "Apr 2021 - Jan 2022",
    points: [
      "Designated as a React developer for Bank of America Tax Reporting system, crafting a smooth UI utilizing ES6 features and custom hooks, contributing to a 25% increase in user satisfaction",
"Employed code splitting, lazy loading, and search bar caching resulting in a 40% improvement in application loading times",
"Developed reusable components and integrated React Router features, contributing to a 35% improvement in navigation efficiency and user interaction within web applications",
    ],
  },
  {
    title: "Python ",
    company_name: "Tata Consultancy Services",
    icon: tcs,
    iconBg: "#ffb3d9",
    date: "Jan 2022 - Present",
    points: [
      "Assigned as a Python developer for Standard Life, which is a part of the UK's 72nd largest long-term savings and retirement business, Phoenix Group",

"Grasping the business logics provided by the clients in user stories and developing a comprehensive timeline and strategic planning for 100% completion of the SDC cycle",

"Adopted the flexible dataframe data structure in 90% of the code provided by the Pandas library for data manipulation, followed by optimized reusable code practices in core Python",

"Superintending client expectations by facilitating 20+ high-quality deliverables and resolving complex defects by closely working with cross-functional teams",
    ],
  },
  {
    title: "Django Web ",
    company_name: "Tata Consultancy Services",
    icon: tcs,
    iconBg: "#383E56",
    date: "Jan 2023 - Present",
    points: [
      "Developed a dynamic user interface for Annuity, Life, and Pension calculations to handle 20 or more business workflows",
"Applied Django forms for handling policies, which have 50+ inputs submitted through UI for different business scenarios",

"Produced REST API endpoints using Django Rest Framework with ApiView and serializers behind the endpoints, leading to a 100% robust API",
"Utilized dataframe for the validated JSON and reduced the overall memory usage by 50%",
"Presented the results to UI by triggering business utility functions and optimized the functions to work 40% faster",
    ],
  }
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
    name: "Movie App",
    description:
      "Created a movie app using the fast rendering React library, used django rest framework for JWT authentication along with google auth ,redux toolkit for centralized state management and tailwind for styling UI layer ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "djangorest",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "redux",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Lingeshwaran07/React_frontend",
    type:'Demo Link',
    link:'https://drive.google.com/file/d/1dmOK5jI_k5f-JnD_K1Q0SYunlu-veZTO/view'
  },
  {
    name: "E-commerce app",
    description:
      "Designed an E-commerce app using React and deployed it on Netlify, applied Formik for simplified form handling and centralized the state application-wide using context and useReducer hook combination.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "formik",
        color: "green-text-gradient",
      },
      {
        name: "useContext",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Lingeshwaran07/shop",
    type:'Website Link',
    link:'https://dextershopping.netlify.app/'
  },
    
];

export { services, technologies, experiences, testimonials, projects };
