import React from 'react';
import Header from './layout/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import CategoriesSection from './components/CategoriesSection/CategoriesSection';
import DiscountFormSection from './components/DiscountFormSection/DiscountFormSection';
import SaleProductsCard from './components/SaleProductsCard/SaleProductsCard';
import ContactInfo from './components/ContactInfo/ContactInfo';
import Map from './components/Map/Map';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <HeroSection></HeroSection>
      <CategoriesSection /> 
      <DiscountFormSection />
      <SaleProductsCard />
      <ContactInfo />
      <Map />
      <main>
        <h1>Добро пожаловать в магазин!</h1>
      </main>
    </>
  );
}

export default App;





















// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App;









