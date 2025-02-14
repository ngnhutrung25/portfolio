const skills = [
  {
    title: "Frontend Development",
    content: [
      "JavaScript",
      "TypeScript",
      "ReactJS",
      "React Native",
      "Next.js",
      "Redux",
      "Zustand",
    ],
  },
  {
    title: "UI/UX Tools",
    content: ["Tailwind", "Ant Design", "Bootstrap"],
  },
  {
    title: "Design",
    content: ["Figma", "Canva"],
  },
  {
    title: "Backend Development",
    content: ["Node.js", "Express", "ASP.NET", "RESTful API"],
  },
  {
    title: "Databases",
    content: ["SQL Server", "MySQL", "MongoDB"],
  },
  {
    title: "Version Control",
    content: ["Git", "GitHub", "GitLab"],
  },
  {
    title: "Foreign Language",
    content: ["Intermediate", "TOEIC 625"],
  },
];

const Skills = () => {
  return (
    <div className="block">
      <h2 className="title">Skills</h2>
      <div className="content">
        {skills.map((item, index) => (
          <div key={index} className="flex flex-col py-2 -m-1">
            <div className="pb-4">
              <span className="bg-teal-50 text-teal-800 font-medium px-3 py-1.5 rounded-xl">
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
