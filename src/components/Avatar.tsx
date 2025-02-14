import DownloadIcon from "../icons/DownloadIcon";

const Avatar = () => {
  const avatar = {
    avatarImg: "avatar.webp",
    coverImg: "cover.webp",
    status: "Open to Work",
    name: "Nguyễn Như Trung",
    position: "Frontend Developer",
    pdfCV: "Nguyen_Nhu_Trung_Frontend_Developer_CV.pdf",
  };
  return (
    <div className="block">
      <div className="h-24 w-full title"></div>

      <div className="relative">
        <div className="absolute z-10 -top-[56%] left-8 translate-y-[50%] flex-center border-4 border-white/40 h-36 w-36 overflow-hidden rounded-2xl">
          <img
            className="object-contain w-full h-full"
            src={"./img/" + avatar.avatarImg}
            alt="Avatar"
          />
        </div>
        <div className="content !pt-24">
          <div className="flex flex-col mb-7">
            <span className="text-2xl font-semibold text-teal-900">
              {avatar.name}
            </span>
            <span className="text-base text-gray-600 mt-1">
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
      </div>
      <div className="hidden">
        <img src={"./img/avt-trung.webp"} />
        <img src={"./img/avt-phuong.webp"} />
      </div>
    </div>
  );
};

export default Avatar;
