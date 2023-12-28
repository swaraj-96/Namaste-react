import Logo from "./Logo";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ThemeButton from "./ThemeButton";
import {
  BuildingOfficeIcon,
  PhoneIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/solid";

const Header = () => {
  // Subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="sticky w-full top-0  bg-white  z-40 border-b  shadow-xl md:shadow-sm  md:border-gray-10 border-white md:py-0 py-2 dark:bg-darkBgTheme dark:border-none dark:shadow-2xl">
      <div className="container-max flex justify-between items-center">
        <div className=" items-center flex justify-between">
          <Logo />
          <ThemeButton/>
        </div>

        <ul className="text-zinc-700 md:ml-auto   gap-4 md:gap-4 items-center flex dark:text-[#FAFAFA]">
          <li>
            <Link
              className="p-2 md:px-4 hover:bg-appTheme dark:hover:bg-[#374151] rounded-md flex items-center gap-2"
              to="/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="md:w-4 md:h-4 w-6 h-6 text-gray-700 dark:text-[#FAFAFA]"
              >
                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
              </svg>
              <p className="hidden md:block">Home</p>
            </Link>
          </li>
          <li>
            <Link
              className="p-2 md:px-4 hover:bg-appTheme dark:hover:bg-[#374151] rounded-md flex items-center gap-2"
              to="/about"
            >
              <BuildingOfficeIcon className="md:w-4 md:h-4 w-6 h-6 text-gray-700 dark:text-[#FAFAFA]" />{" "}
              <p className="hidden md:block">About</p>
            </Link>
          </li>
          <li>
            <Link
              className="p-2 md:px-4 hover:bg-appTheme dark:hover:bg-[#374151] rounded-md flex items-center gap-2"
              to="/contact"
            >
              <PhoneIcon className="md:w-4 md:h-4 w-6 h-6 text-gray-700 dark:text-[#FAFAFA]" />{" "}
              <p className="hidden md:block">Contact</p>
            </Link>
          </li>
          <li>
            <Link
              className="p-2 relative md:px-4 hover:bg-appTheme dark:hover:bg-[#374151] rounded-md flex items-center gap-2"
              to="/cart"
            >
              <ShoppingBagIcon className="md:w-4 md:h-4 w-6 h-6 text-gray-700 dark:text-[#FAFAFA]" />{" "}
              <p className="hidden md:block">Cart</p>
              {
                <p className="absolute -top-1 -right-1 bg-btnTheme dark:bg-[#3758F9] text-white flex justify-center items-center w-5 h-5 text-xs rounded-full">
                  {cartItems.length}
                </p>
              }
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
