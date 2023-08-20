const Layanan = () => {
  const layananData = [
    {
      id: 1,
      title: "COURSE",
      url: "",
      icon: "img/course-icon.png",
    },
    {
      id: 2,
      title: "PEMBUATAN WEB",
      url: "",
      icon: "img/services-icon.png",
    },
    {
      id: 3,
      title: "FORUM",
      url: "",
      icon: "img/forum.png",
    },
  ];
  return (
    <div className=" h-[500px]lg:h-[390px]  bg-primary" id="layanan">
      <div className="container">
        <h1 className="text-center text-secondary font-bold  uppercase  pt-[24px]  lg:ml-44 text-[32px] ">
          LAYANAN
        </h1>
        <div className="grid grid-cols-1  md:grid-cols-3 gap-4 md:ml-[120px] md:mt-[32px] ">
          {layananData.map((item) => (
            <div key={item.id} className=" p-4  mx-auto ">
              <div className="bg-secondary w-[131px] h-[128px] rounded-lg relative">
                <img
                  src={item.icon}
                  alt=""
                  className="w-[69px] pt-[16px] md:w-auto mx-auto flex  items-center justify-content-center"
                />
              </div>
              <a
                href={item.url}
                className="text-lg font-bold mt-4 md:mt-8 text-secondary "
              >
                {item.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Layanan;
