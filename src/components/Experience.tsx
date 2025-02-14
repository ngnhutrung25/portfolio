import BlockItem from "../commons/BlockItem";

const experience = [
  {
    logo: "acb-logo.webp",
    position: "Frontend Developer",
    company: "Asia Commercial Joint Stock Bank",
    city: "Ho Chi Minh City",
    type: "Internship",
    time: "September 2024 - Present",
    information: [
      "Optimized ACB ONE mobile app: Enhanced the app's startup speed, improving the user experience and efficiency for thousands of customers.",
      "Improved Back Office Data Management: Integrated a version control system to track data changes and allow data reversion, enhancing operational processes and ensuring data integrity.",
      "Automated Documentation Creation: Contributed to an initiative that automated documentation for ACB's React Native components, reducing manual effort by 30% and ensuring consistency across the codebase.",
    ],
    meta: [],
  },
  {
    logo: "estuary-logo.webp",
    position: "Frontend Developer",
    company: "Estuary JSC",
    city: "Ho Chi Minh City",
    type: "Full-time",
    time: "August 2023 - September 2024",
    information: [
      "Delivered features for HRM and sales tools that improved client satisfaction.",
      "Participated in code reviews to maintain clean, reusable code.",
      "Worked closely with designers and backend developers to integrate interface components.",
    ],
    meta: [],
  },
  {
    logo: "ueh-logo.webp",
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
    logo: "ueh-logo.webp",
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
            key={index}
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
