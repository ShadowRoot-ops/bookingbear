import { favicon, logo } from "@/assets/index";
import Image from "next/image";

type LogoProps = {
  variant?: "default" | "icon";
};
const Logo = ({ variant = "default" }: LogoProps) => {
  return (
    <a href="" className="">
      {variant === "default" && (
        <Image src={logo} alt="BookingBear" width={150} height={31} />
      )}
      {variant === "icon" && (
        <Image src={favicon} alt="BookingBear" width={32} height={32} />
      )}
    </a>
  );
};

export default Logo;
