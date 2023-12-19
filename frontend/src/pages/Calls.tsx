import { Outlet, useLocation } from "react-router-dom";
import SearchInput from "../components/SearchInput";
import { calls } from "../data";
import HeaderRow from "../components/HeaderRow";

function Calls() {
  const { pathname } = useLocation();

  return (
    <section className="w-full h-full grid grid-cols-6">
      <aside className="hidden h-full pt-4 bg-secondaryBg lg:block lg:col-span-2">
        <SearchInput placeholder="Search on calls..." />
        <h1 className="text-3xl mt-6 pt-2 px-4 font-semibold text-primaryText border-t border-t-mainBg">
          Calls
        </h1>
        <ul className="h-[calc(100vh-130px)] px-2 overflow-y-auto">
          {calls.map(call => (
            <HeaderRow
              type={call.type as "voice" | "video"}
              key={call.id}
              title={call.name}
              imgSrc={call.picture}
              status={call.status as "answer" | "decline" | undefined}
              time={call.time}
            />
          ))}
        </ul>
      </aside>
      {pathname.match(/^(\/calls|\/calls\/)$/) ? (
        <div className="col-span-6 lg:col-span-4 bg-mainBg text-secondaryText">
          Noting
        </div>
      ) : (
        <Outlet />
      )}
    </section>
  );
}

export default Calls;
