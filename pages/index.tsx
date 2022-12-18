import anime from 'animejs/lib/anime.es.js';
import { useEffect } from 'react';
import Header from '../components/Header';

export default function Home() {
  
  useEffect(()=>{
    anime({
      targets: 'header',
      // translateY: 100,
      // rotate: '1turn',
      // backgroundColor: '#2e2e2e',
      duration: 1000
    });
  },[])
  
  return (
    <div className='px-5 md:px-12'>
      <Header/>
      <main className='flex flex-col md:flex-row place-items-center justify-center gap-5'>
        <div>
        <h1 className='text-5xl'>Lorem ipsum dolor sit amet.   </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.      Dolore, tempore qui dignissimos repudiandae vero quos exercitationem hic magni fuga praesentium?</p>
        </div>
        <img className='md:w-6/12 h-[300px] object-cover rounded-lg' src='https://scontent.fhfa4-1.fna.fbcdn.net/v/t1.6435-9/38759325_1157093207764173_7231018316913967104_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=wF1ZOhF72r4AX_Lnlod&_nc_ht=scontent.fhfa4-1.fna&oh=00_AfARn7K7Qs-nhxiTBLdqj2iFBs3YHwQY5AdnvWLhggLlpw&oe=63C679E1'/>
      </main>
      <section></section>
    </div>
  )
}
