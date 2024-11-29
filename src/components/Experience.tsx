import BlockItem from "../commons/BlockItem";

const experience = [
  {
    logo: "acb-logo.png",
    position: "Frontend Developer",
    company: "Asia Commercial Joint Stock Bank",
    city: "Ho Chi Minh City",
    type: "Full-time",
    time: "September 2024 - Present",
    information: [
      "Contributed to the development of mobile banking applications for ACB using React Native, focusing on features that serve users and meet banking operations requirements.",
      "Gained a strong understanding of banking operations, ensuring compliance with security standards and industry regulations.",
    ],
    meta: [],
  },
  {
    logo: "estuary-logo.png",
    position: "Frontend Developer",
    company: "Estuary JSC",
    city: "Ho Chi Minh City",
    type: "Full-time",
    time: "September 2023 - August 2024",
    information: [
      "Acquired proficiency in Ant Design and React Query, essential technologies utilized by the company, through comprehensive reading of guides and documents.",
      "Gained insights into the company's operations, ensuring a solid understanding of the workflow, and consistently reported progress on a daily and weekly basis.",
      "Got better at working with the team, communicating, and adapting to new things.",
    ],
    meta: [],
  },
  {
    logo: "ueh-logo.png",
    position: "Software Developer",
    company: "UEH University",
    city: "Ho Chi Minh City",
    type: "Freelance",
    time: "June 2023 - November 2024",
    information: [
      "Provided maintenance and support for the UEH Internship Management System and UEH KTX System, ensuring seamless functionality and performance.",
    ],
    meta: [],
  },
  {
    logo: "ueh-logo.png",
    position: "Frontend Developer",
    company: "UEH University",
    city: "Ho Chi Minh City",
    type: "Part-time",
    time: "December 2022 - May 2023",
    information: [
      "Developed the UEH Internship to manage internship processes and graduation theses for UEH students.",
      "Collaborated with faculty and teammates to gather requirements and ensure the system supported over 10,000 students annually.",
      "Gained practical experience in handling large user databases and improved teamwork and communication skills.",
    ],
    meta: [
      { title: "About us", link: "https://internship.ueh.edu.vn/about-us" },
    ],
  },
];

const Experience = () => {
  return (
    <div className="block">
      <h2 className="title">Experience</h2>
      <div className="content">
        {experience.map((work, index) => (
          <BlockItem
            title={work.position}
            logo={work.logo}
            tag={work.type}
            content={work.information}
            subTitle={[
              { type: "company", content: work.company },
              { type: "time", content: work.time },
            ]}
            meta={work.meta}
            bottomBorder={index !== experience.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
