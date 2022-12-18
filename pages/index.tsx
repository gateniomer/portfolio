import anime from 'animejs/lib/anime.es.js';
import { useEffect } from 'react';
import Header from '../components/Header';
import Badge from '../components/Badge';
import Card from '../components/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

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
    <div className='px-5 md:max-w-[1400px] mx-auto lg:py-[100px] '>
      <Header/>
      <main className='place-items-center justify-center gap-5'>
        <h2 className='leading-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, ea. <Badge>Designing UIs</Badge> <Badge background='#555'>Creating Projects</Badge></h2>
        <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 py-10 gap-10 mx-auto'>
          <Card 
          title='Next E-Store'
          description='Online store made using NextJS, Redux, Firebase & Stripe. Written in TypeScript, with implementation of Webhooks, self made API and much more!'
          imageUrl='/assets/project1.webp' 
          stack={['NextJS','TypeScript','React','Redux','Firebase','Stripe']}/>
          <Card 
          title='HTML & CSS Challenge'
          description='I tested my design and programming abilities by creating a website using only HTML and CSS.'
          imageUrl='/assets/project2.webp'
          stack={['HTML','CSS','Graphic Design']}/>
          <Card 
          title='Meditation Tracker Web App'
          description='Choose from a variety of different exercises to practice from using the countdown timer to stay focused, store many users on the same machine locally, and watch your past exercises (type, time & date).'
          imageUrl='/assets/project3.webp'
          stack={['React','TailwindCSS','API']}/>
          <Card 
          imageUrl='/assets/seemore.webp'
          />
        </div>
      </main>
      <section>
        <h2 className='text-5xl font-bold'>Contact Me</h2>
        <p className='mt-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, dicta?</p>
        <div className='flex gap-2 text-2xl place-items-center'>
          <a href='mailto:gateniomer@gmail.com'>gateniomer@gmail.com</a>
          <FontAwesomeIcon className='text-white bg-[#404cbd] p-3 rounded-lg' icon={faClipboard}/>
          <FontAwesomeIcon className='text-white bg-[#404cbd] p-3 rounded-lg' icon={faPaperPlane}/>
        </div>
      </section>
    </div>
  )
}
