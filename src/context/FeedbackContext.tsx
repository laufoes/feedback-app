import { useState, createContext, ReactNode, useEffect } from 'react'
import axios from 'axios'

interface IFeedbackData {
        id: number;
        rating: number;
        text: string;
}

interface IEditFeedback {
    item: { id: number, text: string, rating: number },
    edit: boolean,
}

export interface FeedbackDataProps {
    isLoading: boolean,
    setIsLoading: (newState: boolean) => void,
    feedback: IFeedbackData[],
    setFeedback: (newState: IFeedbackData[]) => void,
    editFeedback: IEditFeedback,
    setEditFeedback: (newState: IEditFeedback) => void,
    deleteFeedback: (id: number) => void,
    addFeedback: (newFeedback: IFeedbackData) => void,
    editExistingFeedback: (item: IFeedbackData) => void,
    updateFeedback: (id: number, item: IFeedbackData) => void
}

interface FeedbackContextProps { 
    children?: ReactNode;
}

const initialValues = {
    isLoading: true,
    setIsLoading: () => {},
    feedback: [{ id: 0 , rating: 0, text: '' }],
    setFeedback: () => {},
    editFeedback: { item: { id: 0 , text: '', rating: 0}, edit: false },
    setEditFeedback: () => {},
    deleteFeedback: () => {},
    addFeedback: () => {},
    editExistingFeedback: () => {},
    updateFeedback: () => {}
}

export const FeedbackContext = createContext<FeedbackDataProps>(initialValues)
FeedbackContext.displayName = 'Feedback'

export const FeedbackDataProvider = ({ children }: FeedbackContextProps) => {
    const [ isLoading, setIsLoading ] = useState(true)
    const [ feedback, setFeedback ] = useState(initialValues.feedback)
    const [ editFeedback, setEditFeedback ] = useState(initialValues.editFeedback)

    useEffect(() => {
        console.log(isLoading)

        fetchFeedback()
        console.log(isLoading)
    }, [isLoading])

    async function fetchFeedback() {
        try {
            const response = await axios.get('http://localhost:5000/feedback')
            setFeedback(response.data)
            setIsLoading(false)                
        } catch(err) {
            throw new Error("Couldn't fetch API.")
        }
    }

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

    const updateFeedback = (id: number, updItem: IFeedbackData) => {
        setFeedback(feedback.map((item) => (
            item.id === id ? { ...item, ...updItem } : item
        )))
    }

    const deleteFeedback = (id: number) => {
        if(window.confirm('Are you sure you wish to delete your feedback?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    return (
        <FeedbackContext.Provider value={{ isLoading, setIsLoading, feedback, setFeedback, editFeedback, setEditFeedback,  deleteFeedback, addFeedback, editExistingFeedback, updateFeedback }}>
            { children }
        </FeedbackContext.Provider>
    )
}