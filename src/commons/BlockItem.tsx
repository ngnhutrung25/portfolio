import LinkButton from "./LinkButton";
import BagIcon from "../icons/BagIcon";
import CalendarIcon from "../icons/CalendarIcon";
import FolderIcon from "../icons/FolderIcon";
import UserIcon from "../icons/UserIcon";
import SchoolIcon from "../icons/SchoolIcon";
import LocationIcon from "../icons/LocationIcon";

type BlockItemProps = {
  title: string;
  logo: string;
  tag?: string;
  content: string[];
  meta?: {
    title: string;
    image?: string;
    link?: string;
  }[];
  subTitle: {
    type: keyof typeof subTitleType;
    content: string;
  }[];
  bottomBorder: boolean;
};

const subTitleType = {
  company: <BagIcon />,
  time: <CalendarIcon />,
  project: <FolderIcon />,
  role: <UserIcon />,
  school: <SchoolIcon />,
  location: <LocationIcon />,
};

const BlockItem = ({
  title,
  logo,
  tag,
  content,
  meta,
  subTitle,
  bottomBorder,
}: BlockItemProps) => {
  return (
    <div className="my-5 flex gap-4">
      {/* logo */}
      <div className="flex-center border border-gray-200 bg-white h-14 w-14 overflow-hidden p-2 rounded-xl">
        <img
          className="object-contain w-full h-full"
          src={"./img/" + logo}
          alt=""
        />
      </div>

      <div className="flex flex-1 flex-col gap-5">
        {/* header */}
        <div className="flex flex-col gap-2">
          <div className="flex-between flex-wrap gap-2">
            <div className="font-medium text-lg">{title}</div>

            {tag && (
              <div>
                <span className="bg-teal-50 text-teal-700 border border-teal-300 text-sm font-medium px-3 py-1 rounded-full">
                  {tag}
                </span>
              </div>
            )}
          </div>

          <div className="flex-between flex-wrap gap-2">
            {subTitle.map((i, idx) => (
              <div key={idx} className="text-gray-600 flex items-start">
                <div className="h-[24px] flex-center">
                  {subTitleType[i.type]}
                </div>
                <span className="font-medium">{i.content}</span>
              </div>
            ))}
          </div>
        </div>

        {/* content */}
        <div className="text-gray-600">
          {content.map((i, idx) => (
            <div key={idx} className={idx ? "mt-2" : undefined}>
              <span className="font-medium mr-1">•</span>
              <span>{i}</span>
            </div>
          ))}
        </div>

        {/* extra */}
        {meta && meta.length > 0 && (
          <div className="flex w-full flex-wrap">
            {meta.map((i, idx) => (
              <LinkButton
                key={idx}
                title={i.title}
                link={i.link}
                image={i.image}
              />
            ))}
          </div>
        )}

        {bottomBorder && <div className="border-b border-gray-200" />}
      </div>
    </div>
  );
};

export default BlockItem;
