import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import Navbar from "./components/layout/Navbar";
import ScrollToTop from "./components/layout/ScrollToTop";
import GlobalSearch from "./components/app/GlobalSearch";
import Loader from "./components/app/Loader";

/* Lazy loaded pages */
const Home = lazy(() => import("./pages/Home"));
const Components = lazy(() => import("./pages/Components"));
const ComponentPage = lazy(() => import("./pages/ComponentPage"));
const Blocks = lazy(() => import("./pages/Blocks"));
const BlockPage = lazy(() => import("./pages/BlockPage"));
const Templates = lazy(() => import("./pages/Templates"));
const TemplatePage = lazy(() => import("./pages/TemplatePage"));
const Pricing = lazy(() => import("./pages/Pricing"));

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white dark:bg-[#09090b]">
        <Navbar />
        <GlobalSearch />
        <ScrollToTop />

        <div className="pt-16">
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/components" element={<Components />} />
              <Route path="/components/:slug" element={<ComponentPage />} />

              <Route path="/blocks" element={<Blocks />} />
              <Route
                path="/blocks/category/:categorySlug"
                element={<BlockPage />}
              />

              <Route path="/templates" element={<Templates />} />
              <Route path="/templates/:slug" element={<TemplatePage />} />

              <Route path="/pricing" element={<Pricing />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
