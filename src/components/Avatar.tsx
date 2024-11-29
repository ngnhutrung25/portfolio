import DownloadIcon from "../icons/DownloadIcon";

const Avatar = () => {
  const avatar = {
    avatarImg: "avatar.jpg",
    coverImg: "cover.jpg",
    status: "Open to Work",
    name: "Nguyễn Như Trung",
    position: "Frontend Developer",
    pdfCV: "[React Developer] Nguyen Nhu Trung.pdf",
  };
  return (
    <div className="block">
      <div className="h-24 w-full title"></div>

      <div className="relative content !pt-14">
        <span className="absolute top-6 right-8 bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
          {avatar.status}
        </span>

        <div className="absolute -top-[56%] translate-y-[50%] flex-center border-4 border-white/40 h-28 w-28 overflow-hidden rounded-2xl">
          <img
            className="object-contain w-full h-full"
            src={"./img/" + avatar.avatarImg}
            alt="Avatar"
          />
        </div>

        <div className="flex flex-col mb-7">
          <span className="text-2xl font-semibold text-teal-900">
            {avatar.name}
          </span>
          <span className="text-base text-gray-400 mt-1">
            {avatar.position}
          </span>
        </div>

        <div className="flex items-center">
          <a
            href={"./pdf/" + avatar.pdfCV}
            download
            className="flex items-center justify-center w-full text-white bg-teal-600/80 hover:bg-teal-700/80 focus:outline-none focus:ring-0 font-medium rounded-xl px-6 py-2"
          >
            <span className="text-lg">Download CV</span>
            <DownloadIcon />
          </a>
        </div>
      </div>
      <div className="hidden">
        <img src={"./img/avt-trung.jpg"} />
        <img src={"./img/avt-phuong.jpg"} />
      </div>
    </div>
  );
};

export default Avatar;
