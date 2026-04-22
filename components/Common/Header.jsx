"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { BriefcaseIcon } from "@heroicons/react/24/solid";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout, loading } = useAuth();

  if (loading) return null;

  const navItems = user
    ? [
        { name: "Home", href: "/" },
        { name: "Dashboard", href: "/dashboard" },
        { name: "Companies", href: "/companies" }, 
        { name: "Skill Match", href: "/skill-matching" },
        { name: "About Us", href: "/about" },
      ]
    : [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
      ];

  const handleLogout = () => {
    logout();
    router.push("/auth/login");
  };

  return (
    <header className="w-full shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-semibold text-gray-800n!no-underline text-white"
          >
            <div className="w-9 h-9 bg-blue-600 text-white flex items-center justify-center rounded-md no-underline !no-underline ">
              <BriefcaseIcon className="w-5 h-5" />
            </div>
            Internship & Skill Matcher
          </Link>

          {/* NAV LINKS */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition !no-underline ${
                    active
                      ? "text-white font-bold"
                      : "text-white hover:text-blue-500"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* RIGHT SIDE BUTTONS */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {user ? (
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm font-medium bg-red-600 text-white hover:bg-red-700 transition rounded-md !no-underline"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  href="/auth/login"
                  className="px-4 py-2 text-white font-bold border border-gray-300 transition rounded-md !no-underline"
                >
                  Login
                </Link>

                <Link
                  href="/auth/register"
                  className="px-4 py-2 text-white font-bold border border-gray-600 text-white transition rounded-md !no-underline"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

        </div>
      </div>
    </header>
  );
}