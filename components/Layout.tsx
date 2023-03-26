import React from "react";
import Navbar from "./Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="flex h-screen w-screen bg-base-300">
      <Navbar />
      {children}
    </main>
  );
};

export default Layout;
