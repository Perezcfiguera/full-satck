import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Menu from "./views/Menu";
const Layout = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<Menu/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Layout;