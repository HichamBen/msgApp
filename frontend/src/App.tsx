import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Chats from "./pages/Chats";
import ChatRoom from "./pages/ChatRoom";
import Contacts from "./pages/Contacts";
import ContactInfo from "./pages/ContactInfo";
import Calls from "./pages/Calls";
import Calling from "./pages/Calling";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="chats" element={<Chats />}>
          <Route path=":chatId" element={<ChatRoom />} />
        </Route>
        <Route path="contacts" element={<Contacts />}>
          <Route path=":contactId" element={<ContactInfo />} />
        </Route>
        <Route path="calls" element={<Calls />}>
          <Route path=":callId" element={<Calling />} />
        </Route>
      </Route>
      <Route path="login" element={<LoginPage />} />
      <Route path="signup" element={<SignupPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
