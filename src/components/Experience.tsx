const Experience = () => {
    const experience = [
        {
            logo: "logo_ueh.png",
            position: "Senior Developer",
            company: "Twitter",
            city: "London",
            type: "Full time",
            time: "September 2017 - Present",
            infomation:
                "Aut omnis voluptatem sit sequi. Voluptatem temporibus repellat voluptatem voluptatibus enim voluptas necessitatibus. Aut quasi sunt dolor. Commodi dolores saepe asperiores beatae voluptate corporis est ea voluptatem. Enim quo sed et sint aspernatur distinctio qui quam.",
        },
        {
            logo: "logo_ueh.png",
            position: "Junior Developer",
            company: "Twitter",
            city: "London",
            type: "Full time",
            time: "September 2017 - Present",
            infomation:
                "Aut omnis voluptatem sit sequi. Voluptatem temporibus repellat voluptatem voluptatibus enim voluptas necessitatibus. Aut quasi sunt dolor. Commodi dolores saepe asperiores beatae voluptate corporis est ea voluptatem. Enim quo sed et sint aspernatur distinctio qui quam.",
        },
    ];

    return (
        <div className="p-7 shadow-lg rounded-xl overflow-hidden bg-white">
            <h2 className="font-semibold text-xl pb-6">Experience</h2>

            {experience.map((work, index) => (
                <div key={index} className="mb-5 flex gap-4">
                    <div className="flex justify-center items-center border border-gray-200 bg-white h-14 w-14 overflow-hidden p-1 rounded-xl">
                        <img
                            className="object-contain w-full h-full"
                            src={"./img/" + work.logo}
                            alt=""
                        />
                    </div>

                    <div className="flex-1 space-y-5">
                        <div className="flex justify-between">
                            <div className="space-y-2">
                                <div className="font-medium text-lg">
                                    {work.position}
                                </div>

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
                                                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            ></path>
                                        </svg>
                                        <span className="font-medium">
                                            {work.company}
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
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            ></path>
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            ></path>
                                        </svg>
                                        <span className="font-medium">
                                            {work.city}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2 sm:text-right">
                                <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                                    {work.type}
                                </span>
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
                                        {work.time}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <p className="text-gray-600">{work.infomation}</p>

                        {index !== experience.length - 1 && (
                            <div className="border-b pt-2 border-gray-200"></div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Experience;
