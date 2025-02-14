const aboutMe = [
  "I am Nguyen Nhu Trung, a Software Engineering graduate from the University of Economics Ho Chi Minh City (UEH). As a Frontend Developer, I am driven by a passion for creating impactful, user-centric applications with a focus on innovation. My expertise spans across both frontend and backend development, and I specialize in building scalable and high-performance applications using technologies such as React, React Native, Node.js, and .NET.",
  "I am currently working at Asia Commercial Bank (ACB), where I contribute to the development and optimization of the bank's mobile applications and internal data management systems. This experience has allowed me to deepen my knowledge of the finance and banking industry, especially around ensuring compliance with industry regulations and security standards.",
  "I excel in cross-functional collaboration, leading projects, and delivering high-quality solutions that improve business efficiency and user experience. I am passionate about continuous learning and thrive in environments that challenge me to grow while building innovative products that solve real-world problems.",
  "Feel free to connect with me to discuss potential opportunities, projects, or to simply share ideas!",
];

const AboutMe = () => {
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
