"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", url: "/" },
  // { name: "about", url: "/about" },
  // { name: "tools", url: "/tools" },
];

const Navbar = () => {

  const pathname = usePathname();
  const dot = <span className="text-green-500 font-bold">#</span>;

  return (
    <nav className="flex flex-col items-center justify-around gap-5 mt-5">
      <Link href="https://github.com/Ted2xmen/bookmarksfor">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-brand-github"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          stroke-width="1"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
        </svg>
      </Link>

      {false && (
        <ul className="flex mt-4 gap-6">
          {links.map((link) => {
            return (
              <Link href={link.url}>
                <li className="text-slate-400">
                  {/* {pathname === link.url ? dot : ""} */}
                  {link.name}
                </li>
              </Link>
            );
          })}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
