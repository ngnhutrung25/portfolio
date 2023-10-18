import ImageModal from "./ImageModal";

const Experience = () => {
    const experience = [
        {
            logo: "logo_ueh.png",
            position: ".NET Developer Intern",
            company: "IT Department of UEH University",
            city: "Ho Chi Minh City",
            type: "Part-time",
            time: "May 2023 - August 2023",
            information: [
                { title: "Project", content: "UEH Intern" },
                {
                    title: "Project Description",
                    content:
                        "A platform for the management of internship processes and graduation theses.",
                },
                { title: "Team Size", content: "2" },
                {
                    title: "Responsibilities",
                    content:
                        "Collaborated with UEH teachers and teammates to gather project requirements, developed the frameworks and modules of the system, and took primary responsibility for the frontend.",
                },
                {
                    title: "Accomplishments",
                    content:
                        "Acquired practical experience in managing a large student user database, serving approximately 5,000 graduate students annually. Gained proficiency in Microsoft technologies and frameworks, including Blazor. Enhanced teamwork and communication skills.",
                },
                {
                    title: "Technologies",
                    content:
                        "Front-end: Blazor, Tailwind; Back-end: ASP.NET 6.0, Entity Framework",
                },
            ],
            image: [
                { title: "Home page image", image: "demo/homepage.png" },
                { title: "Student page image", image: "demo/student.png" },
            ],
        },
    ];

    return (
        <div className="block">
            <h2 className="title">Experience</h2>
            <div className="content">
                {experience.map((work, index) => (
                    <div key={index} className="mb-5 flex gap-4">
                        <div className="flex justify-center items-center border border-gray-200 bg-white h-14 w-14 overflow-hidden p-2 rounded-xl">
                            <img
                                className="object-contain w-full h-full"
                                src={"./img/" + work.logo}
                                alt=""
                            />
                        </div>

                        <div className="flex-1 space-y-5">
                            <div className="justify-between flex flex-col sm:flex-row">
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
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                ></path>
                                            </svg>
                                            <span className="font-medium">
                                                {work.company}
                                            </span>
                                        </div>

                                        {/* <div className="text-gray-500 flex items-center">
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
                                                {work.city}
                                            </span>
                                        </div> */}
                                    </div>
                                </div>

                                <div className="flex flex-col-reverse sm:flex-col sm:text-right">
                                    <div className="mt-3 sm:mt-1">
                                        <span className="bg-teal-100 text-teal-700 border border-teal-300 text-sm font-medium px-3 py-1 rounded-full">
                                            {work.type}
                                        </span>
                                    </div>
                                    <div className="text-gray-500 flex items-center mt-2">
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
                                            {work.time}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="text-gray-600">
                                {work.information.map((info, index) => (
                                    <div key={index} className="mt-2">
                                        <span className="font-medium mr-1">
                                            • {info.title}:
                                        </span>
                                        <span>{info.content}</span>
                                    </div>
                                ))}
                            </div>

                            {index !== experience.length - 1 && (
                                <div className="border-b pt-2 border-gray-200"></div>
                            )}

                            <div className="flex w-full relative flex-wrap">
                                {work.image.map((pic, index) => (
                                    <div key={index} className="mt-2">
                                        <ImageModal
                                            title={pic.title}
                                            image={pic.image}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
