"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import Button from "./ui/Button";

const solutionsMenu = [
  { 
    name: "For Sales Teams", 
    href: "/solutions/sales-teams",
    description: "Empower your sales team with AI-powered research"
  },
  { 
    name: "For Growth Teams", 
    href: "/solutions/growth-teams",
    description: "Scale outbound without sacrificing quality"
  },
  { 
    name: "For Founders", 
    href: "/solutions/founders",
    description: "Focus on closing, not researching"
  },
  { 
    name: "For Agencies", 
    href: "/solutions/agencies",
    description: "Deliver better results for clients"
  },
];

const navItems = [
  { name: "Pricing", href: "/pricing" },
  { name: "Company", href: "/company" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setSolutionsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setSolutionsOpen(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Close dropdown when pathname changes (page navigation)
    setSolutionsOpen(false);
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">IQ</span>
            </div>
            <span className="text-xl font-bold text-neutral-900">IQgent One</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {/* Solutions Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`text-sm font-medium transition-colors flex items-center gap-1 ${
                  pathname.startsWith("/solutions")
                    ? "text-emerald-600"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                Solutions
                <svg 
                  className={`w-4 h-4 transition-transform ${solutionsOpen ? "rotate-180" : ""}`}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {solutionsOpen && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="w-80 bg-white rounded-xl shadow-xl border border-neutral-200 py-2 animate-fadeIn">
                    <div className="px-4 py-2 border-b border-neutral-100">
                      <Link 
                        href="/solutions"
                        className="text-sm font-semibold text-neutral-900 hover:text-emerald-600 transition-colors"
                      >
                        View All Solutions →
                      </Link>
                    </div>
                    {solutionsMenu.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-3 hover:bg-emerald-50 transition-colors"
                      >
                        <div className="font-medium text-neutral-900 mb-1">{item.name}</div>
                        <div className="text-sm text-neutral-600">{item.description}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? "text-emerald-600"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="secondary" className="!py-2 !px-6 !text-sm">
              Sign In
            </Button>
            <Button variant="primary" className="!py-2 !px-6 !text-sm">
              Request Demo
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6 text-neutral-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-neutral-200">
            <div className="flex flex-col gap-4">
              {/* Solutions in mobile */}
              <div>
                <Link
                  href="/solutions"
                  className="text-sm font-medium text-neutral-900 block mb-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Solutions
                </Link>
                <div className="pl-4 space-y-2">
                  {solutionsMenu.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block text-sm text-neutral-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium ${
                    pathname === item.href
                      ? "text-emerald-600"
                      : "text-neutral-600"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-neutral-200">
                <Button variant="secondary" size="md">
                  Sign In
                </Button>
                <Button variant="primary" size="md">
                  Request Demo
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
