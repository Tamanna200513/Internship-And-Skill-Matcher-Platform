"use client";
import { BriefcaseIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Internships", href: "/internships" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "About Us", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo + Title */}
      <Link
        href="/"
        className="flex items-center gap-3 py-4">
        <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center shadow-sm translate-x-6">
        <BriefcaseIcon className="w-6 h-6 text-blue-600" />
      </div>
      <span className="font-semibold text-gray-800 text-xl whitespace-nowrap translate-x-6">
      Smart Internship & Skill Matcher
      </span>
      </Link>


          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative text-sm font-medium transition pb-1
                    ${
                      active
                        ? "text-blue-600 after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-blue-600"
                        : "text-gray-600 hover:text-blue-600"
                    }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center gap-4 translate-x-20">
            <Link
              href="/login"
              className="text-sm font-medium text-gray-600 hover:text-blue-600">
              Login
            </Link>

            <Link
          href="/register"
          className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium 
          text-white bg-blue-600 hover:bg-blue-700 transition rounded-full shadow-lg">
          Sign Up
          </Link>

          </div>
        </div>
      </div>
    </header>
  );
}
