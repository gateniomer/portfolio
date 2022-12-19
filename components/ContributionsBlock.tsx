import { contributions } from "../utils/contributes";
type Props = {
  className?:string
}
export const ContributionsBlock = ({className}:Props) => {
  return (
  <div className={'flex gap-[3px] ' + className}>
  {contributions.weeks.map((week,col)=>
  <div key={col} className='flex flex-col gap-[3px]'>
    {week.contributionDays.map((day,row)=>
    <div 
    key={row}
    className={'w-[20px] h-[20px] rounded-sm ' +
    ((day.color!='var(--contribution-color-none)')?'animate-grow':'')}
    style={{backgroundColor:day.color}}/>)}
  </div>)}
</div>)
}

export default ContributionsBlock;