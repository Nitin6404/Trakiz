import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  return (
    <>
      <header className="flex items-center justify-around md:justify-between px-2 md:px-16 py-4 relative z-10">
        <div className="flex items-center space-x-4">
          <Image
            src="/trakiz-logo.png"
            alt="Trakiz Logo"
            width={200}
            height={200}
            className="border-none"
          />
        </div>
        <div>
          <nav className="hidden md:flex space-x-10 font-medium text-[#575757] font-manrope text-base">
            <a href="#" className="hover:text-[#FB9300] hover:font-bold">
              Home
            </a>
            <a href="#" className="hover:text-[#FB9300] hover:font-bold">
              Contact
            </a>
            <a href="#" className="hover:text-[#FB9300] hover:font-bold">
              About Us
            </a>
          </nav>
        </div>
        <div className="hidden md:flex md:items-center space-x-4 font-manrope font-medium">
          <Link href="/signin" className="text-white">
            Log In
          </Link>
          <div className="flex bg-[#FB9300] rounded transform hover:scale-90 duration-300 ease-in-out">
            <Link href="/signup">
              <button className="text-white pl-4 py-2">
                GET STARTED FOR FREE
              </button>
            </Link>
            <div className="px-2 py-2 flex justify-center items-center">
              <svg
                width="15"
                height="16"
                viewBox="0 0 15 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.7094 9.01844C15.1009 8.62897 15.1026 7.9958 14.7132 7.60423L8.36636 1.22316C7.97689 0.831584 7.34372 0.82988 6.95215 1.21935C6.56058 1.60882 6.55887 2.24199 6.94834 2.63356L12.5899 8.30562L6.91789 13.9472C6.52631 14.3367 6.52461 14.9699 6.91408 15.3614C7.30355 15.753 7.93671 15.7547 8.32829 15.3652L14.7094 9.01844ZM-0.00269206 9.27172L14.0015 9.30943L14.0068 7.30943L0.00269206 7.27173L-0.00269206 9.27172Z"
                  fill="#FFFCF9"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="block md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e8eaed"
              >
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              </svg>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-black text-white border-none">
              <DropdownMenuItem>
                <a href="#" className="font-bold">
                  Home
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="#" className="font-bold">
                  Contact
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="#" className="font-bold">
                  About Us
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
    </>
  );
};

export default Header;
