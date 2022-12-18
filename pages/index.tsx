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
    <div className='page-container'>
      <Header/>
      <main className='flex flex-col md:flex-row place-items-center justify-center gap-5'>
        <h1 className='text-5xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, quisquam!</h1>
        <img className='md:w-5/12' src='https://cdn.pixabay.com/photo/2022/12/03/01/15/christmas-7631914_1280.jpg'/>
      </main>
      <section></section>
    </div>
  )
}
