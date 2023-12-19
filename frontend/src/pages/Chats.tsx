import { Outlet, useLocation } from "react-router-dom";
import SearchInput from "../components/SearchInput";
import HeaderRow from "../components/HeaderRow";
import { chats } from "../data";
import { ChatsIcon } from "../icons";

function Chats() {
  const { pathname } = useLocation();

  return (
    <section className="w-full h-full grid grid-cols-6">
      <aside className="relative hidden h-full pt-4 bg-secondaryBg lg:block lg:col-span-2">
        <SearchInput placeholder="Search on chat..." />
        <h1 className="text-3xl mt-6 pt-2 px-4 font-semibold text-primaryText border-t border-t-mainBg">
          Chats
        </h1>
        {/* section titled with contacts row*/}
        <ul className="h-[calc(100vh-130px)] px-2 overflow-y-auto">
          {chats ? (
            chats.map(chat => (
              <HeaderRow
                type="chat"
                id={chat.id}
                key={chat.id}
                title={chat.name}
                description={chat.lastMsg}
                imgSrc={chat.picture}
                connected={chat.connected}
                time={chat.time}
              />
            ))
          ) : (
            <p className="text-primaryText text-lg text-center mt-[20%]">
              No Chats
            </p>
          )}
        </ul>
        <button className="group absolute right-3 bottom-16 bg-mainBg shadow-xl hover:opacity-80 duration-300 ease-out w-12 h-12 rounded-full">
          <ChatsIcon
            width="28"
            height="28"
            style="stroke-[3px] stroke-greenIcons fill-none m-auto"
          />
        </button>
      </aside>
      {pathname.match(/^(\/chats|\/chats\/)$/) ? (
         <div className="col-span-6 lg:col-span-4 bg-mainBg text-primaryText text-lg grid place-content-center">
         <span>No chat choosed!</span>
       </div>
      ) : (
        <Outlet />
      )}
    </section>
  );
}

export default Chats;
