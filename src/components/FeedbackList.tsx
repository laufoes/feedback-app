import { useContext } from 'react'
import { FeedbackContext, FeedbackDataProps } from '../context/FeedbackContext';
import FeedbackItem from "./FeedbackItem";

function FeedbackList() {
    const  { feedback, setFeedback } = useContext<FeedbackDataProps>(FeedbackContext);

    if ( !feedback.values || feedback.length === 0) {
        return <p>No feedback available yet.</p>
    }

    console.log(feedback)
    return (
        <div className='container max-w-3xl m-auto py-0'>
            {feedback.map((item) => (
               <FeedbackItem key={item.id} item={item} />
            ))}

        </div>
    )
}

export default FeedbackList
