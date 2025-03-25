import { BiLaptop, BiMusic,  } from "react-icons/bi";
import { BsHeadphones, BsTablet, BsWatch } from "react-icons/bs";
import { MdSmartphone } from "react-icons/md";

export const getProductIcon = (name: string | undefined) => {
  if (name?.toLowerCase().includes("iphone") || name?.toLowerCase().includes("pixel")) {
    return <MdSmartphone className="h-7 w-7" />;
  } else if (name?.toLowerCase().includes("macbook")) {
    return <BiLaptop className="h-7 w-7" />;
  } else if (name?.toLowerCase().includes("watch")) {
    return <BsWatch className="h-7 w-7" />;
  } else if (name?.toLowerCase().includes("beats")) {
    return <BsHeadphones className="h-7 w-7" />;
  } else if (name?.toLowerCase().includes("ipad")) {
    return <BsTablet className="h-7 w-7" />;
  } else if (name?.toLowerCase().includes("airpods")) {
    return <BiMusic className="h-7 w-7" />;
  }
  return <MdSmartphone  className="h-7 w-7" />;
};
