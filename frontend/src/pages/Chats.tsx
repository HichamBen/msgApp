import { Outlet, useLocation } from "react-router-dom";
import SearchInput from "../components/SearchInput";
import HeaderRow from "../components/HeaderRow";
import { ChatsIcon } from "../icons";
import useFetchData from "../hooks/useFetchData";
import { ReactNode, useContext, useRef } from "react";
import Banner from "../components/Banner";
import AuthContext from "../context/AuthContext";

function Chats() {
  const { pathname } = useLocation();
  const { client } = useContext(AuthContext);
  const { data, error, loading } = useFetchData<ChatsProps>("chats");
  const template = useRef<ReactNode>();

  if (loading) {
    template.current = <h1>Loading...</h1>;
  }
  if (error) {
    template.current = <Banner message={error} />;
  }

  if (!error && !loading && data) {
    template.current =
      data.length > 0 ? (
        data.map(chat => {
          const otherPerson = chat.participants.find(
            user => user.participant._id !== client?.infos._id
          )?.participant;

          const time = chat.lastMsg
            ? new Date(chat.lastMsg.sendAt).toLocaleString("fr", {
                timeStyle: "short",
              })
            : new Date(chat.createdAt as string).toLocaleString("fr", {
                timeStyle: "short",
              });
          if (chat.isGroup) {
            return (
              <HeaderRow
                type="chat"
                id={chat._id}
                key={chat._id}
                title={chat.chatTitle}
                description={chat.lastMsg?.content}
                status={chat.lastMsg?.status}
                imgSrc={"/avatars/avatar5.webp"}
                connected={true}
                time={time}
              />
            );
          }

          return (
            <HeaderRow
              type="chat"
              id={chat._id}
              key={chat._id}
              title={otherPerson?.username as string}
              description={chat.lastMsg?.content}
              status={
                chat.lastMsg?.senderId === client?.infos._id
                  ? chat.lastMsg?.status
                  : undefined
              }
              imgSrc={otherPerson?.picture ?? "/avatars/avatar5.webp"}
              connected={otherPerson?.connected as boolean}
              time={time}
            />
          );
        })
      ) : (
        <p className="text-primaryText text-lg text-center mt-[20%]">
          No chats
        </p>
      );
  }

  return (
    <section className="w-full h-full grid grid-cols-6">
      <aside className="relative hidden h-full pt-4 bg-secondaryBg lg:block lg:col-span-2">
        <SearchInput placeholder="Search on chat..." />
        <h1 className="text-3xl mt-6 pt-2 px-4 font-semibold text-primaryText border-t border-t-mainBg">
          Chats
        </h1>
        {/* section titled with contacts row*/}
        <ul className="h-[calc(100vh-130px)] px-2 overflow-y-auto">
          {template.current}
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
