import BrandIconBar from "./BrandIconBar";

export const BrandIconSlider = () => {
  return (
    <div className="flex gap-8 overflow-x-hidden py-2 mx-auto rounded-lg">
      <BrandIconBar/>
      <BrandIconBar/>
    </div>
  )
}

export default BrandIconSlider;