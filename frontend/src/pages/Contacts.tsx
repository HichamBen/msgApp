import { Outlet, useLocation } from "react-router-dom";
import SearchInput from "../components/SearchInput";
import HeaderRow from "../components/HeaderRow";
import { contacts } from "../data";

function Contacts() {
  const { pathname } = useLocation();

  return (
    <section className="w-full h-full grid grid-cols-6">
      <aside className="hidden h-full pt-4 bg-secondaryBg lg:block lg:col-span-2">
        <SearchInput placeholder="Search on contacts..." />
        <h1 className="text-3xl mt-6 pt-2 px-4 font-semibold text-primaryText border-t border-t-mainBg">
          Contacts
        </h1>
        {/* section titled with contacts row*/}
        <ul className="h-[calc(100vh-130px)] px-2 overflow-y-auto">
          {contacts.map(contact => (
            <HeaderRow
              type="contact"
              key={contact.id}
              title={contact.name}
              description={contact.description}
              imgSrc={contact.picture}
            />
          ))}
        </ul>
      </aside>
      {pathname.match(/^(\/contacts|\/contacts\/)$/) ? (
        <div className="col-span-6 lg:col-span-4 bg-mainBg text-secondaryText">
          Noting
        </div>
      ) : (
        <Outlet />
      )}
    </section>
  );
}

export default Contacts