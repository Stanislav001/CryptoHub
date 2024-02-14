import { navData } from "../data";
import { CgClose } from "react-icons/cg";

const NavMobile = ({ setIsMobile }) => {
  return (
    <nav className="lg:hidden bg-violet h-full top-0 bottom-0 w-80 flex justify-center items-center">
      <div
        onClick={() => setIsMobile(false)}
        className="absolute top-2 left-2 cursor-pointer"
      >
        <CgClose className="text-3xl" />
      </div>

      <ul className="text-xl flex flex-col gap-y-8">
        {navData?.map((item, index) => (
          <li key={index} className="">
            <a href={item?.href} className="text-white text-2xl">
              {item?.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMobile;
