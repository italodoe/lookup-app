import { DEFAULT_LOGIN_PAGE } from "@/routes";
import { Poppins } from "next/font/google";
import LogoName from "../LogoName";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
  label: string;
}

const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <LogoName classes="text-5xl text-black" href={DEFAULT_LOGIN_PAGE} />
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};

export default Header;
