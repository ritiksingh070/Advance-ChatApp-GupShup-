import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy,Suspense } from "react";
import ProtectRoute from "./components/auth/ProtectRoute";
import LayoutLoader from "./components/layout/LayoutLoader";

const Home = lazy(() => import("./pages/Home"));
const Chat = lazy(() => import("./pages/Chat"));
const Login = lazy(() => import("./pages/Login"));
const Groups = lazy(() => import("./pages/Groups"));
const NotFound = lazy(() => import("./pages/NotFound"));

const user = true;
const App = () => {
  return (
    <BrowserRouter>
    <Suspense fallback={<LayoutLoader/>}>
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
        </Suspense>
      
    </BrowserRouter>
  );
};

export default App;
