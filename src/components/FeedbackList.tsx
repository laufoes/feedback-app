import { useContext } from 'react'
import { FeedbackContext, FeedbackDataProps } from '../context/FeedbackContext';
import FeedbackItem from "./FeedbackItem";

function FeedbackList() {
    const  { feedback } = useContext<FeedbackDataProps>(FeedbackContext);

    if ( !feedback.values || feedback.length === 0) {
        return <p>No feedback available yet.</p>
    }
    
    return (
       <div>
            {feedback.map((item) => (
               <FeedbackItem key={item.id} item={item} />
            ))}

        </div>
    )
}

export default FeedbackList
