type Props = {
  text:string,
  color?:string,
  background?:string
}

export const Badge = ({text,color='#fff',background='#333'}:Props) => {
  return (
    <span className={`bg-[#333] rounded-lg px-3 py-1 font-bold text-[#fff]`}>
      {text}
    </span>
  )
}

export default Badge;