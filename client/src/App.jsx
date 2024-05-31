import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy } from "react";
import ProtectRoute from "./components/auth/ProtectRoute";

const Home = lazy(() => import("./pages/Home"));
const Chat = lazy(() => import("./pages/Chat"));
const Login = lazy(() => import("./pages/Login"));
const Groups = lazy(() => import("./pages/Groups"));
const NotFound = lazy(() => import("./pages/NotFound"));

const user = true;
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route element={<ProtectRoute user={user} />}>
          <Route path="/" element={<Home />} />
          <Route path="chat/:chatId" element={<Chat />} />
          <Route path="groups" element={<Groups />} />
        </Route>

        <Route path="/login" element={<ProtectRoute user={!user}>
          <Login/>
        </ProtectRoute>}></Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
