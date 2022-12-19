import BrandIconBar from "./BrandIconBar";

export const BrandIconSlider = () => {
  return (
    <div className="flex gap-8 overflow-x-hidden py-2 max-w-[1200px] mx-auto rounded-lg">
      <BrandIconBar/>
      <BrandIconBar/>
    </div>
  )
}

export default BrandIconSlider;