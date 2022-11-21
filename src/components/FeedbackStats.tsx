import { useContext } from 'react'
import { FeedbackContext, FeedbackDataProps } from '../context/FeedbackContext';

function FeedbackStats() {
  const { feedback } = useContext<FeedbackDataProps>(FeedbackContext);

  let average = feedback.reduce((acc, cur) => {
    return acc + cur.rating
  }, 0) / feedback.length
  
  const avgRating = average.toFixed(1).replace(/[.,]0$/, '')

  return (
    <div className='flex justify-between font-bold'>
        <h4>{ feedback.length } Reviews</h4>
        <h4>Average Rating: {isNaN(average) ? 0 : avgRating}</h4>
    </div>
  )
}

export default FeedbackStats
