import Badge from "./Badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputerMouse, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
type Props = {
  title?:string,
  description?:string,
  imageUrl:string,
  stack?:string[],
  live:string,
  source?:string,
  post?:string,
  callToAction?:boolean
}
export const Card = ({title,description,imageUrl,stack,live,source,post,callToAction}:Props) => {
  return (
    <div className="rounded-lg overflow-hidden">
      
      <a href={live} target={'_blank'}>
      <div className="relative overflow-hidden shadow-lg">
      <img src={imageUrl} alt="" className='w-full rounded-lg cursor-pointer hover:scale-110 transition-all relative'/>
      {!callToAction && <span className="absolute bottom-0 left-0 p-2 rounded-tr-lg bg-white text-sm font-bold"><FontAwesomeIcon icon={faComputerMouse}/> Live preview</span>}
      </div>
      </a>
      <a href={live} target={'_blank'}>
        <h3 className='font-black mt-5'>{title}</h3>
      </a>

      {!callToAction && <div className="flex gap-3 text-sm">
        <a 
        href={source} 
        target={'_blank'}
        className="hover:text-slate-500 transition-all">
          <FontAwesomeIcon icon={faGithub}/> Source Code
        </a>

        <a 
        href={post} 
        target={'_blank'}
        className="hover:text-slate-500 transition-all">
          <FontAwesomeIcon icon={faLinkedin}/> Read More
        </a>
      </div>}

      <div className="my-2 text-xs flex gap-2 flex-wrap">
        {stack && stack.map((tech,index) => <Badge key={index}>{tech}</Badge>)}
      </div>
      <p className='text-sm mt-3'>{description}</p>
      <a href=""></a> 
    </div>
  )
}

export default Card;