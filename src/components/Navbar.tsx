"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "./NavbarItems";
import { authClient, useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const { data: session } = useSession();
  console.log(session);

  const dashboardLinsks = { seeker: "/dashboard/seeker", recruiter: "/dashboard/recruiter", };
  if (
    session?.user?.email &&
    !navItems.find((item) => item.label === "Dashboard")
  ) {
    navItems.push({
      label: "Dashboard",
      href: dashboardLinsks[session.user.role],
    });
  }
  const logOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login"); // redirect to login page
        },
      },
    });
  };

  return (
    <nav className="w-full bg-[radial-gradient(circle_at_top,#1F1F28,#0F0F12)] px-4 py-4 md:px-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500">
            <span className="text-lg font-bold text-white">J</span>
          </div>

          <div className="leading-none">
            <h1 className="text-sm font-semibold text-white md:text-base">
              Job
            </h1>
            <p className="text-sm font-semibold text-white md:text-base">
              Hunt
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 rounded-2xl bg-[#17171C] px-8 py-4 shadow-lg lg:flex">
          {/* Nav Links */}
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-gray-300 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Divider */}
          <div className="h-6 w-px bg-gray-700" />

          {/* Buttons */}
          <div className="flex items-center gap-4">
            {!session?.user && (
              <div className="flex items-center gap-4">
                <Link href={"/signin"}>
                  <Button
                    variant="ghost"
                    className="text-sm font-medium text-violet-400"
                  >
                    Sign In
                  </Button>
                </Link>

                <Link href={"/signup"}>
                  <Button className="rounded-xl bg-white px-5 text-sm font-semibold text-black hover:bg-gray-200">
                    Get Started
                  </Button>
                </Link>
              </div>
            )}
            {session?.user && (
              <div className="flex items-center gap-4">
                <p className=" text-white">{session?.user?.name}</p>
                <Link href={"/"}>
                  <Button
                    onClick={logOut}
                    variant="ghost"
                    className="text-sm font-medium text-violet-400"
                  >
                    log Out
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center rounded-lg bg-[#17171C] p-2 text-white lg:hidden"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mt-4 rounded-2xl bg-[#17171C] p-6 shadow-xl lg:hidden">
          <div className="flex flex-col gap-5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-gray-300 transition hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <div className="h-px w-full bg-gray-700" />

            <Link href={"/signin"}>
              <Button
                variant="ghost"
                className="text-sm font-medium text-violet-400"
              >
                Sign In
              </Button>
            </Link>

            <Link href={"/signup"}>
              <Button className="rounded-xl bg-white px-5 text-sm font-semibold text-black hover:bg-gray-200">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
