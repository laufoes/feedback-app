import { Link } from 'react-router-dom'

import Card from "../components/Card"

function AboutPage() {
  return (
    <Card>
        <h2 className='text-5xl font-bold text-center text-secondary mt-3 mb-6'>About the Project.</h2>
        <p className='py-4'>This is a React app to leave your feedback for a product or service.</p>
        <p className='text-base text-disabled'>Version: 1. 0.0</p>
        <p className='text-base pt-4 text-secondary cursor-pointer hover:text-bgRating transition-all'>
            <Link to='/'>Back To Home</Link>
        </p>
    </Card>
  )
}

export default AboutPage