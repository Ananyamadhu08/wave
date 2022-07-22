import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { CreatePostModal, Header } from "./components";
import { PageRenderer } from "./customRouter";
import { getPosts, refreshToken } from "./features";
import { Home, Login, Register } from "./pages";
import { useTheme } from "./context";
import { useToast } from "./hooks";

const App = () => {
  const { auth, postModal } = useSelector((state) => state);

  const { theme } = useTheme();

  const { showToast } = useToast();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshToken());
  }, [dispatch]);

  useEffect(() => {
    if (auth.token) {
      dispatch(getPosts({ token: auth.token, showToast }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, auth.token]);

  return (
    <div className="bg-white dark:bg-slate-900">
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

      {postModal?.isModalOpen && <CreatePostModal />}

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
