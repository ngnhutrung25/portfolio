const Skills = () => {
    const skills = [
        {
            title: "Technologies",
            content: [
                "TypeScript",
                "ReactJS",
                "Redux",
                "NodeJS",
                "Tailwind",
                "Bootstrap",
                "ASP.NET MVC",
                "ASP WebAPI",
                "Blazor",
                "PHP",
            ],
        },
        {
            title: "Databases",
            content: ["SQL Server", "MySQL", "MongoDB"],
        },
        {
            title: "Version Control",
            content: ["Git (GitHub)"],
        },
        {
            title: "Design",
            content: ["Figma", "Canva", "Photoshop"],
        },
        {
            title: "Foreign Language",
            content: ["Intermediate", "TOEIC: 625"],
        },
    ];
    return (
        <div className="block">
            <h2 className="title">Skills</h2>
            <div className="content">
                {skills.map((item, index) => (
                    <div key={index} className="flex flex-col py-2 -m-1">
                        <div className="pb-4">
                            <span className="bg-teal-100 text-teal-800 text-lg font-medium px-3 py-1.5 rounded-xl">
                                {item.title}
                            </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {item.content.map((item, index) => (
                                <span
                                    key={index}
                                    className="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 font-medium rounded-full text-base px-5 py-1.5"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
