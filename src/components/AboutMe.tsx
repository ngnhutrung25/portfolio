const AboutMe = () => {
  const aboutMe = [
    "I am Nguyen Nhu Trung, a Software Engineering graduate from the University of Economics Ho Chi Minh City (UEH), with a passion for technology and innovation. With a strong foundation in both frontend and backend development, I specialize in building dynamic web and mobile applications that are user-centered and scalable. My expertise includes working with technologies such as .NET, React.js, Node.js, and React Native, allowing me to create end-to-end digital solutions that solve real-world problems.",
    "I thrive in collaborative environments and often take on leadership roles, bringing strong communication, problem-solving, and project management skills to the table. Whether working in a team or leading projects, I am always focused on delivering high-quality code and seamless user experiences.",
    "Currently, I am seeking full-time opportunities to apply my skills and contribute to impactful projects while continuing to grow in the tech industry. I am especially interested in roles where I can use my knowledge to build innovative products, optimize user experiences, and drive digital transformation.",
    "Feel free to connect with me to discuss potential opportunities, projects, or to simply share ideas!",
  ];

  return (
    <div className="block">
      <h2 className="title">About me</h2>
      <div className="content text-gray-700">
        {aboutMe.map((i, idx) => (
          <p key={idx} className="">
            {i}
          </p>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;
