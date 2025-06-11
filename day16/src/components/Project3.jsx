import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";

function Home() {
  return <h2>Blog Home</h2>;
}
function Posts() {
  return <h2>Blog Posts</h2>;
}
function About() {
  return <h2>About the Blog</h2>;
}

export default function Project3() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}
