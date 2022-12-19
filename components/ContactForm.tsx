import ColoredHeadline from "./ColoredHeadline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard,faPaperPlane,faFileWord,faFilePdf,faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";


const Button = ({icon}:{icon:IconProp}) =>{
  return (<div className='flex justify-center place-items-center w-12 h-12 rounded-lg bg-blue-600 text-white text-2xl cursor-pointer hover:scale-105 transition-all'><FontAwesomeIcon icon={icon}/></div>)
}

export const ContactForm = () => {
  return (<div className='mx-auto shadow-lg p-8 max-w-[600px]'>
  <ColoredHeadline
  before='Feel free to'
  text='Get in touch'
  color='#F87171'
  />
    <p className='my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, soluta.</p>
    <div className='flex flex-col gap-3'>
      <div className='flex gap-3 place-items-center justify-between'>
        <a href='mailto:gateniomer@gmail.com' className="font-bold text-lg">gateniomer@gmail.com</a>
        <div className='flex gap-1'>
          <Button icon={faPaperPlane}/>
          <Button icon={faClipboard}/>
        </div>
      </div>
      <div className='flex gap-3 place-items-center justify-between'>
        <a href='tel:0544930243' className="font-bold text-lg">054-4930243</a>
        <div className='flex gap-1'>
          <Button icon={faPhone}/>
          <Button icon={faWhatsapp}/>
        </div>
      </div>
      <div className='flex gap-3 place-items-center justify-between'>
        <span className="font-bold text-lg">Download my Resume</span>
        <div className='flex gap-1'>
          <Button icon={faFileWord}/>
          <Button icon={faFilePdf}/>
        </div>
      </div>
    </div>
  </div>)
}

export default ContactForm;