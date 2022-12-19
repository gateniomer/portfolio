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
  faNewspaper,
  faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp,faLinkedin } from '@fortawesome/free-brands-svg-icons';
import ContributionsSlider from '../components/ContributionsSlider';
import BrandIconSlider from '../components/BrandIconSlider';
import LinkedinPost from '../components/LinkedinPost';
import ColoredHeadline from '../components/ColoredHeadline';
import ContactForm from '../components/ContactForm';

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
  
  
  const scrollPercent = () => {
    const bodyST = document.body.scrollTop;
    const docST = document.documentElement.scrollTop;
    const docSH = document.documentElement.scrollHeight;
    const docCH = document.documentElement.clientHeight;
    
    
    return (docST + bodyST) / (docSH - docCH) * 100
  }
  
  useEffect(()=>{
    const divAnimation = anime({
      targets: '.slide',
      scale: 2,
      // translateX: [0, 300, -600, 0],
      elasticity: 200,
      easing: 'easeInOutCubic',
      autoplay: false,
      // opacity: 0.7
    });
    // window.onscroll = () => {
    //   divAnimation.seek((scrollPercent() / 100) * divAnimation.duration);
    // };
  },[])

  
  return (
    <div className='px-5 md:max-w-[1500px] mx-auto lg:py-[70px] '>
      <Header/>
      <main className='place-items-center justify-center gap-5'>
        <p className='leading-10 max-w-[500px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, ea. <Badge>Designing UIs</Badge> <Badge background='#555'>Creating Projects</Badge></p>
        <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 py-10 gap-10 mx-auto'>
          <Card 
          title='Next E-Store'
          description='An online clothing store with a strong integration of Firebase and Stripe, allowing you to easily purchase products and view your order history.'
          imageUrl='/assets/project1.webp' 
          stack={['NextJS','TypeScript','React','Redux','Firebase','Stripe','API']}
          live='https://nextapp-gilt.vercel.app/'
          source='https://github.com/gateniomer/nextapp'
          post='https://www.linkedin.com/posts/omer-gatenio_typescript-nextjs-react-activity-7004419967471267840-gGmI?utm_source=share&utm_medium=member_desktop'/>

          <Card 
          title='HTML & CSS Challenge'
          description='Designed website made using only HTML and CSS.'
          imageUrl='/assets/project2.webp'
          stack={['HTML','CSS','Graphic Design']}
          live='https://gateniomer.github.io/HTML-CSS-Project/'
          source='https://github.com/gateniomer/HTML-CSS-Project'
          post='https://www.linkedin.com/posts/omer-gatenio_programming-design-css-activity-6982702852372586497-NU9q?utm_source=share&utm_medium=member_desktop'/>
          
          <Card 
          title='Meditation Tracker Web App'
          description='Keep track of various meditation practices. Explore new techniques and find inspiration for your meditation routine.'
          imageUrl='/assets/project3.webp'
          stack={['React','JavaScript','TailwindCSS','Local Storage','API']}
          live='https://cheerful-empanada-483be5.netlify.app/'
          source='https://github.com/gateniomer/meditation-app'
          post='https://www.linkedin.com/posts/omer-gatenio_%D7%99%D7%A6%D7%A8%D7%AA%D7%99-%D7%90%D7%A4%D7%9C%D7%99%D7%A7%D7%A6%D7%99%D7%94-%D7%9C%D7%9E%D7%A2%D7%A7%D7%91-%D7%90%D7%99%D7%9E%D7%95%D7%A0%D7%99-%D7%9E%D7%93%D7%99%D7%98%D7%A6%D7%99%D7%94-%D7%90%D7%A9%D7%9E%D7%97-activity-6980549655814152192-VPS6?utm_source=share&utm_medium=member_desktop'/>

          <Card 
          imageUrl='/assets/seemore.webp'
          live='https://github.com/gateniomer'
          callToAction={true}
          />
        </div>
        <BrandIconSlider/>

      </main>
      


      <section className='py-[100px] max-w-[1200px] mx-auto' id='learn'>
      <ColoredHeadline
      before="It's all about"
      text='Learning'
      color='#E5BA73'
      />
        <p className='my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, soluta.</p>
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

      <section className='py-[100px] max-w-[1200px] mx-auto'>
      <ColoredHeadline
      before='Real life'
      text='Achievements'
      color='#F87171'
      />
        <p className='my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, soluta.</p>
        
      </section>


      <section className='py-[100px] max-w-[1200px] mx-auto'>
      <ColoredHeadline
      before="I'm documenting"
      text='My Journey'
      color='#3B82F6'
      />
        <div className='inline-flex gap-3 md:gap-10 mx-auto my-2'>
            <span>
              <FontAwesomeIcon icon={faPeopleGroup}/> 1k+ followers</span>
            <span><FontAwesomeIcon icon={faEye}/> 30k+ impressions</span>
            <span><FontAwesomeIcon icon={faNewspaper}/> 10+ posts</span>
          </div>
        <p className='my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, soluta.</p>
        <div className='flex flex-wrap gap-5 justify-center place-items-center'>
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

      
      <section id='about' className='py-[100px] max-w-[900px] mx-auto flex flex-col md:flex-row gap-10'>
        <div className='overflow-hidden max-w-[90%] md:max-w-[400px] mx-auto shrink-0 rounded-full shadow-lg'>
          <img src="/assets/profile.webp" className='object-cover h-[100%]' alt="" />
        </div>

        <div>
          <ColoredHeadline
        before='Little bit'
        text='About Me'
        color='#F87171'
        />
        <p className='my-5 text-lg'>Independent self-taught developer with a proven track record of creating useful applications, such as Psycho-Trainer. Former team leader with strong interpersonal and problem-solving abilities. Possess strong passion for developing ideas from scratch while being organized, productive, and motivated by challenges.</p>
        </div>
        
      </section>

      <section id='contact' className='py-[100px] max-w-[1200px] mx-auto'>
        <ContactForm/>
      </section>

    </div>
  )
}
