import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import NavBar from './NavBar';

type Props = {
  callback:(bool:boolean)=>void
}

export const MobileMenu = ({callback}:Props) => {
  return (<div className="h-full w-52 px-5 py-2 bg-slate-400 absolute top-0 right-0 animate-mobile-menu-enter md:hidden">
    <FontAwesomeIcon icon={faXmark} className='text-2xl text-white cursor-pointer' onClick={()=>callback(false)}/>
    <h2>Hello Mobile Menu</h2>
    <NavBar/>
  </div>)
}

export default MobileMenu;