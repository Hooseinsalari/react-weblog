import { Route, Routes } from "react-router-dom";

// components
import Layout from "./components/layout/Layout";
import HomePage from "./components/home/HomePage";
import BlogPage from "./components/blog/BlogPage";
import AuthorPage from "./components/author/AuthorPage";
import ScrollToTop from "./components/shared/ScrollToTop";

function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/blogs/:slug" element={<BlogPage />} />
        <Route path="/authors/:slug" element={<AuthorPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Layout>
  );
}

export default App;
