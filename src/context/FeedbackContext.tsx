import { useState, createContext, ReactNode } from 'react'
import FeedbackData from '../data/FeedbackData'

interface IFeedbackData {
        id: string;
        rating: number;
        text: string;
}

export interface FeedbackDataProps {
    feedback: IFeedbackData[],
    setFeedback: (newState: IFeedbackData[]) => void,
    deleteFeedback: (id: string) => void,
    addFeedback: (newFeedback: IFeedbackData) => void
}

interface FeedbackContextProps { 
    children?: ReactNode;
}

const initialValues = {
    feedback: FeedbackData,
    setFeedback: () => {},
    deleteFeedback: () => {},
    addFeedback: () => {}
}

export const FeedbackContext = createContext<FeedbackDataProps>(initialValues);
FeedbackContext.displayName = 'Feedback';

export const FeedbackDataProvider = ({ children }: FeedbackContextProps) => {
    const [ feedback, setFeedback ] = useState(initialValues.feedback);

    const addFeedback = (newFeedback: IFeedbackData) => {
        console.log(newFeedback)
        setFeedback([ newFeedback, ...feedback])

    }

    const deleteFeedback = (id: string) => {
        if(window.confirm('Are you sure you wish to delete your feedback?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    return (
        <FeedbackContext.Provider value={{ feedback, setFeedback, deleteFeedback, addFeedback }}>
            { children }
        </FeedbackContext.Provider>
    )
}