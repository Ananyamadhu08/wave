import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Header } from "./components";
import { PageRenderer } from "./customRouter";
import { refreshToken } from "./features";
import { Home, Login, Register } from "./pages";
import { useTheme } from "./context";

const App = () => {
  const { auth } = useSelector((state) => state);

  const { theme } = useTheme();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshToken());
  }, [dispatch]);

  return (
    <div className="h-full min-h-screen bg-white dark:bg-slate-900">
      <ToastContainer
        theme={theme === "light" ? "light" : "dark"}
        position="bottom-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
      />

      {auth.token && <Header />}

      <Routes>
        <Route path="/" element={auth.token ? <Home /> : <Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/:page" element={<PageRenderer />} />

        <Route path="/:page/:id" element={<PageRenderer />} />
      </Routes>
    </div>
  );
};

export default App;
