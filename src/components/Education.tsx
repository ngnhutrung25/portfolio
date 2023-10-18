const Education = () => {
    const education = [
        {
            logo: "logo_ueh.png",
            school: "UEH University",
            major: "Software Technology",
            city: "Ho Chi Minh City",
            time: "September 2020 - Present",
            infomation: [
                "Final-year student - GPA: 8.54/10",
                "Received scholarships in term 4 and term 5, placing in the top 5% of students",
                "Relevant Coursework: Algorithms; Database; System Analysis and Design; Object-Oriented Programming; Theme Design; Web Application Development",
            ],
        },
    ];
    return (
        <div className="block">
            <h2 className="title">Education</h2>

            <div className="content">
                {education.map((study, index) => (
                    <div key={index} className="mb-6 flex gap-4">
                        <div className="flex justify-center items-center border border-gray-200 bg-white h-14 w-14 p-2 overflow-hidden rounded-xl">
                            <img
                                className="object-contain w-full h-full"
                                src={"./img/" + study.logo}
                                alt=""
                            />
                        </div>

                        <div className="flex-1 space-y-5">
                            <div className="space-y-2">
                                <div className="font-medium text-lg">
                                    {study.major}
                                </div>

                                <div className="justify-between flex flex-col flex-wrap sm:flex-row space-y-2">
                                    <div className="flex flex-col sm:flex-row sm:space-x-5">
                                        <div className="text-gray-500 flex items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5 mr-1"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                                ></path>
                                            </svg>
                                            <span className="font-medium">
                                                {study.school}
                                            </span>
                                        </div>
                                        <div className="text-gray-500 flex items-center mt-2 sm:mt-0">
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
                                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                ></path>
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                ></path>
                                            </svg>
                                            <span className="font-medium">
                                                {study.city}
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
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                            ></path>
                                        </svg>
                                        <span className="font-medium">
                                            {study.time}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="text-gray-600">
                                {study.infomation.map((info, index) => (
                                    <span
                                        key={index}
                                        className="mt-2 flex gap-4"
                                    >
                                        • {info}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Education;
