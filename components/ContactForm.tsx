import ColoredHeadline from "./ColoredHeadline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard,faPaperPlane,faFileWord,faFilePdf,faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ReactNode } from "react";


const Button = ({icon}:{icon:IconProp}) =>{
  return (<div className='flex justify-center place-items-center w-12 h-12 rounded-lg bg-indigo-500 text-white text-2xl cursor-pointer hover:scale-105 transition-all'><FontAwesomeIcon icon={icon}/></div>)
}

const Row = ({children}:{children:ReactNode}) => {
  return (<div className='flex flex-col md:flex-row gap-3 md:place-items-center justify-between bg-gradient-to-r from-indigo-500 text-white rounded-lg px-2 py-1 hover:bg-indigo-200 transition-all'>
    {children}
  </div>)
}

export const ContactForm = () => {
  return (<div className='mx-auto shadow-lg p-3 md:p-8 max-w-[600px]'>
  <ColoredHeadline
  before='Feel free to'
  text='get in touch.'
  color='#6366F1'
  />
    <p className='my-5'>Thank you for viewing my portfolio.</p>
    <div className='flex flex-col gap-3'>
      <Row>
        <a href='mailto:gateniomer@gmail.com' className="font-bold text-2xl break-words">gateniomer@gmail.com</a>
        <div className='flex gap-2 self-end'>
          <a 
          target={'_blank'}
          rel="noreferrer"
          href="mailto:gateniomer@gmail.com"><Button icon={faPaperPlane}/></a>
          <a onClick={(e)=>{
            e.preventDefault();
            navigator.clipboard.writeText('gateniomer@gmail.com');
            alert("'gateniomer@gmail.com' copied to clipboard.")
            }} target={'_blank'} rel="noreferrer"><Button icon={faClipboard}/></a>
        </div>
      </Row>
    </div>
  </div>)
}

export default ContactForm;