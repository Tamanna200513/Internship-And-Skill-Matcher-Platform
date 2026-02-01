"use client";
import Link from "next/link";

export default function Header() {
    return (
    <header className="w-full bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-blue-600 text-white flex items-center justify-center rounded-full font-bold">
            ✓
            </div>
            <h1 className="text-lg font-semibold text-gray-800">
            Smart Internship & Skill Matcher
            </h1>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex gap-8 text-gray-600 font-medium">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <Link href="/internships" className="hover:text-blue-600">Internships</Link>
            <Link href="/how-it-works" className="hover:text-blue-600">How It Works</Link>
            <Link href="/about" className="hover:text-blue-600">About Us</Link>
        </nav>

        {/* Auth Buttons */}
        <div className="flex gap-4">
            <Link
            href="/auth/login"
            className="text-gray-700 hover:text-blue-600 font-medium"
            >
            Login
            </Link>
            <Link
            href="/auth/register"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
            Register
            </Link>
        </div>
        </div>
    </header>
    );
}
