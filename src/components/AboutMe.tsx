const AboutMe = () => {
    const aboutMe =
        "Skilled at crafting responsive, high-performance web applications from designs. Adept problem-solver with a passion for seamless user interfaces. I committed to continuous learning and eager to contribute to innovative, collaborative teams.";

    return (
        <div className="p-7 pb-0 shadow-lg rounded-xl overflow-hidden bg-white">
            <h2 className="font-semibold text-xl pb-6">About me</h2>
            <p className="text-gray-600 mb-5">{aboutMe}</p>
        </div>
    );
};

export default AboutMe;
