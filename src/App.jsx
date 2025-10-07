import React from "react";
import { Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import CategoriesSection from "./components/CategoriesSection/CategoriesSection";
import SaleProductsCard from "./components/SaleProductsCard/SaleProductsCard";
import ContactInfo from "./components/ContactInfo/ContactInfo";
import DiscountFormSection from "./components/DiscountFormSection/DiscountFormSection";
import Map from "./components/Map/Map";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";
import CategoryProductsPage from "./pages/CategoryProductsPage/CategoryProductsPage"; 
import AllProductsPage from "./pages/AllProductsPage/AllProductsPage";

function App() {
  return (
    <div>
      <Routes>
        
        <Route path="/Garden_Shop" element={
          <>
            <Header />
            <HeroSection />
            <CategoriesSection /> 
            <DiscountFormSection />
            <SaleProductsCard />
            <ContactInfo />
            <Map />
          </>
        } />
        
        <Route path="/" element={
          <>
            <Header />
            <HeroSection />
            <CategoriesSection /> 
            <DiscountFormSection />
            <SaleProductsCard />
            <ContactInfo />
            <Map />
          </>
        } />

        <Route path="/Garden_Shop/categories" element={<CategoriesPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        
        <Route path="/Garden_Shop/products" element={<CategoryProductsPage />} />
        <Route path="/products" element={<CategoryProductsPage />} />
        <Route path="/Garden_Shop/sales" element={<CategoryProductsPage />} />
        <Route path="/sales" element={<CategoryProductsPage />} />
        
        <Route path="/Garden_Shop/category/:categoryId" element={<CategoryProductsPage />} />
        <Route path="/category/:categoryId" element={<CategoryProductsPage />} />
        <Route path="/Garden_Shop/products" element={<AllProductsPage />} />
       <Route path="/products" element={<AllProductsPage />} />
      </Routes>
        
    </div>
  );
}

export default App;





