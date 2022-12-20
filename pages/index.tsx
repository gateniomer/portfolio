import Header from '../components/Header';
import Card from '../components/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faClock,
  faGraduationCap,
  faCodeBranch,
  faPeopleGroup,
  faEye,
  faNewspaper,
  faSignsPost,
} from '@fortawesome/free-solid-svg-icons';
import ContributionsSlider from '../components/ContributionsSlider';
import BrandIconSlider from '../components/BrandIconSlider';
import LinkedinPost from '../components/LinkedinPost';
import ColoredHeadline from '../components/ColoredHeadline';
import ContactForm from '../components/ContactForm';

export default function Home() {

  
  return (
    <div className='px-5 md:max-w-[1500px] mx-auto lg:py-[70px] '>
      <Header/>
      <main className='my-5'>
        <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 md:gap-10 gap-20 mx-auto mb-10'>
          <Card 
          title='Next E-Store'
          description='An online clothing store with a strong integration of Firebase and Stripe, allowing you to easily purchase products and view your order history.'
          imageUrl='assets/project1.webp' 
          stack={['NextJS','TypeScript','React','Redux','Firebase','Stripe','API']}
          live='https://nextapp-gilt.vercel.app/'
          source='https://github.com/gateniomer/nextapp'
          post='https://www.linkedin.com/posts/omer-gatenio_typescript-nextjs-react-activity-7004419967471267840-gGmI?utm_source=share&utm_medium=member_desktop'/>

          <Card 
          title='HTML & CSS Challenge'
          description='Designed website made using only HTML and CSS.'
          imageUrl='assets/project2.webp'
          stack={['HTML','CSS','Graphic Design']}
          live='https://gateniomer.github.io/HTML-CSS-Project/'
          source='https://github.com/gateniomer/HTML-CSS-Project'
          post='https://www.linkedin.com/posts/omer-gatenio_programming-design-css-activity-6982702852372586497-NU9q?utm_source=share&utm_medium=member_desktop'/>
          
          <Card 
          title='Meditation Tracker Web App'
          description='Keep track of various meditation practices. Explore new techniques and find inspiration for your meditation routine.'
          imageUrl='assets/project3.webp'
          stack={['React','JavaScript','TailwindCSS','Local Storage','API']}
          live='https://cheerful-empanada-483be5.netlify.app/'
          source='https://github.com/gateniomer/meditation-app'
          post='https://www.linkedin.com/posts/omer-gatenio_%D7%99%D7%A6%D7%A8%D7%AA%D7%99-%D7%90%D7%A4%D7%9C%D7%99%D7%A7%D7%A6%D7%99%D7%94-%D7%9C%D7%9E%D7%A2%D7%A7%D7%91-%D7%90%D7%99%D7%9E%D7%95%D7%A0%D7%99-%D7%9E%D7%93%D7%99%D7%98%D7%A6%D7%99%D7%94-%D7%90%D7%A9%D7%9E%D7%97-activity-6980549655814152192-VPS6?utm_source=share&utm_medium=member_desktop'/>

          <Card 
          imageUrl='assets/seemore.webp'
          live='https://github.com/gateniomer'
          callToAction={true}
          />
        </div>
        <BrandIconSlider/>

      </main>
      


      <section className='pt-[150px] max-w-[1200px] mx-auto' id='what_i_do'>
        <div className='lg:flex gap-5 place-items-center'>
          <div>
          <ColoredHeadline
      before="It's all about"
      text='Learning & Adapting'
      color='#E5BA73'
      />
        <p className='my-5 max-w-[650px]'>I am great at learning and adopting new technologies. As part of my self-learning journey, I have successfully learned and integrated numerous new technologies into my skill set while making comprehensive projects. (see above)</p>
        <p className='my-5 max-w-[650px]'>The following animation shows the progress and dedication I had towards my journey during 2022 based on Github (excluding theoretical learning)</p>
          </div>
          <div className='lg:w-[50%]'>
          <div className='flex gap-3 md:gap-10 my-2 md:text-lg justify-center'>
            <span>
              <FontAwesomeIcon icon={faCodeBranch}/> 823 contributions</span>
            <span><FontAwesomeIcon icon={faClock}/> 1000+ hours</span>
            <span><FontAwesomeIcon icon={faGraduationCap}/> 8 courses</span>
          </div>
          <ContributionsSlider/>
        </div>
        </div>
      

      </section>

      <section className='pt-[150px] max-w-[1200px] mx-auto'>
        <div className='lg:flex gap-5 place-items-center'>
          <div>
            <ColoredHeadline
              before='Real-world'
              text='Initiatives'
              color='#F87171'/>
            <p className='my-5 max-w-[650px]'>I am highly motivated to turn my ideas into reality and have a strong passion for planning, designing, and developing projects and initiatives that can benefit myself and others.</p>
            <p className='my-5 max-w-[650px]'>
              I have previously created several projects that have helped a significant number of people:
            </p>
            <ul className='text-md'>
              <li><strong>❖ Psycho-Trainer:</strong> psychometric training app with over 4k downloads on Google Play.</li>
              <li><strong>❖ OmerSites (Founder):</strong> WordPress website building company.</li>
              <li><strong>❖ CCNA Training:</strong> training app for the CCNA exams by CISCO.</li>
            </ul>
          </div>
          <div>
            <img src={"assets/realworld.webp"} alt="" />
          </div>
        </div>
      
      </section>


      <section className='pt-[150px] max-w-[1200px] mx-auto'>
      <ColoredHeadline
      before="I'm sharing"
      text='My Journey'
      color='#3B82F6'
      />
        <div className='inline-flex gap-3 md:gap-10 mt-3 mx-auto my-2 text-center'>
            <span>
              <FontAwesomeIcon icon={faPeopleGroup}/> 1k+ followers</span>
            <span><FontAwesomeIcon icon={faEye}/> 30k+ impressions</span>
            <span><FontAwesomeIcon icon={faNewspaper}/> 10+ posts</span>
          </div>
        <p className='my-5 max-w-[650px]'>I am actively using LinkedIn to share my learning journey, useful resources that I come across, and provide information about myself. <a 
        target={'_blank'}
        rel="noreferrer"
        href="https://www.linkedin.com/in/omer-gatenio/" 
        className='underline font-bold'>Check me out</a></p>
        <div className='flex flex-wrap gap-5 place-items-center'>
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

      
      <section id='about' className='pt-[150px] max-w-[900px] mx-auto flex flex-col md:flex-row gap-10'>
        <div className='overflow-hidden max-w-[80%] md:max-w-[400px] mx-auto shrink-0 rounded-full shadow-lg'>
          <img src={"assets/profile.webp"} className='object-cover h-[100%]' alt="" />
        </div>

        <div>
          <ColoredHeadline
        before='Little bit'
        text='About Me'
        color='#F87171'
        />
        <p className='mt-5 text-lg'>Independent self-taught developer with a proven track record of creating useful applications, such as Psycho-Trainer. Former team leader with strong interpersonal and problem-solving abilities. Possess strong passion for developing ideas from scratch while being organized, productive, and motivated by challenges.</p>
        <p className='text-lg mt-2 font-semibold'>Always looking for new opportunities <FontAwesomeIcon icon={faSignsPost} className='text-2xl ml-2'/></p>
        </div>
        
      </section>

      <section id='contact' className='pt-[150px] max-w-[1200px] mx-auto lg:mb-0 mb-10'>
        <ContactForm/>
      </section>

    </div>
  )
}
