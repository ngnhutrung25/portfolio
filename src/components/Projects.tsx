const Projects = () => {
  const projects = [
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
      time: "September 2023",
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
      logo: "miblog.png",
      name: "miBlog - Personal Project",
      type: "Blog",
      role: "Creator/Developer",
      time: "August 2023",
      linkProduct: {
        demo: "https://mi-blog-app.vercel.app/",
        git: "https://github.com/michino25/mi-blog",
      },
      information: [
        "A Personal Blog for writing and publishing articles, where multiple users can log in and contribute content.",
        "Developed a fully functional blog website with user registration, authentication, and blog post management. Ensured a responsive user interface for seamless user experience.",
        "Technologies: TypeScript, Node.js, Express, MongoDB, RESTful API, JWT, ReactJS, React-Router, Tailwind, and Vite.",
      ],
      image: [
        { title: "Home page image 1", image: "demo/miblog1.png" },
        { title: "Home page image 2", image: "demo/miblog2.png" },
        { title: "Home page image 3", image: "demo/miblog3.png" },
      ],
    },
    {
      logo: "mitask.png",
      name: "miTask - Personal Project",
      type: "Tool",
      role: "Creator/Developer",
      time: "August 2023",
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
          <div key={index} className="mb-6 flex gap-4">
            <div className="flex justify-center items-center border border-gray-200 bg-white h-14 w-14 p-3 overflow-hidden rounded-xl">
              <img
                className="object-contain w-full h-full"
                src={"./img/" + project.logo}
                alt=""
              />
            </div>

            <div className="flex-1 space-y-5">
              <div className="space-y-2">
                <div className="font-medium text-lg">{project.name}</div>

                <div className="justify-between items-start md:items-center flex flex-col md:flex-row">
                  <div className="flex flex-col md:flex-row -m-1">
                    <div className="text-gray-500 m-1 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                        ></path>
                      </svg>
                      <span className="font-medium">{project.type}</span>
                    </div>
                    <div className="text-gray-500 m-1 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        ></path>
                      </svg>
                      <span className="font-medium">{project.role}</span>
                    </div>
                  </div>
                  <div className="text-gray-500 flex items-center mt-2 md:mt-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      ></path>
                    </svg>
                    <span className="font-medium">{project.time}</span>
                  </div>
                </div>
              </div>
              <div className="text-gray-600">
                {project.information.map((info, index) => (
                  <span key={index} className="mt-2 flex gap-4">
                    • {info}
                  </span>
                ))}
              </div>

              <div className="flex w-full relative flex-wrap">
                {project.linkProduct.demo && (
                  <a
                    href={project.linkProduct.demo}
                    target="_blank"
                    className="inline-flex items-center m-1 space-x-3 px-4 py-2 rounded-xl group border text-base font-medium transition duration-200 border-teal-600/80 bg-white/50 text-teal-500 hover:text-white hover:bg-teal-600/80"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                      ></path>
                    </svg>
                    <span>Demo Page</span>
                  </a>
                )}
                {project.linkProduct.git && (
                  <a
                    href={project.linkProduct.git}
                    target="_blank"
                    className="inline-flex items-center m-1 space-x-3 px-4 py-2 rounded-xl group border text-base font-medium transition duration-200 border-teal-600/80 bg-white/50 text-teal-500 hover:text-white hover:bg-teal-600/80"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                      ></path>
                    </svg>
                    <span>Git Repository</span>
                  </a>
                )}
                <div className="flex flex-wrap">
                  {project.image.map((pic, index) => (
                    <a
                      href={"img/" + pic.image}
                      key={index}
                      target="_blank"
                      className="inline-flex items-center m-1 space-x-3 px-4 py-2 rounded-xl group border text-base font-medium transition duration-200 border-teal-600/80 bg-white/50 text-teal-500 hover:text-white hover:bg-teal-600/80"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                        ></path>
                      </svg>
                      <span>{pic.title}</span>
                    </a>
                  ))}
                </div>
              </div>

              {index !== projects.length - 1 && (
                <div className="border-b pt-2 border-gray-200"></div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
