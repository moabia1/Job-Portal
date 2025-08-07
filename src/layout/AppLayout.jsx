import Header from "@/components/Header";
import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen px-5 py-2">
        <Header />
        <Outlet />
      </main>
      <div className="w-full text-center text-lg p-5 mt-10 bg-zinc-900">
        Made with 💗 by Moabia
      </div>
    </div>
  );
};

export default AppLayout;
