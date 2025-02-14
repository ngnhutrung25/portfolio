import BlockItem from "../commons/BlockItem";

const Education = () => {
  const education = [
    {
      logo: "ueh-logo.webp",
      school: "UEH University",
      major: "Software Technology",
      city: "Ho Chi Minh City",
      time: "September 2020 - March 2024",
      information: [
        "Graduated - GPA: 8.65/10",
        "Received scholarships in term 4 and term 5, placing in the top 5% of students",
        "Relevant Coursework: Algorithms; Database; System Analysis and Design; Object-Oriented Programming; Theme Design; Web Application Development",
      ],
    },
  ];
  return (
    <div className="block">
      <h2 className="title">Education</h2>

      <div className="content">
        {education.map((edu, index) => (
          <BlockItem
            key={index}
            title={edu.major}
            logo={edu.logo}
            content={edu.information}
            subTitle={[
              { type: "school", content: edu.school },
              { type: "location", content: edu.city },
              { type: "time", content: edu.time },
            ]}
            bottomBorder={index !== education.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default Education;
