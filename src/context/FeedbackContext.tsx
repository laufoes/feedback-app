import { useState, createContext, ReactNode } from 'react'
import FeedbackData from '../data/FeedbackData'

interface IFeedbackData {
        id: number;
        rating: number;
        text: string;
}

export interface FeedbackDataProps {
    feedback: IFeedbackData[],
    setFeedback: (newState: IFeedbackData[]) => void,
    deleteFeedback: (id: number) => void,
}

interface FeedbackContextProps { 
    children?: ReactNode;
}

const initialValues = {
    feedback: FeedbackData,
    setFeedback: () => {},
    deleteFeedback: () => {}
}

export const FeedbackContext = createContext<FeedbackDataProps>(initialValues);
FeedbackContext.displayName = 'Feedback';

export const FeedbackDataProvider = ({ children }: FeedbackContextProps) => {
    const [ feedback, setFeedback ] = useState(initialValues.feedback);

    const deleteFeedback = (id: number) => {
        if(window.confirm('Are you sure you wish to delete your feedback?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    return (
        <FeedbackContext.Provider value={{ feedback, setFeedback, deleteFeedback }}>
            { children }
        </FeedbackContext.Provider>
    )
}