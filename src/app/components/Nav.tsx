"use client";
import React from "react";
import { useRouter } from "next/navigation";
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
  return (
    <nav className="bg-gray-800 p-4 w-full">
      <ul className="flex space-x-4">
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
    </nav>
  );
};

export default Nav;
