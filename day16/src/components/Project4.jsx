import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";

function Home() {
  return <h2>Product Home</h2>;
}
function Products() {
  return <h2>All Products</h2>;
}
function Contact() {
  return <h2>Contact Us</h2>;
}

export default function Project4() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
