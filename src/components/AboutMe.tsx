const AboutMe = () => {
  const aboutMe = [
    "I am a final-year Software Engineering student with a strong passion for technology and innovation. My educational journey has provided me with a solid foundation in software development, and I have gained hands-on experience with various web projects, utilizing technologies such as PHP, .NET, ReactJS, React Native, and Node.js. Additionally, I frequently work in a frontend role and possess some design skills.",
    "As an active team member, I often take on leadership roles and demonstrate strong problem-solving abilities. Currently, I am actively seeking internships or entry-level positions to apply my skills, make a significant impact, and continue my learning journey. I look forward to connecting, networking, and exploring new opportunities.",
  ];

  return (
    <div className="block">
      <h2 className="title">About me</h2>
      <div className="content text-gray-700">
        <p className="">{aboutMe[0]}</p>
        <p className="">{aboutMe[1]}</p>
      </div>
    </div>
  );
};

export default AboutMe;
