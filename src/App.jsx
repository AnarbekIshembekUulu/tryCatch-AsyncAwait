import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import LookBookPage from "./pages/LookBookPage";
import FeaturesPage from "./pages/FeaturesPage";
import PagesPage from "./pages/PagesPage";
import BlogPage from "./pages/BlogPage";
import SearchPage from "./pages/SearchPage";
import HeartPage from "./pages/HeartPage";
import Shopping_cartPage from "./pages/Shopping_cartPage";

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/lookbook" element={<LookBookPage />} />
                <Route path="/features" element={<FeaturesPage />} />
                <Route path="/pages" element={<PagesPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/heart" element={<HeartPage />} />
                <Route path="/shopping-cart" element={<Shopping_cartPage />} />
            </Routes>
        </>
    );
};

export default App;
