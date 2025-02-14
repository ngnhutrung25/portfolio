const Skills = () => {
  const skills = [
    {
      title: "Language, framework and library",
      content: [
        "TypeScript",
        "NodeJS",
        "ReactJS",
        "React Native",
        "Redux",
        "Tailwind",
        "Bootstrap",
        "Ant Design",
        "PHP",
        "ASP.NET MVC",
        "ASP WebAPI",
      ],
    },
    {
      title: "Databases",
      content: ["SQL Server", "MySQL", "MongoDB"],
    },
    {
      title: "Version Control",
      content: ["Git"],
    },
    {
      title: "Design",
      content: ["Figma", "Canva", "Photoshop"],
    },
    {
      title: "Foreign Language",
      content: ["Intermediate", "TOEIC 625"],
    },
  ];
  return (
    <div className="block">
      <h2 className="title">Skills</h2>
      <div className="content">
        {skills.map((item, index) => (
          <div key={index} className="flex flex-col py-2 -m-1">
            <div className="pb-4">
              <span className="bg-blue-50/30 text-blue-800 font-medium px-3 py-1.5 rounded-xl">
                {item.title}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {item.content.map((item, index) => (
                <span
                  key={index}
                  className="text-gray-600 bg-white/70 border border-gray-300/50 hover:bg-gray-100 rounded-xl text-base px-3 py-1"
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
