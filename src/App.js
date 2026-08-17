import Footer from "./Components/Footer/hotelFooter";
import Navbar from "./Components/Navbar/hotelNavbr";
import { Route, Router, Routes } from "react-router-dom";
import Aboutus from "./pages/Aboutus";
import HomePage from "./pages/home";

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<Aboutus />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
