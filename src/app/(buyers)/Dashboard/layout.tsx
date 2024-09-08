"use client";
import Sidebar from "@/app/components/Sidebar";
import { LayoutProps } from "@/app/types/interface";
import React from "react";

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex h-full  p-2 gap-2">
      <Sidebar />
      {/* Main Content */}
      <div
        className="flex flex-col w-full h-full  bg-slate-800  rounded-2xl border-2 border-white 
      items-center justify-evenly"
      >
        <h2 className="bg-white  mb-4 text-xl p-2 rounded-2xl my-2">Dashboard Content</h2>
        <main>{children}</main>
      </div>
    </div>
  );
}
