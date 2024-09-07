"use client";
import React from "react";
import {  usePathname } from "next/navigation";
import Sidebar from "../components/Sidebar";
interface LayoutProps {
  children: React.ReactNode;
}



export default function Layout({ children }: LayoutProps) {

  const pathname = usePathname();

  return (
    <div className="flex min-h-screen">
          <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col w-full p-6 bg-blue-600 justify-around items-center">
        <h2 className=" bg-fuchsia-500 font-bold mb-4 text-3xl">Dashboard Content</h2>
        <main>{children}</main>
      </div>
    </div>
  );
}
