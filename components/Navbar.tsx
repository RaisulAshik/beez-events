import Image from "next/image";
import logoImage from "../assets/logo.jpeg";
const Navbar = () => {
  return (
    <div className="bg-[#fcf3ea] h-28 drop-shadow-md">
      <nav className="w-full h-full mx-auto border border-black max-w-7xl">
        <div className="flex flex-row h-full">
          <div className="flex flex-row justify-around w-9/12 h-full border border-black">
            <div>Home</div>
            <div>AboutUs</div>
            <div>Connect</div>
            <div>Services</div>
            <div>Gallary</div>
            <div>Blogs</div>
          </div>
          <div className="w-3/12 h-full border border-black ">
            <Image
              src={logoImage}
              alt="logo"
              width="100%"
              height="100%"
              className="items-center"
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
