import { useState } from "react";
import { Link } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-genara-dark sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-5 h-5 text-white"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="text-white text-xl font-semibold font-display">
              genara
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <button className="text-gray-300 hover:text-white px-4 py-2 text-sm font-medium flex items-center gap-1 transition-colors">
              Solutions
              <ChevronDown className="w-4 h-4" />
            </button>
            <Link
              href="/pricing"
              className="text-gray-300 hover:text-white px-4 py-2 text-sm font-medium border border-gray-600 rounded-full hover:border-gray-500 transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/resources"
              className="text-gray-300 hover:text-white px-4 py-2 text-sm font-medium border border-gray-600 rounded-full hover:border-gray-500 transition-colors"
            >
              Resources
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/login"
              className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="bg-white text-genara-dark px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors"
            >
              Start free trial
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            <div className="flex flex-col gap-2">
              <button className="text-gray-300 hover:text-white px-4 py-2 text-left text-sm font-medium">
                Solutions
              </button>
              <Link
                href="/pricing"
                className="text-gray-300 hover:text-white px-4 py-2 text-sm font-medium"
              >
                Pricing
              </Link>
              <Link
                href="/resources"
                className="text-gray-300 hover:text-white px-4 py-2 text-sm font-medium"
              >
                Resources
              </Link>
              <div className="border-t border-gray-700 mt-2 pt-4 flex flex-col gap-2">
                <Link
                  href="/login"
                  className="text-gray-300 hover:text-white px-4 py-2 text-sm font-medium"
                >
                  Log in
                </Link>
                <Link
                  href="/signup"
                  className="bg-white text-genara-dark mx-4 py-2 rounded-full text-sm font-semibold text-center"
                >
                  Start free trial
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
