const Skills = () => {
    const skills = {
        code: ["JavaScript", "React", "Vue", "SQL", "HTML/CSS", "Java"],
    };
    return (
        <div className="p-7 shadow-lg rounded-xl overflow-hidden bg-white">
            <h2 className="font-semibold text-xl pb-8">Skills</h2>
            <div className="-m-2 flex flex-wrap gap-3">
                {skills.code.map((item, index) => (
                    <span
                        key={index}
                        className="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 font-medium rounded-full text-base px-5 py-1.5"
                    >
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Skills;
