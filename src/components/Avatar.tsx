const Avatar = () => {
    const avatar = {
        avatarImg: "avatar.jpg",
        coverImg: "cover.jpg",
        status: "Open to Work",
        name: "Nguyễn Như Trung",
        position: "Frontend Developer",
        pdfCV: "Nguyen Nhu Trung cv.pdf",
    };
    return (
        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
            <div
                className={`h-32 bg-cover bg-center bg-no-repeat bg-[url('/img/${avatar.coverImg}')]`}
            ></div>

            <div className="relative pt-14 p-7">
                <span className="absolute top-5 right-8 bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                    {avatar.status}
                </span>
                <div className="absolute -top-[50%] translate-y-[50%] w-28 h-28 rounded-2xl overflow-hidden border-4 border-neutral-200">
                    <img
                        className="scale-[155%]"
                        src={"/img/" + avatar.avatarImg}
                        alt="Avatar"
                    />
                </div>
                <div className="text-2xl font-semibold mb-1 mt-4">
                    {avatar.name}
                </div>
                <div className="text-base text-gray-400 mb-7">
                    {avatar.position}
                </div>

                <div className="flex items-center">
                    <a
                        href={"./pdf/" + avatar.pdfCV}
                        download
                        className="flex items-center justify-center w-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-0 font-medium rounded-xl px-6 py-3"
                    >
                        <span className="text-lg">Download CV</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 ml-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.8"
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                            ></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Avatar;
