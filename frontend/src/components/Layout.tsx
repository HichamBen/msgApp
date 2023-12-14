import { Outlet, useLocation, useNavigate } from "react-router-dom";
import SideBar from "./SideBar";
import { useEffect } from "react";

function Layout() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === "/") {
      navigate("/chats", { replace: true, state: { prevPath: "/chats" } });
    }
  }, [navigate, pathname]);

  return (
    <>
      <SideBar />
      <Outlet />
    </>
  );
}

export default Layout;
