"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
interface Nav_Interface {
  id: number;
  title: string;
  path: string;
}

const navLinks: Nav_Interface[] = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Dashboard", path: "/Dashboard" },
];

const Nav = () => {
  const router = useRouter();
  const currentPath = usePathname();
  return (
    <nav className="bg-gray-800 p-4 w-full flex flex-row justify-between items-center rounded-2xl border-2 border-white">
      <ul className="flex flex-row space-x-4">
        {navLinks.map((link: Nav_Interface) => (
          <li key={link.id}>
            <span
              onClick={() => router.push(link.path)}
              className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-2xl cursor-pointer font-medium"
            >
              {link.title}
            </span>
          </li>
        ))}
      </ul>
      <h1 className=" px-40 text-xl text-white border-2 rounded-2xl  p-3 ">
        current path is : {currentPath ?? currentPath}
      </h1>
    </nav>
  );
};

export default Nav;
