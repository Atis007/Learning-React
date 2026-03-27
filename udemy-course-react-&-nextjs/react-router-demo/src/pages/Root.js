import { Outlet } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";

export default function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main>
        {/* The marker where the child routes should be rendered */}
        <Outlet />
      </main>
    </>
  );
}
