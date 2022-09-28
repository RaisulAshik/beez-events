import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import logoImage from "../assets/logo.jpeg";
const Navbar = () => {
  const router = useRouter();
  return (
    <div className="bg-[#fcf3ea] h-28 drop-shadow-md">
      <nav className="w-full h-full mx-auto border border-black max-w-7xl">
        <div className="flex flex-row h-full">
          <div className="flex flex-row items-center justify-around w-9/12 h-full px-4 border border-black">
            <Link href="/">
              <p
                className={
                  router.asPath === "/"
                    ? "block text-lg font-bold transition duration-150 border-b-8  cursor-pointer md:text-xl font-overlock border-[#7c552e] "
                    : "block text-lg font-bold transition duration-150 border-b-8 border-transparent cursor-pointer md:text-xl font-overlock hover:border-[#7c552e] "
                }
              >
                Home
              </p>
            </Link>
            <Link href="/about-us">
              <p
                className={
                  router.asPath === "/about-us"
                    ? "block text-lg font-bold transition duration-150 border-b-8  cursor-pointer md:text-xl font-overlock border-[#7c552e] "
                    : "block text-lg font-bold transition duration-150 border-b-8 border-transparent cursor-pointer md:text-xl font-overlock hover:border-[#7c552e] "
                }
              >
                AboutUs
              </p>
            </Link>

            <Link href="/services">
              <p
                className={
                  router.asPath === "/services"
                    ? "block text-lg font-bold transition duration-150 border-b-8  cursor-pointer md:text-xl font-overlock border-[#7c552e] "
                    : "block text-lg font-bold transition duration-150 border-b-8 border-transparent cursor-pointer md:text-xl font-overlock hover:border-[#7c552e] "
                }
              >
                Services
              </p>
            </Link>
            <Link href="/gallery">
              <p
                className={
                  router.asPath === "/gallery"
                    ? "block text-lg font-bold transition duration-150 border-b-8  cursor-pointer md:text-xl font-overlock border-[#7c552e] "
                    : "block text-lg font-bold transition duration-150 border-b-8 border-transparent cursor-pointer md:text-xl font-overlock hover:border-[#7c552e] "
                }
              >
                Gallery
              </p>
            </Link>
            <Link href="/connect">
              <p
                className={
                  router.asPath === "/connect"
                    ? "block text-lg font-bold transition duration-150 border-b-8  cursor-pointer md:text-xl font-overlock border-[#7c552e] "
                    : "block text-lg font-bold transition duration-150 border-b-8 border-transparent cursor-pointer md:text-xl font-overlock hover:border-[#7c552e] "
                }
              >
                Connect
              </p>
            </Link>
            <Link href="/blogs">
              <p
                className={
                  router.asPath === "/blogs"
                    ? "block text-lg font-bold transition duration-150 border-b-8  cursor-pointer md:text-xl font-overlock border-[#7c552e] "
                    : "block text-lg font-bold transition duration-150 border-b-8 border-transparent cursor-pointer md:text-xl font-overlock hover:border-[#7c552e] "
                }
              >
                Blogs
              </p>
            </Link>
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
