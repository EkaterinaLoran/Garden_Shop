import React from 'react'; 
import Logo from './Logo';
 import ThemeToggle from './ThemeToggle';
  import DiscountBanner from './DiscountBanner';
   import NavMenu from './NavMenu';
    import HeartIcon from './Icons/HeartIcon';
     import CartIcon from './Icons/CartIcon';
      import './Header.css'; 
import App from './DiscountBanner/DiscountBanner';
      
      
      const Header = () => { return ( <header className="header"> <div className="header-top"> <Logo /> <ThemeToggle /> </div> <DiscountBanner /> <div className="header-bottom"> <NavMenu /> <div className="header-icons"> <a href="#" className="icon-link"> <HeartIcon /> </a> <a href="#" className="icon-link"> <CartIcon /> </a> </div> </div> </header> ); }; 


export default App;












//import S from "./Header.module.css";

// export function Header(props) {
//     return (
//         <></>
//     )
// }