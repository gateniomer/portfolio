
type Props = {
  children?:any,
  width?:string,
  duration?:string
}
export const InfiniteSlider = ({children,width='100%',duration='10s'}:Props) => {
  return (
    <div className='overflow-hidden flex gap-2 py-1 mx-auto' style={{maxWidth:width}}>
      <div 
      className='inline-flex animate-infiniteSlide shrink-0 gap-2' 
      style={{animationDuration:duration}}>
        {children}
      </div>
      <div 
      className='inline-flex animate-infiniteSlide shrink-0 gap-2' 
      style={{animationDuration:duration}}>
        {children}
      </div>
    </div>
  )
}

export default InfiniteSlider;