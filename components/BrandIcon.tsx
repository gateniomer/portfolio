
type Props = {
  iconName:string
}
export const BrandIcon = ({iconName}:Props) => {
  return (
    <div className="text-center">
      <img src={"assets/brands/" + iconName + ".svg"} alt="react" className="w-24 h-24 hover:scale-110 transition-all" />
      <span className="inline-block mt-2 font-bold">{iconName}</span>
    </div>
  )
}

export default BrandIcon;