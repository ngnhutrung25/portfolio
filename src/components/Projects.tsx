import BlockItem from "../commons/BlockItem";

const Projects = () => {
  const projects = [
    {
      logo: "chime-logo.png",
      name: "Chime Extension - Personal Project",
      type: "Chrome Extension",
      role: "Creator/Developer",
      time: "November 2024",
      linkProduct: {
        git: "https://github.com/michino25/chime-extension",
      },

      information: [
        "Provides time-based notifications with sound alerts, designed to remind users to take regular breaks, stay hydrated, and manage their time effectively.",
      ],
      image: [{ title: "Extension image", image: "demo/chime.png" }],
    },
    {
      logo: "trifarm.png",
      name: "miFarm App - Personal Project",
      type: "E-commerce",
      role: "Creator/Developer",
      time: "October 2023",
      linkProduct: {
        git: "https://github.com/michino25/mi-farm-rn",
      },
      information: [
        "An ecommerce mobile app dedicated to the sale of fresh vegetables and agricultural products.",
        "Developed a fully functional ecommerce mobile app with user registration, product listings and shopping cart functionality.",
        "Technologies: React Native, Tailwind (nativewind), Axios, Redux, Redux Thunk, Redux Persist.",
      ],
      image: [{ title: "Demo Video", image: "demo/mifarm.gif" }],
    },
    {
      logo: "trifarm.png",
      name: "miFarm MERN - Personal Project",
      type: "E-commerce",
      role: "Creator/Developer",
      time: "July 2023",
      linkProduct: {
        demo: "https://mi-farm.vercel.app/",
        git: "https://github.com/michino25/mi-farm-mern",
      },
      information: [
        "A web-based ecommerce platform dedicated to the sale of fresh vegetables and agricultural products.",
        "Developed a fully functional ecommerce website with user registration, product listings and shopping cart functionality.",
        "Technologies: TypeScript, Node.js, Express, MongoDB, RESTful API, Axios, ReactJS, React-Router, Tailwind, Redux, Redux Thunk.",
      ],
      image: [
        { title: "Home page image", image: "demo/mifarm1.png" },
        { title: "Cart page image", image: "demo/mifarm2.png" },
      ],
    },
    {
      logo: "mitask.png",
      name: "miTask - Personal Project",
      type: "Tool",
      role: "Creator/Developer",
      time: "June 2023",
      linkProduct: {
        demo: "https://mitask-to-do-list-app.vercel.app/",
        git: "https://github.com/michino25/mitask-to-do-list-app",
      },

      information: [
        "A to-do list application for managing tasks and boosting productivity.",
        "Developed a to-do list application with task management features and a user-friendly interface, designed to efficiently organize tasks.",
        "Technologies: TypeScript, React, Redux, Tailwind.",
      ],
      image: [{ title: "App page image", image: "demo/mitask.png" }],
    },
    {
      logo: "hide-scrollbar.png",
      name: "Hide Scrollbar Extension - Personal Project",
      type: "Chrome Extension",
      role: "Creator/Developer",
      time: "March 2023",
      linkProduct: {
        git: "https://github.com/michino25/hide-scrollbar-extension",
      },

      information: [
        "Toggle the scrollbar's visibility.",
        "Easily enable or disable the scrollbar by right-clicking in the context menu.",
        "Content scripts ensure seamless integration with web pages during loading.",
      ],
      image: [{ title: "Extension image", image: "demo/hide-scrollbar.png" }],
    },
    {
      logo: "trifarm.png",
      name: "TriFarm - Final Course Project",
      type: "E-commerce",
      role: "Leader/Co-developer",
      time: "September 2022 - November 2022",
      linkProduct: {
        demo: "https://trifarm.epizy.com",
        git: "https://github.com/michino25/trifarm_website",
      },

      information: [
        "E-Commerce Website for Agricultural Products.",
        "Team Size: 4 members; Role: Leader/Co-developer.",
        "Technologies: PHP, AJAX, MVC architecture, Bootstrap",
        "Created a fully functional e-commerce website with user registration, product listings, shopping cart functionality, and Momo payment integration.",
      ],
      image: [{ title: "Home page image", image: "demo/trifarm.png" }],
    },
  ];

  return (
    <div className="block">
      <h2 className="title">Projects</h2>

      <div className="content">
        {projects.map((project, index) => (
          <BlockItem
            title={project.name}
            logo={project.logo}
            content={project.information}
            subTitle={[
              { type: "project", content: project.type },
              { type: "role", content: project.role },
              { type: "time", content: project.time },
            ]}
            meta={[
              ...(project.linkProduct.demo
                ? [{ title: "Demo Page", link: project.linkProduct.demo }]
                : []),
              ...(project.linkProduct.git
                ? [{ title: "Git Repository", link: project.linkProduct.git }]
                : []),
              ...project.image,
            ]}
            bottomBorder={index !== projects.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
