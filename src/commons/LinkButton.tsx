import LinkIcon from "../icons/LinkIcon";

const LinkButton = ({
  title,
  link = "#",
  image,
}: {
  title: string;
  link?: string;
  image?: string;
}) => {
  return (
    <a
      href={image ? "img/" + image : link}
      target="_blank"
      className="inline-flex items-center m-1 space-x-3 px-4 py-2 rounded-xl group border text-base font-medium transition duration-200 border-teal-600/80 bg-white/50 text-teal-500 hover:text-white hover:bg-teal-600/80"
    >
      <LinkIcon />
      <span>{title}</span>
    </a>
  );
};

export default LinkButton;
