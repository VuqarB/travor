"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { NAV_LINKS } from "@/constants";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen((open) => !open);
  };

  return (
    <header className="absolute top-0 pt-5 cLg:top-[55px] cLg:pt-0 z-30 w-full">
      <div className="max-container flex-between px-[15px]">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={140} height={39} />
        </Link> 

        <nav className={`flex-center gap-[60px]`}>
          <div
            className={`flex gap-6 cLg:gap-[35px] flex-col cLg:flex-row items-start fixed cLg:static top-0 left-0 w-[300px] cLg:w-auto bg-white cLg:bg-transparent transition-all duration-[400ms] ease-linear cLg:h-auto h-screen p-5  
                ${open ? "left-0" : "left-[-305px]"}`}
          >
            <Link href="/" className="block cLg:hidden mx-auto mb-7">
              <Image src="/logo.png" alt="logo" width={140} height={39} />
            </Link>
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.label}
                className="relative nav-link-hover capitalize text-[#414142] hover:text-[#ff621f] transition-all duration-200 ease-linear delay-300"
              >
                <span>{link.label}</span>
                <div className="nav-link-underline" />
              </Link>
            ))}
          </div>
          <div className="hidden cLg:flex-center gap-5">
            <Link
              href="/login"
              className="capitalize text-[#414142] hover:text-[#ff621f] transition-all duration-200 ease-linear"
            >
              login
            </Link>
            <Link
              href="/register"
              className="capitalize py-2.5 px-[25px] regular-14 font-medium text-white bg-[#08ac9e] border-0 rounded-[200px] transition-all duration-200 ease-linear translate-x-0 translate-y-0 hover:translate-y-[-3px] nav-btn-shadow"
            >
              register
            </Link>
          </div>
        </nav>

        <div className="flex cLg:hidden" onClick={handleMenu}>
          <Image
            src="/menu.svg"
            alt="menu"
            width={32}
            height={32}
            className="cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
}
