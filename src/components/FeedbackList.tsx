import { useContext } from 'react'
import FeedbackItem from "./FeedbackItem";
import { AnimatePresence, motion } from "framer-motion"
import { FeedbackContext, FeedbackDataProps } from '../context/FeedbackContext';

function FeedbackList() {
    const  { feedback } = useContext<FeedbackDataProps>(FeedbackContext);

    if ( !feedback.values || feedback.length === 0) {
        return <p>No feedback available yet.</p>
    }

    return (
        <>
            <AnimatePresence>
                {feedback.map((item) => (
                    <motion.div 
                        key={ item.id }
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <FeedbackItem key={item.id} item={item} />
                    </motion.div>
                ))}
            </AnimatePresence>
        </>
    )
}

export default FeedbackList
