import anime from 'animejs/lib/anime.es.js';
import { useEffect } from 'react';
import Header from '../components/Header';
import Badge from '../components/Badge';
import Card from '../components/Card';

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
    <div className='px-5 md:px-24 md:py-10'>
      <Header/>
      <main className='place-items-center justify-center gap-5'>
        <h2 className='leading-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, ea. <Badge text='Designing UIs'/> <Badge text='Creating Projects' background='#555'/></h2>
        <div className='grid grid-cols-1 md:grid-cols-2 py-10'>
          <Card/>
          <Card/>
        </div>
      </main>
      <section></section>
    </div>
  )
}
