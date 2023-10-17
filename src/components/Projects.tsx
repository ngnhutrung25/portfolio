const Projects = () => {
    const projects = [
        {
            logo: "logo_ueh.png",
            name: "Sapiente",
            type: "Tools",
            role: "Founder",
            time: "September 2017 - May 2019",
            linkProduct: "https://sapiente.space",
            infomation:
                "Aut omnis voluptatem sit sequi. Voluptatem temporibus repellat voluptatem voluptatibus enim voluptas necessitatibus. Aut quasi sunt dolor. Commodi dolores saepe asperiores beatae voluptate corporis est ea voluptatem. Enim quo sed et sint aspernatur distinctio qui quam.",
        },
        {
            logo: "logo_ueh.png",
            name: "Sapiente",
            type: "Tools",
            role: "Founder",
            time: "September 2017 - May 2019",
            linkProduct: "https://sapiente.space",
            infomation:
                "Aut omnis voluptatem sit sequi. Voluptatem temporibus repellat voluptatem voluptatibus enim voluptas necessitatibus. Aut quasi sunt dolor. Commodi dolores saepe asperiores beatae voluptate corporis est ea voluptatem. Enim quo sed et sint aspernatur distinctio qui quam.",
        },
        {
            logo: "logo_ueh.png",
            name: "Sapiente",
            type: "Tools",
            role: "Founder",
            time: "September 2017 - May 2019",
            linkProduct: "https://sapiente.space",
            infomation:
                "Aut omnis voluptatem sit sequi. Voluptatem temporibus repellat voluptatem voluptatibus enim voluptas necessitatibus. Aut quasi sunt dolor. Commodi dolores saepe asperiores beatae voluptate corporis est ea voluptatem. Enim quo sed et sint aspernatur distinctio qui quam.",
        },
    ];

    return (
        <div className="p-7 shadow-lg rounded-xl overflow-hidden bg-white">
            <h2 className="font-semibold text-xl pb-6">Projects</h2>

            {projects.map((project, index) => (
                <div key={index} className="mb-6 flex gap-4">
                    <div className="flex justify-center items-center border border-gray-200 bg-white h-14 w-14 p-1 overflow-hidden rounded-xl">
                        <img
                            className="object-contain w-full h-full"
                            src={"./img/" + project.logo}
                            alt=""
                        />
                    </div>

                    <div className="flex-1 space-y-5">
                        <div className="space-y-2">
                            <div className="font-medium text-lg">
                                {project.name}
                            </div>

                            <div className="flex justify-between">
                                <div className="flex space-x-5">
                                    <div className="text-gray-500 flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4 mr-1"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                                            ></path>
                                        </svg>
                                        <span className="font-medium">
                                            {project.type}
                                        </span>
                                    </div>
                                    <div className="text-gray-500 flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4 mr-1"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                            ></path>
                                        </svg>
                                        <span className="font-medium">
                                            {project.role}
                                        </span>
                                    </div>
                                </div>
                                <div className="text-gray-500 flex items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 mr-1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        ></path>
                                    </svg>
                                    <span className="font-medium">
                                        {project.time}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <p className="text-gray-600 text-base">
                            {project.infomation}
                        </p>
                        <button className="flex items-center space-x-3 px-4 py-2 rounded-xl group border border-purple-500 bg-white text-purple-500 text-base font-medium transition duration-200 hover:border-purple-600 hover:text-white hover:bg-purple-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                                ></path>
                            </svg>
                            <span>{project.linkProduct}</span>
                        </button>
                        {index !== projects.length - 1 && (
                            <div className="border-b pt-2 border-gray-200"></div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Projects;
