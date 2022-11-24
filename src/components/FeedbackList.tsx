import { useContext } from 'react'
import FeedbackItem from "./FeedbackItem";
import { AnimatePresence, motion } from "framer-motion"
import { FeedbackContext, FeedbackDataProps } from '../context/FeedbackContext';
import Spinner from './Spinner';

function FeedbackList() {
    const  { feedback, isLoading } = useContext<FeedbackDataProps>(FeedbackContext);

    if ( !isLoading && (!feedback.values || feedback.length === 0)) {
        return <p className='w-5/6 m-auto mt-2 lg:w-full'>No feedback available yet.</p>
    }

    return isLoading ? <h3 className='w-5/6 m-auto mt-2 lg:w-full'><Spinner /></h3> : (
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
    )
    // return (
    //     <>
    //         <AnimatePresence>
    //             {feedback.map((item) => (
    //                 <motion.div 
    //                     key={ item.id }
    //                     initial={{ opacity: 0 }}
    //                     animate={{ opacity: 1 }}
    //                     exit={{ opacity: 0 }}
    //                 >
    //                     <FeedbackItem key={item.id} item={item} />
    //                 </motion.div>
    //             ))}
    //         </AnimatePresence>
    //     </>
    // )
}

export default FeedbackList
