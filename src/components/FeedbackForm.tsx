import Card from "./Card"
import { useState } from 'react'
import Button from "./Button"

function FeedbackForm() {
    const [ text, setText ] = useState('')
    const [ btnDisabled, setBtnDisabled ] = useState(true);
    const [ message, setMessage ] = useState('')

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
  return (
    <Card reverse={true}>
        <h2 className='text-5xl font-bold text-center mt-3 mb-6'>How would you rate your service with us?</h2>
        <form className='flex justify-between border border-disabled rounded-2xl my-2 py-2 px-2'>
            <input 
                type='text' 
                placeholder='Write a review' 
                onChange={handleTextChange} 
                value={text} 
                className='w-full px-3 text-xl focus:outline-none' 
            />
            <Button type='submit' disabled={btnDisabled}>Send</Button>
        </form>
        <div className='text-center mt-6 text-purple-500 text-2lg'>
            {message.length !== 0 ? `${message}` : ''}
        </div>
    </Card>
  )
}

export default FeedbackForm
