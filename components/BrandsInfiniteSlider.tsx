import InfiniteSlider from "./InfiniteSlider";
import BrandIcon from "./BrandIcon";

export const BrandsInfiniteSlider = () => {
  return (
  <InfiniteSlider duration='20s'>
    <BrandIcon iconName='react'/>
    <BrandIcon iconName='redux'/>
    <BrandIcon iconName='nextjs'/>
    <BrandIcon iconName='typescript'/>
    <BrandIcon iconName='javascript'/>
    <BrandIcon iconName='firebase'/>
    <BrandIcon iconName='tailwind'/>
    <BrandIcon iconName='bootstrap'/>
    <BrandIcon iconName='sass'/>
    <BrandIcon iconName='html'/>
    <BrandIcon iconName='css'/>
    <BrandIcon iconName='git'/>
  </InfiniteSlider>
  )
}

export default BrandsInfiniteSlider;