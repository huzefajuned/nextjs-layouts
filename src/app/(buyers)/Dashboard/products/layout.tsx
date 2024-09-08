import React from "react";
import { LayoutProps } from "@/app/types/interface";

export default function Layout({ children }:LayoutProps) {
  return (
    <div className="overflow-x-auto border-2  border-white rounded-2xl mx-6 p-2">
      <h1 className="text-xl text-white justify-center text-center w-full my-2 ">
        products page layout
      </h1>
      <main>{children}</main>
    </div>
  );
}
