import FacebookIcon from "../icons/FacebookIcon";
import GithubIcon from "../icons/GithubIcon";
import { LinkedInIcon } from "../icons/LinkedInIcon";

const Information = () => {
  const information = {
    location: "Ho Chi Minh City",
    phone: "0393976845",
    email: "ngnhutrung25@gmail.com",
    facebook: "https://www.facebook.com/ng.nhutrung/",
    github: "https://github.com/michino25/",
    linkedin: "https://www.linkedin.com/in/ngnhutrung/",
  };
  return (
    <div className="block">
      <h2 className="title">Information</h2>
      <div className="content">
        <InfoRow title="Location" content={information.location} />
        <InfoRow title="Phone" content={information.phone} />
        <InfoRow title="Email" content={information.email} />

        <div className="flex justify-evenly items-center pt-3 pb-2 text-blue-600/90">
          <a
            className="hover:text-blue-600"
            target="_blank"
            href={information.facebook}
            aria-label="facebook"
          >
            <FacebookIcon />
          </a>

          <a
            className="hover:text-gray-600"
            target="_blank"
            href={information.github}
            aria-label="github"
          >
            <GithubIcon />
          </a>

          <a
            className="hover:text-sky-700"
            target="_blank"
            href={information.linkedin}
            aria-label="linkedin"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Information;

const InfoRow = ({ title, content }: { title: string; content: string }) => {
  return (
    <div className="flex justify-between">
      <div className="text-gray-600">{title}</div>
      <div className="font-medium text-right text-gray-600">{content}</div>
    </div>
  );
};
