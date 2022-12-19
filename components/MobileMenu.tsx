import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import NavBar from './NavBar';

type Props = {
  callback:(bool:boolean)=>void,
  className?:string
}

export const MobileMenu = ({callback,className}:Props) => {
  return (<div className={"text-xl fixed h-full w-52 px-5 py-2 shadow-lg bg-white z-10 top-0 right-0 md:hidden transition-all translate-x-96" + className}>
    <FontAwesomeIcon icon={faXmark} className='text-2xl cursor-pointer' onClick={()=>callback(false)}/>
    <NavBar/>
  </div>)
}

export default MobileMenu;