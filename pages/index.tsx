import anime from 'animejs/lib/anime.es.js';
import { useEffect } from 'react';
import Header from '../components/Header';
import Badge from '../components/Badge';
import Card from '../components/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard, faPaperPlane,faPhone,faFileWord,faFilePdf,faClock,faGraduationCap,faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import ContributionsSlider from '../components/ContributionsSlider';
import BrandIconSlider from '../components/BrandIconSlider';

export default function Home() {
  
  // useEffect(()=>{
  //   anime({
  //     targets: 'header',
  //     // translateY: 100,
  //     // rotate: '1turn',
  //     // backgroundColor: '#2e2e2e',
  //     duration: 1000
  //   });
  // },[])

  
  return (
    <div className='px-5 md:max-w-[1500px] mx-auto lg:py-[70px] '>
      <Header/>
      <main className='place-items-center justify-center gap-5'>
        <p className='leading-10 max-w-[500px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, ea. <Badge>Designing UIs</Badge> <Badge background='#555'>Creating Projects</Badge></p>
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
      <BrandIconSlider/>
        <div className='text-center'>
          <ContributionsSlider/>
          <div className='inline-flex gap-3 md:gap-10 mx-auto my-2'>
            <span>
              <FontAwesomeIcon icon={faCodeBranch}/> 823 contributions</span>
            <span><FontAwesomeIcon icon={faClock}/> 1000+ hours</span>
            <span><FontAwesomeIcon icon={faGraduationCap}/> 8 courses</span>
          </div>
          </div>
      </section>

      <div>
          <h2 className='text-4xl'>I'm Active on Linkedin</h2>
          {/* Linkedin Posts */}
      </div>
      <section>
        <h2>Real Life Achivements</h2>
      </section>
      
      <section>
        <h2>About</h2>
      </section>
      <section className='max-w-[400px]'>
        <h2 className='text-5xl font-bold'>Get in touch</h2>
        <p className='mt-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, dicta?</p>
        <div className='flex gap-2 text-2xl place-items-center'>
          <a href='mailto:gateniomer@gmail.com'>gateniomer@gmail.com</a>
          <FontAwesomeIcon className='text-white bg-[#404cbd] p-3 rounded-lg' icon={faClipboard}/>
          <FontAwesomeIcon className='text-white bg-[#404cbd] p-3 rounded-lg' icon={faPaperPlane}/>
        </div>
        <div className='flex text-2xl place-items-center place-content-between'>
          <a href='tel:0544930243'>054-4930243</a>
          <div className='flex gap-2'>
            <FontAwesomeIcon className='text-white bg-[#404cbd] p-3 rounded-lg' icon={faPhone}/>
            <FontAwesomeIcon className='text-white bg-[#404cbd] p-3 rounded-lg' icon={faWhatsapp}/>
          </div>
        </div>
        <div className='flex text-2xl place-items-center place-content-between h-[100px]'>
          <span>Download my Resume</span>
          <div className='flex gap-2'>
            <FontAwesomeIcon className='text-white bg-[#404cbd] w-16 h-16 rounded-lg' icon={faFileWord}/>
            <FontAwesomeIcon className='text-white bg-[#404cbd] p-3 rounded-lg' icon={faFilePdf}/>
          </div>
        </div>
      </section>
    </div>
  )
}
