"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { Briefcase, BriefcaseIcon } from "@heroicons/react/24/solid";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout, loading } = useAuth();

  if (loading) return null;

  const navItems = user
    ? [
        { name: "Home", href: "/" },
        { name: "Dashboard", href: "/dashboard" },
        { name: "Internships", href: "/internships" },
        { name: "Resume", href: "/resume" },
        { name: "Skill Match", href: "/skill-matching" },
        { name: "Placement Rounds", href: "/placement/rounds" },
        { name: "How It Works", href: "/how-it-works" },
        { name: "About Us", href: "/about" },
      ]
    : [
        { name: "Home", href: "/" },
        { name: "How It Works", href: "/how-it-works" },
        { name: "About Us", href: "/about" },
      ];

  const handleLogout = () => {
    logout();
    router.push("/auth/login");
  };

  return (
    <header className="w-full border-b bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6">

        {/* ROW */}
        <div className="flex items-center justify-between h-16">
          {/* LOGO */}
          <Link href="/" className="flex items-center  gap-3 font-bold text-blue-700 whitespace-nowrap translate-x-25">
          <div className="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center shadow-sm">
          <BriefcaseIcon className="w-6 h-6 text-blue-600" /></div>
            Smart Internship & Skill Matcher
          </Link>

          {/* RIGHT SIDE */}
          <div className="flex items-center">

            {/* NAV LINKS — spacing fix here */}
            <nav className="hidden md:flex items-center gap-3 lg:gap-5 ml-8">
              {navItems.map((item) => {
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`inline-block px-4 py-2 rounded-md text-sm font-medium transition
                      ${
                        active
                          ? "bg-blue-100 text-blue-700"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            {/* AUTH BUTTON */}
            <div className="ml-6">
              {user ? (
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 text-sm font-semibold text-red-600 hover:bg-red-50 rounded-md translate-x-25"
                >
                  Logout
                </button>
              ) : (
                <Link
                  href="/auth/login"
                  className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-md"
                >
                  Login
                </Link>
              )}
            </div>

          </div>
        </div>
      </div>
    </header>
  );
}







