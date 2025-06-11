import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";

function Home() {
  return <h2>Portfolio Home</h2>;
}
function About() {
  return <h2>About Me</h2>;
}
function Contact() {
  return <h2>Contact</h2>;
}

export default function Project1() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
