import Badge from "./Badge";
type Props = {
  title?:string,
  description?:string,
  imageUrl:string,
  stack?:string[]
}
export const Card = ({title,description,imageUrl,stack}:Props) => {
  return (
    <div>
      <img src={imageUrl} alt="" className='w-full shadow-lg rounded-lg cursor-pointer hover:scale-110 transition-all'/>
      <h3 className='font-black mt-5'>{title}</h3>
      <div className="my-2 text-sm flex gap-2 flex-wrap">
        {stack && stack.map((tech,index) => <Badge key={index}>{tech}</Badge>)}
      </div>
      <p className='text-sm py-5'>{description}</p>
      <a href=""></a> 
    </div>
  )
}

export default Card;