import { Outlet, useLocation } from "react-router-dom";
import SearchInput from "../components/SearchInput";
import HeaderRow from "../components/HeaderRow";
import { contacts } from "../data";

function Chats() {
  const { pathname } = useLocation();

  return (
    <section className="w-full h-full grid grid-cols-6">
      <aside className="hidden h-full pt-4 bg-secondaryBg lg:block lg:col-span-2">
        <SearchInput placeholder="Search on chat..." />
        <h1 className="text-3xl mt-6 pt-2 px-4 font-semibold text-primaryText border-t border-t-mainBg">
          Chats
        </h1>
        {/* section titled with contacts row*/}
        <ul className="h-[calc(100vh-130px)] px-2 overflow-y-auto">
          {contacts.map(contact => (
            <HeaderRow
              key={contact.id}
              title={contact.name}
              description={contact.lastMsg}
              imgSrc={contact.picture}
              withBadge={contact.status}
              withTime={contact.time}
            />
          ))}
        </ul>
      </aside>
      {pathname.match(/^(\/chats|\/chats\/)$/) ? (
        <div className="col-span-6 lg:col-span-4 bg-mainBg text-secondaryText">
          Noting
        </div>
      ) : (
        <Outlet />
      )}
    </section>
  );
}

export default Chats;
