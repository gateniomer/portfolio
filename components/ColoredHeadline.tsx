type Props = {
  before?:string,
  text:string,
  after?:string,
  color?:string
}

export const ColoredHeadline = ({before,text,after,color}:Props) => {
  return (<h2 className='text-5xl font-black leading-tight'>{before} <span className='block' style={{color}}>{text}</span> {after}</h2>)
}
export default ColoredHeadline;