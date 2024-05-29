import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { gerb, instagram, logo, telegram } from "../assets";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => pathname === path ? 'text-blue-700 dark:text-blue-500' : 'text-gray-900 dark:text-white';

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg border-b border-indigo-400">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to={"/"} className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} alt="gerb" className=" object-contain w-[48px] h-[48px]" />
        </Link>
       
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button onClick={handleMenuToggle} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded={isMenuOpen ? "true" : "false"}>
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>

        <div className={`items-center justify-between ${isMenuOpen ? "block" : "hidden"} w-full md:flex md:w-auto md:order-1`} id="navbar-cta">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link to={"/"} className={`block py-2 px-3 md:p-0 rounded md:bg-transparent ${isActive('/')}`} aria-current="page">
                Home
              </Link>
            </li>
            <li>
              <a href={"https://emaktab.uz/"} target="_blank" className="cursor-pointer block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Kundalik.com
              </a>
            </li>
            <li>
              <Link to={"/galeriya"} className={`block py-2 px-3 md:p-0 rounded md:bg-transparent ${isActive('/galeriya')}`}>
                Galereya
              </Link>
            </li>
            <li>
              <Link to={"/jadvalar"} className={`block py-2 px-3 md:p-0 rounded md:bg-transparent ${isActive('/jadvalar')}`}>
                Dars Jadvali
              </Link>
            </li>
            <li>
              <Link to={"/yangiliklar"} className={`block py-2 px-3 md:p-0 rounded md:bg-transparent ${isActive('/yangiliklar')}`}>
                Yangiliklar
              </Link>
            </li>
            <li>
              <Link to={"/maktab-haqida"} className={`block py-2 px-3 md:p-0 rounded md:bg-transparent ${isActive('/maktab-haqida')}`}>
                Maktab haqida
              </Link>
            </li>
            <li>
              <Link to={"/oqtuvchilar"} className={`block py-2 px-3 md:p-0 rounded md:bg-transparent ${isActive('/oqtuvchilar')}`}>
                Ustozlar
              </Link>
            </li>
            <li>
            <a target="_blank" href="https://t.me/ahmadillourmanov" className={`block py-2 px-3 md:p-0 rounded md:bg-transparent ${isActive('/oqtuvchilar')}`}>
              <img src={telegram} className=" h-6 w-6 " alt=" logo"/>
            </a>
          </li>
          <li>
          <a target="_blank" href="https://www.instagram.com/26_mak_tab_?igsh=MXBjeXlhYnAzdDRtcw==" className={`block py-2 px-3 md:p-0 rounded md:bg-transparent ${isActive('/oqtuvchilar')}`}>
            <img src={instagram} className=" h-6 w-6 " alt=" logo"/>
          </a>
        </li>
          </ul>
          
        </div>
     
      </div>
    </nav>
  );
};

export default Navbar;
