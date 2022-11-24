import Card from "./Card"
import Button from "./Button"
import RatingSelect from "./RatingSelect"
import { useState, useContext, useEffect } from 'react'
import { FeedbackContext, FeedbackDataProps } from "../context/FeedbackContext"

function FeedbackForm() {
    const [ text, setText ] = useState('')
    const [ rating, setRating ] = useState(10)
    const [ btnDisabled, setBtnDisabled ] = useState(true);
    const [ message, setMessage ] = useState('')
    const  { feedback, addFeedback, editFeedback, updateFeedback } = useContext<FeedbackDataProps>(FeedbackContext);

    useEffect(() => {
        if(editFeedback.edit === true) {
            setBtnDisabled(false)
            setText(editFeedback.item.text)
        }
    }, [editFeedback])


    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
        
        if(text === '') {
            setBtnDisabled(true)
            setMessage('')
        } else if (text !== '' && text.length <= 10) {
            setMessage('Text must be at least 10 characters.')
            setBtnDisabled(true)
        } else {
            setMessage('')
            setBtnDisabled(false)
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (text.length >= 10) {
            const id = feedback.length + 1;
            console.log(id)
            const newFeedback = {
                text,
                rating,
                id
            }
            if(editFeedback.edit === true) {
                updateFeedback(editFeedback.item.id, newFeedback)
            } else {
                addFeedback(newFeedback)
                setText('')
            }
        }
    }

  return (
    <Card reverse={true}>
        <h2 className='text-5xl font-bold text-center mt-3 mb-6'>How would you rate your service with us?</h2>
        <form onSubmit={handleSubmit}>
            <RatingSelect select={(rating: number) => setRating(rating)} />
            <div className='flex justify-between border border-disabled rounded-2xl my-2 py-2 px-2'>
                <input 
                    type='text' 
                    placeholder='Write a review' 
                    onChange={handleTextChange} 
                    value={text} 
                    className='w-full px-3 text-xl focus:outline-none' 
                />
                <Button type='submit' disabled={btnDisabled}>Send</Button>
            </div>
        </form>
        <div className='text-center mt-6 text-purple-500 text-2lg'>
            {message.length !== 0 ? `${message}` : ''}
        </div>
    </Card>
  )
}

export default FeedbackForm
