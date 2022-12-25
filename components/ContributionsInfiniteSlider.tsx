import ContributionsBlock from "./ContributionsBlock";
import InfiniteSlider from "./InfiniteSlider";

export const ContributionsInfiniteSlider = () => {
  return (
  <InfiniteSlider gap={3} duration={'25s'}>
    <ContributionsBlock/>
  </InfiniteSlider>)
}

export default ContributionsInfiniteSlider;