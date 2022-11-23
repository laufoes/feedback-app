import { Link } from 'react-router-dom'
import { FaQuestion } from 'react-icons/fa'

function AboutIconLink() {
  return (
    <div className='flex top-0 justify-end mr-10 cursor-pointer'>
        <Link to='/about'>
            <FaQuestion size={30} className='hover:fill-secondary transition-colors'/>
        </Link>
    </div>
  )
}

export default AboutIconLink
