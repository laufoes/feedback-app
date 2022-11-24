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
        fetchFeedback()
    }, [isLoading])

    async function fetchFeedback() {
        try {
            const response = await axios.get('/feedback')
            setFeedback(response.data)
            setIsLoading(false)                
        } catch(err) {
            throw new Error("Couldn't fetch API.")
        }
    }

    async function addFeedback(newFeedback: { id: number, rating: number, text: string }) {
        const { id, rating, text } = newFeedback
        try {
            await axios.post('/feedback', {
                id, rating, text
            })
        } catch(err) {
            throw new Error("Couldn't add review, try again later.")
        }
        setFeedback([ newFeedback, ...feedback])

    }

    const editExistingFeedback = (item: IFeedbackData) => {
        setEditFeedback({
            item,
            edit: true
        })
    }

    async function updateFeedback(id: number, updItem: IFeedbackData) {
        const { rating, text } = updItem
        try {
            await axios.put(`/feedback/${id}`,  {
                rating, text
            })

            setFeedback(feedback.map((item) => (
                item.id === id ? { ...item, ...updItem } : item
            )))
        } catch(err) {
            throw new Error("Couldn't update the feedback.")
        }
    }

    async function deleteFeedback(id: number) {
        if(window.confirm('Are you sure you wish to delete your feedback?')) {
            try{
                await axios.delete(`/feedback/${id}`)
                    .then (() => {
                        setFeedback(feedback.filter((item) => item.id !== id))
                    })
            } catch(err) {
                throw new Error("Error deleting review.")
            }

        }
    }

    return (
        <FeedbackContext.Provider value={{ isLoading, setIsLoading, feedback, setFeedback, editFeedback, setEditFeedback,  deleteFeedback, addFeedback, editExistingFeedback, updateFeedback }}>
            { children }
        </FeedbackContext.Provider>
    )
}