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
  return (<div className='flex gap-3 place-items-center justify-between bg-gradient-to-r from-indigo-500 text-white rounded-lg px-2 py-1 hover:bg-indigo-200 transition-all'>
    {children}
  </div>)
}

export const ContactForm = () => {
  return (<div className='mx-auto shadow-lg p-3 md:p-8 max-w-[600px]'>
  <ColoredHeadline
  before='Feel free to'
  text='Get in touch.'
  color='#6366F1'
  />
    <p className='my-5'>I am seeking a full-time Front-End position where I can utilize my skills and passion for developing comprehensive solutions for customers and end users.</p>
    <div className='flex flex-col gap-3'>
      <Row>
        <a href='mailto:gateniomer@gmail.com' className="font-bold text-xl">gateniomer@gmail.com</a>
        <div className='flex gap-2'>
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
      <Row>
        <a href='tel:0544930243' className="font-bold text-xl">054-4930243</a>
        <div className='flex gap-2'>
          <a 
          target={'_blank'}
          rel="noreferrer"
          href="tel:0544930243">
            <Button icon={faPhone}/>
          </a>
          <a 
          target={'_blank'}
          rel="noreferrer"
          href="https://wa.me/+972544930243">
            <Button icon={faWhatsapp}/>
          </a>
        </div>
      </Row>
      <Row>
        <span className="font-bold text-xl">Download Resume</span>
        <div className='flex gap-2'>
          <a href={"files/Omer Gatenio FE CV.docx"} download><Button icon={faFileWord}/></a>
          <a href={"files/Omer Gatenio FE CV.pdf"} download><Button icon={faFilePdf}/></a>
        </div>
      </Row>
    </div>
  </div>)
}

export default ContactForm;