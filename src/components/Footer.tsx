"use client";

import Link from "next/link";

import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const footerLinks = {
  Product: ["Job discovery", "Worker AI", "Companies", "Salary data"],
  Navigations: ["Help center", "Career library", "Contact"],
  Resources: ["Brand Guideline", "Newsroom"],
};

const Footer = () => {
  return (
    <footer className="bg-black px-5 py-14 text-white md:px-10 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Top Section */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & Description */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500">
                <span className="text-lg font-bold text-white">P</span>
              </div>

              <div className="leading-none">
                <h1 className="text-lg font-semibold">Job</h1>
                <p className="text-lg font-semibold">Hunt</p>
              </div>
            </Link>

            <p className="max-w-xs text-sm leading-7 text-gray-400">
              The AI-native career platform. Built for people who take their
              work seriously.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <Link
                href="#"
                className="rounded-lg bg-[#111] p-3 transition hover:bg-violet-600"
              >
                <FaFacebookF size={18} />
              </Link>

              <Link
                href="#"
                className="rounded-lg bg-violet-600 p-3 transition hover:bg-violet-700"
              >
                <FaGithub size={18} />
              </Link>

              <Link
                href="#"
                className="rounded-lg bg-[#111] p-3 transition hover:bg-violet-600"
              >
                <FaLinkedinIn size={18} />
              </Link>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h2 className="mb-5 text-base font-semibold text-violet-500">
                {title}
              </h2>

              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-gray-400 transition hover:text-white"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-6 text-sm text-gray-500 md:flex-row">
          <p>Copyright 2026 —Job Hunt</p>

          <div className="flex flex-wrap items-center gap-4">
            <Link href="#" className="hover:text-white">
              Terms & Policy
            </Link>

            <span>-</span>

            <Link href="#" className="hover:text-white">
              Privacy Guideline
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
