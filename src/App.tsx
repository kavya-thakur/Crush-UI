import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Components from "./pages/Components";
import ComponentPage from "./pages/ComponentPage";
import Navbar from "./components/layout/Navbar";
import ScrollToTop from "./components/layout/ScrollToTop";
import Blocks from "./pages/Blocks";
import BlockPage from "./pages/BlockPage";
import Templates from "./pages/Templates";
import TemplatePage from "./pages/TemplatePage";
import GlobalSearch from "./components/app/GlobalSearch";
import Pricing from "./pages/Pricing";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white dark:bg-[#09090b] ">
        <Navbar />
        <GlobalSearch />
        <ScrollToTop />

        <div className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/components" element={<Components />} />
            <Route path="/components/:slug" element={<ComponentPage />} />
            <Route path="/blocks" element={<Blocks />} />
            <Route path="/blocks/:slug" element={<BlockPage />} />
            <Route path="/templates" element={<Templates />} />
            <Route path="/templates/:slug" element={<TemplatePage />} />
            <Route path="/pricing" element={<Pricing />} />

            <Route
              path="/blocks/category/:categorySlug"
              element={<BlockPage />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
