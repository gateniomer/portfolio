import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import NavBar from './NavBar';
import Footer from './Footer';

type Props = {
  callback:(bool:boolean)=>void,
  className?:string
}

export const MobileMenu = ({callback,className}:Props) => {
  return (<div className={"text-2xl fixed h-full w-56 p-5 shadow-lg bg-white z-10 top-0 right-0 md:hidden transition-all translate-x-96" + className}>
    <div className='flex flex-col place-items-start w-full h-full'>
    <FontAwesomeIcon icon={faXmark} className='text-2xl cursor-pointer mb-3' onClick={()=>callback(false)}/>
    <NavBar/>
    <div className='text-xs self-stretch mt-auto'>
      <Footer/>
    </div>
    </div>
    
  </div>)
}

export default MobileMenu;