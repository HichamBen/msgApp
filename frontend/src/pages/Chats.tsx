import { Outlet, useLocation } from "react-router-dom";

function Chats() {
  const { pathname } = useLocation();

  return (
    <section className="w-full h-full grid grid-cols-6">
      <aside className="hidden bg-secondaryBg lg:block lg:col-span-2">
    
      </aside>
      {pathname.match(/^(\/chats|\/chats\/)$/) ? <div className="col-span-6 lg:col-span-4 bg-mainBg text-secondaryText">Noting</div> : <Outlet />}
    </section>
  );
}

export default Chats;
