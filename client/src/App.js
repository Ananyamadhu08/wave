import { Route, Routes } from "react-router-dom";
import { PageRenderer } from "./customRouter";
import { Home, Register } from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/register" element={<Register />} />

      <Route path="/:page" element={<PageRenderer />} />

      <Route path="/:page/:id" element={<PageRenderer />} />
    </Routes>
  );
};

export default App;
