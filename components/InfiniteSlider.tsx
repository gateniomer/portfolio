
type Props = {
  children?:any,
  width?:string,
  duration?:string,
  gap?:number
}
export const InfiniteSlider = ({children,width='100%',duration='10s',gap=40}:Props) => {
  const classes = `inline-flex animate-infiniteSlide shrink-0`;
  const styles = {
    animationDuration:duration,
    gap:gap+'px',
    paddingRight:gap+'px'
  }

  return (
    <div className={`overflow-hidden flex py-1 mx-auto`} style={{maxWidth:width}}>
      <div 
      className={classes} 
      style={styles}>
        {children}
      </div>
      <div 
      className={classes}
      style={styles}>
        {children}
      </div>
    </div>
  )
}

export default InfiniteSlider;