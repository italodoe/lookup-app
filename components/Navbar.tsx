import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import LogoName from "./LogoName";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <nav className="flex flex-between fix4ed z-50 w-full bg-transparent px-6 py-3 lg:px-10 max-sm:py-6">
      <div className="w-full flex justify-center sm:hidden items-center gap-1 max-lg:justify-center ">
        <LogoName
          classes="text-3xl text-gray-50 "
          href={DEFAULT_LOGIN_REDIRECT}
        />
      </div>

      <div className="flex flex-between gap-5 sm:hidden">
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
