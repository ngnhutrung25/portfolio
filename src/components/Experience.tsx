const Experience = () => {
  const experience = [
    {
      logo: "estuary_logo.png",
      position: "Frontend Developer",
      company: "Estuary JSC",
      city: "Ho Chi Minh City",
      type: "Full-time",
      time: "November 2023 - Present",
      information: [
        {
          title: "",
          content:
            "Acquired proficiency in Ant Design and React Query, essential technologies utilized by the company, through comprehensive reading of guides and documents.",
        },
        {
          title: "",
          content:
            "Gained insights into the company's operations, ensuring a solid understanding of the workflow, and consistently reported progress on a daily and weekly basis.",
        },
        {
          title: "",
          content:
            "Got better at working with the team, communicating, and adapting to new things.",
        },
      ],
      image: [] as { title: string; image: string }[],
    },
  ];

  return (
    <div className="block">
      <h2 className="title">Experience</h2>
      <div className="content">
        {experience.map((work, index) => (
          <div key={index} className="mb-5 flex gap-4">
            <div className="flex justify-center items-center border border-gray-200 bg-white h-14 w-14 overflow-hidden p-2 rounded-xl">
              <img
                className="object-contain w-full h-full"
                src={"./img/" + work.logo}
                alt=""
              />
            </div>

            <div className="flex-1 space-y-5">
              <div className="justify-between flex flex-col sm:flex-row">
                <div className="space-y-2">
                  <div className="font-medium text-lg">{work.position}</div>

                  <div className="flex space-x-5">
                    <div className="text-gray-500 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        ></path>
                      </svg>
                      <span className="font-medium">{work.company}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col-reverse sm:flex-col sm:text-right">
                  <div className="mt-3 sm:mt-1">
                    <span className="bg-teal-100 text-teal-700 border border-teal-300 text-sm font-medium px-3 py-1 rounded-full">
                      {work.type}
                    </span>
                  </div>
                  <div className="text-gray-500 flex items-center mt-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      ></path>
                    </svg>
                    <span className="font-medium">{work.time}</span>
                  </div>
                </div>
              </div>
              <div className="text-gray-600">
                {work.information.map((info, index) => (
                  <div key={index} className="mt-2">
                    <span className="font-medium mr-1">
                      • {info.title ? info.title + ":" : ""}
                    </span>
                    <span>{info.content}</span>
                  </div>
                ))}
              </div>

              {index !== experience.length - 1 && (
                <div className="border-b pt-2 border-gray-200"></div>
              )}

              <div className="flex w-full relative flex-wrap">
                {work.image.length > 0 &&
                  work.image.map((pic, index) => (
                    <a
                      href={"img/" + pic.image}
                      key={index}
                      target="_blank"
                      className="inline-flex items-center m-1 space-x-3 px-4 py-2 rounded-xl group border text-base font-medium transition duration-200 border-teal-600/80 bg-white/50 text-teal-500 hover:text-white hover:bg-teal-600/80"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                        ></path>
                      </svg>
                      <span>{pic.title}</span>
                    </a>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
