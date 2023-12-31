import { useState } from "react";
import { ChatsIcon, PhoneIcon, PowerIcon, UsersIcon } from "../icons";
import Settings from "./Settings";
import { NavLink } from "react-router-dom";

function SideBar() {
  const [status, setStatus] = useState(false);

  return (
    <aside className="shrink-0 flex flex-col bg-sideBg py-4 w-20 h-full items-center justify-between">
      <div>
        <div className="relative w-full px-2 text-center" aria-label="username">
          <img
            src="/avatars/avatar.jpg"
            alt="avatar"
            className="rounded-full object-cover object-center"
          />
          <span
            role="none"
            className="bg-greenIcons w-2 h-2 absolute right-4 bottom-7 rounded-full"
          />
          <span className="text-sm text-secondaryText">Jain Doe</span>
        </div>

        <div className="w-full mt-12 flex flex-col gap-y-5 items-center">
          <NavLink
            to="/chats"
            className={({ isActive }) => `cursor-pointer w-full
             ${
               isActive
                 ? "border-l-4 border-blueBar stroke-blueBar"
                 : "hover:stroke-blueBar stroke-thirdBg transition-colors duration-300 ease-out"
             }
              `}
          >
            <ChatsIcon
              width="30"
              height="30"
              style="fill-none stroke-2 m-auto"
            />
          </NavLink>

          <NavLink
            to="/contacts"
            className={({ isActive }) => `cursor-pointer w-full
             ${
               isActive
                 ? "border-l-4 border-blueBar fill-blueBar"
                 : "fill-thirdBg hover:fill-blueBar transition-colors duration-300 ease-out"
             }
              `}
          >
            <UsersIcon
              width="30"
              height="30"
              style="cursor-pointer stroke-2 m-auto"
            />
          </NavLink>

          <NavLink
            to="/calls"
            className={({ isActive }) => `cursor-pointer w-full
             ${
               isActive
                 ? "border-l-4 border-blueBar fill-blueBar"
                 : "fill-thirdBg hover:fill-blueBar transition-colors duration-300 ease-out"
             }
              `}
          >
            <PhoneIcon width="30" height="30" style="stroke-2 m-auto" />
          </NavLink>
        </div>
      </div>
      <div className="w-full flex flex-col gap-y-5 items-center">
        <Settings />

        <PowerIcon
          role="button"
          onclick={() => setStatus(!status)}
          width="28"
          height="28"
          style={`cursor-pointer ${
            status ? "fill-greenIcons" : "fill-redIcons"
          }`}
        />
      </div>
    </aside>
  );
}

export default SideBar;
