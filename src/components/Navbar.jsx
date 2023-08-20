import { Link } from "react-scroll";
import Bars from "../Icons/Bars";

const Navbar = () => {
  window.onscroll = function () {
    const header = document.querySelector("header");
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
      header.classList.add("navbar-fixed");
    } else {
      header.classList.remove("navbar-fixed");
    }
  };

  const navMenu = document.querySelector("#nav-menu");

  const handleClick = () => {
    navMenu.classList.toggle("hidden");
  };

  return (
    <header className="bg-primary text-secondary absolute top-0 left-0 w-full flex items-center z-10">
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <a
              href="#beranda"
              className="font-bold  text-secondary text-lg  block py-6 lg:ml-[120px]"
            >
              HJ Codin
            </a>
          </div>
          <div className="flex items center justify-center px-4">
            <button
              id="hamburger"
              onClick={() => handleClick()}
              className="lg:hidden"
            >
              <Bars />
            </button>

            <nav
              id="nav-menu"
              className="hidden absolute  py-5 lg:static lg:block lg:bg-transparent lg:text-white lg:shadow-none lg:rounded-none lg:max-w-full bg-secondary text-primary shadow-lg rounded-lg   max-w-[250px] w-full  right-4 top-full lg:cursor-pointer"
            >
              <ul className="block lg:flex lg:shadow-none lg:rounded-none">
                <li className="group">
                  <Link
                    to="home"
                    className="text-base text-dark py-2 mx-8  group-hover:underline"
                  >
                    Beranda
                  </Link>
                </li>
                <li className="group">
                  <Link
                    to="tentang"
                    className="text-base text-dark py-2 mx-8  group-hover:underline"
                  >
                    Tentang
                  </Link>
                </li>
                <li className="group">
                  <Link
                    to="layanan"
                    className="text-base text-dark py-2 mx-8  group-hover:underline"
                  >
                    Layanan
                  </Link>
                </li>
                <li className="group">
                  <Link
                    to="kontak"
                    className="text-base text-dark py-2 mx-8  group-hover:underline"
                  >
                    Kontak
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
