import { useState, createContext, ReactNode } from 'react'
import FeedbackData from '../data/FeedbackData'

interface IFeedbackData {
        id: string;
        rating: number;
        text: string;
}

interface IEditFeedback {
    item: { id: string, text: string, rating: number },
    edit: boolean,
}

export interface FeedbackDataProps {
    feedback: IFeedbackData[],
    setFeedback: (newState: IFeedbackData[]) => void,
    editFeedback: IEditFeedback,
    setEditFeedback: (newState: IEditFeedback) => void,
    deleteFeedback: (id: string) => void,
    addFeedback: (newFeedback: IFeedbackData) => void,
    editExistingFeedback: (item: IFeedbackData) => void,
    updateFeedback: (id: string, item: IFeedbackData) => void
}

interface FeedbackContextProps { 
    children?: ReactNode;
}

const initialValues = {
    feedback: FeedbackData,
    setFeedback: () => {},
    editFeedback: { item: { id: '', text: '', rating: 0}, edit: false },
    setEditFeedback: () => {},
    deleteFeedback: () => {},
    addFeedback: () => {},
    editExistingFeedback: () => {},
    updateFeedback: () => {}
}

export const FeedbackContext = createContext<FeedbackDataProps>(initialValues);
FeedbackContext.displayName = 'Feedback';

export const FeedbackDataProvider = ({ children }: FeedbackContextProps) => {
    const [ feedback, setFeedback ] = useState(initialValues.feedback);
    const [ editFeedback, setEditFeedback ] = useState(initialValues.editFeedback)

    const addFeedback = (newFeedback: IFeedbackData) => {
        console.log(newFeedback)
        setFeedback([ newFeedback, ...feedback])

    }

    const editExistingFeedback = (item: IFeedbackData) => {
        setEditFeedback({
            item,
            edit: true
        })
    }

    const updateFeedback = (id: string, updItem: IFeedbackData) => {
        setFeedback(feedback.map((item) => (
            item.id === id ? { ...item, ...updItem } : item
        )))
    }

    const deleteFeedback = (id: string) => {
        if(window.confirm('Are you sure you wish to delete your feedback?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    return (
        <FeedbackContext.Provider value={{ feedback, setFeedback, editFeedback, setEditFeedback,  deleteFeedback, addFeedback, editExistingFeedback, updateFeedback }}>
            { children }
        </FeedbackContext.Provider>
    )
}