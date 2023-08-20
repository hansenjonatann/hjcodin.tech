const Header = () => {
  return (
    <div className="bg-primary h-[580px] lg:h-[419px] ">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1 className="font-semibold text-secondary mt-[100px] text-[22px] lg:ml-[120px] lg:mt-[72px] lg:w-[400px]">
              Belajar Web Programming bersama hjcodin.tech
            </h1>
            <h3 className="font-normal text-secondary text-[19px] mt-[40px] lg:ml-[120px] lg:w-[400px]">
              Belajar pemograman web yang terdiri dari HTML , CSS , dan
              Javascript.
            </h3>
          </div>
          <div className="w-full self-center px-4 lg:w-1/2">
            <img
              src="img/animasi.png"
              alt=""
              className="max-w-[200px] mt-10 lg:max-w-full mx-auto lg:mt-[24px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
