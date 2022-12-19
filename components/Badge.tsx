import { ReactNode } from "react";
type Props = {
  color?:string,
  background?:string,
  children: ReactNode
}

export const Badge = ({color='#fff',background='#333',children}:Props) => {
  return (
    <span className={`bg-[#333] rounded-md px-3 py-1 font-bold text-[#fff]`}>
      {children}
    </span>
  )
}

export default Badge;