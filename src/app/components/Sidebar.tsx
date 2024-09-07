"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { FaHome, FaUser, FaChartBar, FaCog } from "react-icons/fa"; // For icons

interface sideLinksInterface {
  id: number;
  title: string;
  icon: React.ReactElement;
  path: string;
}

const side_Links: sideLinksInterface[] = [
  { id: 1, title: "Home", icon: <FaHome />, path: "" },
  { id: 2, title: "Profile", icon: <FaUser />, path: "/Dashboard/profile" },
  {
    id: 3,
    title: "Products",
    icon: <FaChartBar />,
    path: "/Dashboard/products",
  },
];

const Sidebar = () => {
  const router = useRouter();

  return (
    <aside className="w-64 bg-gray-800 text-white flex flex-col">
      <div
        className="text-2xl font-semibold p-4 border-b border-gray-700 cursor-pointer"
        onClick={() => router.push("/")}
      >
        Dashboard
      </div>
      <nav className="flex-grow">
        <ul className="p-4 space-y-4">
          {side_Links.map((item: sideLinksInterface) => (
            <li key={item.id}>
              <span
                onClick={() => router.push(`${item.path}`)}
                className="flex items-center space-x-2 text-white cursor-pointer hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out"
              >
                {item.icon}
                <span>{item.title}</span>
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
