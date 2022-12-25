import Badge from "./Badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputerMouse, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import InfiniteSlider from "./InfiniteSlider";
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
    <div className="rounded-lg overflow-hidden flex flex-col">
      
      <a href={live} target={'_blank'} rel="noreferrer">
      <div className="relative overflow-hidden shadow-lg">
      <img src={imageUrl} alt="" className='w-full rounded-lg cursor-pointer hover:scale-110 transition-all relative'/>
      {!callToAction && <span className="absolute bottom-0 left-0 p-2 rounded-tr-lg bg-white text-sm font-bold"><FontAwesomeIcon icon={faComputerMouse}/> Live preview</span>}
      </div>
      </a>
      <a href={live} target={'_blank'} rel="noreferrer">
        <h3 className='font-bold lg:text-lg md:text-2xl text-xl mt-5'>{title}</h3>
      </a>

      

      <div className="my-2 text-xs md:flex gap-2 flex-wrap hidden">
        {stack && stack.map((tech,index) => <Badge key={index}>{tech}</Badge>)}
      </div>

      <div className="md:hidden text-sm">
      {stack && <InfiniteSlider gap={10}>
        {stack && stack.map((tech,index) => <Badge key={index}>{tech}</Badge>)}
        </InfiniteSlider>}
      </div>

      <p className='text-md my-3 text-ellipsis overflow-hidden'>{description}</p>

      {!callToAction && <div className="flex md:flex-row flex-col gap-1 md:gap-3 text-md  font-bold mt-auto">
        <a 
        href={source} 
        target={'_blank'}
        rel="noreferrer"
        className="hover:text-slate-500 transition-all">
          <FontAwesomeIcon icon={faGithub}/> Source Code
        </a>

        <a 
        href={post} 
        target={'_blank'}
        rel="noreferrer"
        className="hover:text-slate-500 transition-all">
          <FontAwesomeIcon icon={faLinkedin}/> Read More
        </a>
      </div>}
    </div>
  )
}

export default Card;