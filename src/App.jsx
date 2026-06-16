import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/nav";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Contact from "./pages/Contact";
import Locations from "./pages/Locations";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/informacje" element={<Info />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="/lokalizacje" element={<Locations />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
