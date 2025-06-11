import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";

function Home() {
  return <h2>Welcome Home</h2>;
}
function Services() {
  return <h2>Our Services</h2>;
}
function Contact() {
  return <h2>Contact Us</h2>;
}

export default function Project2() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
