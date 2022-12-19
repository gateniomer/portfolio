import ContributionsBlock from "./ContributionsBlock";

export const ContributionsSlider = () => {
  return (
  <div className='slide overflow-hidden flex flex-row gap-[3px] max-w-[700px] rounded-sm'>
  <ContributionsBlock className='animate-slide'/>
  <ContributionsBlock className='animate-slide'/>
  </div>)
}

export default ContributionsSlider;