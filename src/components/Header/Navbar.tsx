import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 px-4 py-3 text-white">
      <div className="mx-[60px] px-4 py-2 flex items-center justify-between">
        {/* LOGO + TITLE */}
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center space-x-2">
            <svg
              className="w-8 h-8 text-deep-purple-accent-400"
              viewBox="0 0 24 24"
              stroke-linejoin="round"
              stroke-width="2"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke="currentColor"
              fill="none"
            >
              <rect x="3" y="1" width="7" height="12"></rect>
              <rect x="3" y="17" width="7" height="6"></rect>
              <rect x="14" y="1" width="7" height="6"></rect>
              <rect x="14" y="11" width="7" height="12"></rect>
            </svg>
            <h1 className="text-2xl font-bold">BOLDO</h1>
          </Link>
        </div>

        {/* MENU */}
        <div className="flex items-center space-x-6 font-semibold">
          <Link href="/product" className="hover:text-gray-400 transition-colors">
            Product
          </Link>
          <Link href="/about" className="hover:text-gray-400 transition-colors">
            About
          </Link>
          <Link href="/contact" className="hover:text-gray-400 transition-colors">
            Contact
          </Link>

          {/* LOGIN BUTTON */}
          <Link href="/login">
            <p className="bg-white px-6 py-1 font-semibold text-gray-800 rounded-full hover:bg-gray-200 transition-colors">
              Login
            </p>
          </Link>
        </div>
      </div>
    </nav>
  );
}
