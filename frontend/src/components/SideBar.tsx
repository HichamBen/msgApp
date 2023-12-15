import { useState } from "react";
import { ChatsIcon, PhoneIcon, PowerIcon, UsersIcon } from "../icons";
import Settings from "./Settings";

function SideBar() {
  const [page, setPage] = useState<"chats" | "contacts" | "calls">("chats");
  const [status, setStatus] = useState(false);

  return (
    <aside className="shrink-0 flex flex-col bg-sideBg py-4 w-20 h-full items-center justify-between">
      <div>
        <div className="relative w-full px-2 text-center" aria-label="username">
          <img
            src="/avatar/profile.jpg"
            alt="avatar"
            className="rounded-full aspect-square object-center"
          />
          <span
            role="none"
            className="bg-greenIcons w-2 h-2 absolute right-3 bottom-8 rounded-full"
          />
          <span className="text-sm text-secondaryText">Jain Doe</span>
        </div>

        <div className="w-full mt-12 flex flex-col gap-y-5 items-center">
          <ChatsIcon
            onclick={() => setPage("chats")}
            width="30"
            height="30"
            style={`cursor-pointer fill-none stroke-2 w-full ${
              page === "chats"
                ? "border-l-4 border-blueBar stroke-blueBar"
                : "hover:stroke-blueBar stroke-primaryText transition-colors duration-300 ease-out"
            }`}
          />
          <UsersIcon
            onclick={() => setPage("contacts")}
            width="30"
            height="30"
            style={`cursor-pointer stroke-2 w-full ${
              page === "contacts"
                ? "border-l-4 border-blueBar fill-blueBar"
                : "fill-primaryText hover:fill-blueBar transition-colors duration-300 ease-out"
            }`}
          />
          <PhoneIcon
            onclick={() => setPage("calls")}
            width="30"
            height="30"
            style={`cursor-pointer stroke-2 w-full ${
              page === "calls"
                ? "border-l-4 border-blueBar fill-blueBar"
                : "fill-primaryText hover:fill-blueBar transition-colors duration-300 ease-out"
            }`}
          />
        </div>
      </div>
      <div className="w-full flex flex-col gap-y-5 items-center">
        <Settings />

        <PowerIcon
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
