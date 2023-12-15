import Link from "next/link";
import Image from "next/image";
import { NAVBAR_LINKS } from "@/constant/Index";


function Navbar() {
  return (
    <nav className="flex justify-between items-center w-full px-4 lg:px-6 py-5 bg-white shadow-lg">
      {/* Logo and text navbar */}
      <Link href="/" className="flex items-center space-x-2 ml-0">
        <Image src="/logo.svg" alt="Logo" width={90} height={90} />
        <span className="text-2xl font-light text-gray-400">|</span>
        <span className="text-xl font-semibold text-black">Jagoan Bunda</span>
      </Link>

      {/* Menu of the website */}
      <ul className="hidden lg:flex items-center space-x-6 ml-auto mr-12">
        {NAVBAR_LINKS.map((link) => (
          <li key={link.key}>
            <Link
              href={link.href}
              className="text-gray-500 hover:font-bold hover:text-amber-300 transition-all"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Menu Display Responsive */}
      <div className="lg:hidden">
        <Image
          src="/menu.svg"
          alt="Menu"
          width={32}
          height={32}
          className="block cursor-pointer"
        />
      </div>
    </nav>
  );
}

export default Navbar;
