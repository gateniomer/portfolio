import BrandIcon from "./BrandIcon";

export const BrandIconBar = () => {
  return (
    <div className='flex gap-8 shrink-0 animate-slideBrands'>
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
    </div>
  )
}

export default BrandIconBar;