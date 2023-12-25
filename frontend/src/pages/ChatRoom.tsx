import { handleScrolling } from "../utilities";

function ChatRoom() {

  return <div className="col-span-6 lg:col-span-4 bg-mainBg flex flex-col">
        <nav className="bg-secondaryBg h-12 w-[calc(100%-1px)] self-end shrink-0"></nav>
        <main onScroll={handleScrolling} className="w-full h-[calc(100vh-7rem)] shrink-0 overflow-y-auto break-words">
        
        </main>
        <footer className="border-t border-secondaryText h-16 w-full shrink-0"></footer>
  </div>;
}

export default ChatRoom;
