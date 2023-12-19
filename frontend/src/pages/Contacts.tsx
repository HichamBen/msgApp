import { Outlet, useLocation } from "react-router-dom";
import SearchInput from "../components/SearchInput";
import HeaderRow from "../components/HeaderRow";
import { contacts } from "../data";
import { PlusIcon } from "../icons";

function Contacts() {
  const { pathname } = useLocation();

  return (
    <section className="w-full h-full grid grid-cols-6">
      <aside className="relative hidden h-full pt-4 bg-secondaryBg lg:block lg:col-span-2">
        <SearchInput placeholder="Search on contacts..." />
        <h1 className="text-3xl mt-6 pt-2 px-4 font-semibold text-primaryText border-t border-t-mainBg">
          Contacts
        </h1>
        <ul className="h-[calc(100vh-130px)] px-2 overflow-y-auto">
          {contacts ? (
            contacts.map(contact => (
              <HeaderRow
                id={contact.id}
                key={contact.id}
                type="contact"
                title={contact.name}
                description={contact.description}
                imgSrc={contact.picture}
              />
            ))
          ) : (
            <p className="w-12 text-primaryText text-lg text-center mt-[20%]">
              No contacts
            </p>
          )}
        </ul>
        <PlusIcon
          width="48"
          height="48"
          style="cursor-pointer fill-mainBg shadow-xl bg-greenIcons absolute right-3 bottom-16 hover:opacity-80 duration-300 ease-out rounded-full"
        />
      </aside>
      {pathname.match(/^(\/contacts|\/contacts\/)$/) ? (
        <div className="col-span-6 lg:col-span-4 bg-mainBg text-primaryText text-lg grid place-content-center">
          <span>No contact choosed!</span>
        </div>
      ) : (
        <Outlet />
      )}
    </section>
  );
}

export default Contacts;
