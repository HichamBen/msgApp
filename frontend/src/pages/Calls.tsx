import { Outlet, useLocation } from "react-router-dom";
import SearchInput from "../components/SearchInput";
import { calls } from "../data";
import HeaderRow from "../components/HeaderRow";
import { FilledPhone } from "../icons";

function Calls() {
  const { pathname } = useLocation();

  return (
    <section className="w-full h-full grid grid-cols-6">
      <aside className="relative hidden h-full pt-4 bg-secondaryBg lg:block lg:col-span-2">
        <SearchInput placeholder="Search on calls..." />
        <h1 className="text-3xl mt-6 pt-2 px-4 font-semibold text-primaryText border-t border-t-mainBg">
          Calls
        </h1>
        <ul className="h-[calc(100vh-130px)] px-2 overflow-y-auto">
          {calls ? (
            calls.map(call => (
              <HeaderRow
                id={call.id}
                key={call.id}
                type={call.type as "voice" | "video"}
                title={call.name}
                imgSrc={call.picture}
                status={call.status as "answer" | "decline" | undefined}
                time={call.time}
              />
            ))
          ) : (
            <p className="text-primaryText text-lg text-center mt-[20%]">
              No calls
            </p>
          )}
        </ul>
        <button className="absolute right-3 bottom-16 bg-greenIcons shadow-xl hover:opacity-80 duration-300 ease-out w-12 h-12 rounded-full">
          <FilledPhone width="28" height="28" style="fill-white m-auto" />
        </button>
      </aside>
      {pathname.match(/^(\/calls|\/calls\/)$/) ? (
         <div className="col-span-6 lg:col-span-4 bg-mainBg text-primaryText text-lg grid place-content-center">
         <span>No call choosed!</span>
       </div>
      ) : (
        <Outlet />
      )}
    </section>
  );
}

export default Calls;
