import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import TopNav from "./components/TopNav";
import Home from "./routes/Home";
import BlogIndex from "./routes/BlogIndex";
import BlogPost from "./routes/BlogPost";

export default function App() {
  return (
    <>
      <TopNav />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Route>
      </Routes>
    </>
  );
}