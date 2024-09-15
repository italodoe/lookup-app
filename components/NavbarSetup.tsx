import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import LogoName from "./LogoName";

const Navbar = () => {
  return (
    <nav className="navbar-setup flex justify-center fix4ed z-50 w-full bg-default-1 px-6 py-10 lg:px-10 max-sm:py-10">
      <div className="w-full flex justify-center items-center gap-1 max-lg:justify-center ">
        <LogoName
          classes="text-3xl text-gray-50 "
          href={DEFAULT_LOGIN_REDIRECT}
        />
      </div>
    </nav>
  );
};

export default Navbar;
