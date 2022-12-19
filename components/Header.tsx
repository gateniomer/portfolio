import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import NavBar from "./NavBar";

export const Header = () => {
  const [isMobileMenuOpen,setIsMobileMenuOpen] = useState(false);
  return (
  <header className='flex place-content-between py-5 place-items-center'>
    <a href="/"><h1 className='md:text-5xl text-4xl font-bold'>Omer Gatenio</h1></a>
    <div className="hidden md:block">
      <NavBar/>
    </div>
    <div className="cursor-pointer text-2xl md:hidden" onClick={()=>setIsMobileMenuOpen(prev=>!prev)}>
      <FontAwesomeIcon icon={faBars} className='text-3xl'/>
    </div>
    <MobileMenu callback={setIsMobileMenuOpen} 
    className={isMobileMenuOpen? 'show' : ''}/>
  </header>)
}

export default Header;