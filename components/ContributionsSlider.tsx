import ContributionsBlock from "./ContributionsBlock";

export const ContributionsSlider = () => {
  return (
  <div className='overflow-hidden flex flex-row gap-[3px] max-w-[800px] rounded-sm mx-auto'>
  <ContributionsBlock className='animate-slide'/>
  <ContributionsBlock className='animate-slide'/>
  </div>)
}

export default ContributionsSlider;