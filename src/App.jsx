import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/uslugi" element={<Services />} />
            <Route path="/informacje" element={<Info />} />
            <Route path="/kontakt" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
