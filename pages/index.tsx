import anime from 'animejs/lib/anime.es.js';
import { useEffect } from 'react';
import Header from '../components/Header';
import Badge from '../components/Badge';
import Card from '../components/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faClipboard, 
  faPaperPlane,
  faPhone,
  faFileWord,
  faFilePdf,
  faClock,
  faGraduationCap,
  faCodeBranch,
  faStar,
  faHippo, 
  faPeopleGroup,
  faEye,
  faNewspaper} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp,faLinkedin } from '@fortawesome/free-brands-svg-icons';
import ContributionsSlider from '../components/ContributionsSlider';
import BrandIconSlider from '../components/BrandIconSlider';
import LinkedinPost from '../components/LinkedinPost';

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
          stack={['NextJS','TypeScript','React','Redux','Firebase','Stripe']}
          live='https://nextapp-gilt.vercel.app/'
          source='https://github.com/gateniomer/nextapp'
          post='https://www.linkedin.com/posts/omer-gatenio_typescript-nextjs-react-activity-7004419967471267840-gGmI?utm_source=share&utm_medium=member_desktop'/>

          <Card 
          title='HTML & CSS Challenge'
          description='I tested my design and programming abilities by creating a website using only HTML and CSS.'
          imageUrl='/assets/project2.webp'
          stack={['HTML','CSS','Graphic Design']}
          live='https://gateniomer.github.io/HTML-CSS-Project/'
          source='https://github.com/gateniomer/HTML-CSS-Project'
          post='https://www.linkedin.com/posts/omer-gatenio_programming-design-css-activity-6982702852372586497-NU9q?utm_source=share&utm_medium=member_desktop'/>
          
          <Card 
          title='Meditation Tracker Web App'
          description='Choose from a variety of different exercises to practice from using the countdown timer to stay focused, store many users on the same machine locally, and watch your past exercises (type, time & date).'
          imageUrl='/assets/project3.webp'
          stack={['React','TailwindCSS','API']}
          live='https://cheerful-empanada-483be5.netlify.app/'
          source='https://github.com/gateniomer/meditation-app'
          post='https://www.linkedin.com/posts/omer-gatenio_%D7%99%D7%A6%D7%A8%D7%AA%D7%99-%D7%90%D7%A4%D7%9C%D7%99%D7%A7%D7%A6%D7%99%D7%94-%D7%9C%D7%9E%D7%A2%D7%A7%D7%91-%D7%90%D7%99%D7%9E%D7%95%D7%A0%D7%99-%D7%9E%D7%93%D7%99%D7%98%D7%A6%D7%99%D7%94-%D7%90%D7%A9%D7%9E%D7%97-activity-6980549655814152192-VPS6?utm_source=share&utm_medium=member_desktop'/>

          <Card 
          imageUrl='/assets/seemore.webp'
          live='https://github.com/gateniomer'
          callToAction={true}
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

      <section className='mt-[100px] max-w-[1200px] mx-auto'>
        <h2 className='text-4xl'>Active on LinkedIn <FontAwesomeIcon icon={faLinkedin}/></h2>
        <div className='inline-flex gap-3 md:gap-10 mx-auto my-2'>
            <span>
              <FontAwesomeIcon icon={faPeopleGroup}/> 1k+ followers</span>
            <span><FontAwesomeIcon icon={faEye}/> 30k+ impressions</span>
            <span><FontAwesomeIcon icon={faNewspaper}/> 10+ posts</span>
          </div>
        <p className='my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, soluta.</p>
        <div className='flex flex-col md:flex-row gap-5 justify-center place-items-stretch'>
                <LinkedinPost 
                iframeUrl='https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7005219495053037568'
                postUrl='https://www.linkedin.com/posts/omer-gatenio_%D7%A7%D7%A6%D7%AA-%D7%A2%D7%9C-%D7%9C%D7%9E%D7%99%D7%93%D7%94-%D7%A2%D7%A6%D7%9E%D7%99%D7%AA-activity-7005219495694745600-swRI?utm_source=share&utm_medium=member_desktop'/>
                <LinkedinPost 
                iframeUrl='https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6991396249262276608'
                postUrl='https://www.linkedin.com/posts/omer-gatenio_programming-selfstudy-fullstack-activity-6991396398243954688-q7vh?utm_source=share&utm_medium=member_desktop'/>
                <LinkedinPost 
                iframeUrl='https://www.linkedin.com/embed/feed/update/urn:li:share:6990412191774445568'
                postUrl='https://www.linkedin.com/posts/omer-gatenio_juniordeveloper-roadmapping-activity-6990412192734932993-xnw8?utm_source=share&utm_medium=member_desktop'/>
        </div>
      </section>

      <section className='mt-[100px] max-w-[1200px] mx-auto'>
        <h2 className='text-4xl'>Real Life Achivements <FontAwesomeIcon icon={faStar}/></h2>
        <p className='my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, soluta.</p>
        
      </section>

      <section className='mt-[100px] max-w-[1200px] mx-auto'>
        <h2 className='text-4xl'>Hey, I'm Omer <FontAwesomeIcon icon={faHippo}/></h2>
        <p className='my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, soluta.</p>
        
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
