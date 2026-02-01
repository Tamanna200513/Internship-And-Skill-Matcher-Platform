import Link from "next/link";

export default function Footer() {
    return (
    <footer className="bg-blue-50 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
            <h2 className="text-lg font-semibold text-gray-800">
            Smart Internship & Skill Matcher
            </h2>
            <p className="text-sm text-gray-600 mt-3">
            Helping students find the best internships based on their skills.
            </p>
        </div>

        {/* Quick Links */}
        <div>
            <h3 className="font-semibold text-gray-800 mb-3">Quick Links</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
            <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
            <li><Link href="/internships" className="hover:text-blue-600">Internships</Link></li>
            <li><Link href="/how-it-works" className="hover:text-blue-600">How It Works</Link></li>
            <li><Link href="/about" className="hover:text-blue-600">About Us</Link></li>
            </ul>
        </div>

        {/* For Students */}
        <div>
            <h3 className="font-semibold text-gray-800 mb-3">For Students</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
            <li>Skill Based Matching</li>
            <li>Easy Apply</li>
            <li>Profile Builder</li>
            <li>Career Growth</li>
            </ul>
        </div>

        {/* Contact */}
        <div>
            <h3 className="font-semibold text-gray-800 mb-3">Contact</h3>
            <p className="text-sm text-gray-600">
            Email: support@smartinternship.com
            </p>
            <p className="text-sm text-gray-600 mt-1">
            Phone: +91 98765 43210
            </p>
        </div>
        </div>

      {/* Bottom */}
        <div className="border-t border-blue-100 text-center py-4 text-sm text-gray-600">
        © {new Date().getFullYear()} Smart Internship & Skill Matcher. All rights reserved.
        </div>
    </footer>
    );
}
