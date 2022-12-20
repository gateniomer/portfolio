import { faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer = () => {
  return (<footer className='p-5 border-t-2 flex flex-col gap-2 justify-center place-items-center'>
    <div className="flex gap-3 text-4xl justify-center place-items-center">
      <a href="https://www.linkedin.com/in/omer-gatenio/" target={'_blank'} rel="noreferrer"><FontAwesomeIcon icon={faLinkedin}/></a>
      <a href="https://github.com/gateniomer" target={'_blank'} rel="noreferrer"><FontAwesomeIcon icon={faGithub}/></a>
      <a href="https://wa.me/+972544930243" target={'_blank'} rel="noreferrer"><FontAwesomeIcon icon={faWhatsapp}/></a>
      <a href="mailto:gateniomer@gmail.com" target={'_blank'} rel="noreferrer"><FontAwesomeIcon icon={faEnvelope}/></a>
    </div>
  <span className="text-center">Design & Development by Omer Gatenio | Frontend Developer</span>
</footer>)
}

export default Footer;