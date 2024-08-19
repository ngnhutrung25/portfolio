const AboutMe = () => {
  const aboutMe = [
    "I'm a recent Software Technology graduate with a strong passion for turning ideas into impactful applications. My journey has equipped me with solid expertise in both front-end and back-end development, with hands-on experience in React, .NET, Node.js, and more. I've led projects like the UEH Internship platform, improving processes for over 10,000 students and enhancing user experiences through smart design and efficient code.",
    "In every project, I bring leadership, problem-solving, and a drive for excellence. I'm now seeking opportunities where I can apply my skills, contribute to innovative projects, and keep pushing the boundaries of technology. Let's connect and create something amazing together!",
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
