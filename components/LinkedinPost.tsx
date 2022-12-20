import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

type Props = {
  iframeUrl:string,
  postUrl:string
}

export const LinkedinPost = ({iframeUrl,postUrl}:Props) => {
  return (
    <div className="w-[350px] max-w-[100%]">
      <iframe
      src={iframeUrl}
      className='shadow-lg w-full h-[300px] border-[5px] rounded-sm'>
      </iframe>
      <a href={postUrl}
      target='_blank'
      rel="noreferrer"
      className='inline-block  rounded-sm text-white w-full text-center bg-blue-500 px-6 py-2'>
        Keep reading on LinkedIn <FontAwesomeIcon icon={faLinkedin}/>
      </a>
    </div>
  )
}

export default LinkedinPost;