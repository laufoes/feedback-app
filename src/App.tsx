import React, { useState } from 'react'
import Container from './components/Container'
import FeedbackList from './components/FeedbackList'
import Header from './components/Header'
import FeedbackData from './data/FeedbackData'

function App() {
  const [ feedback, setFeedback ] = useState(FeedbackData)
  return (
    <Container>
      <Header />
      <div className="container max-w-3xl m-auto py-0 px-5">
        <FeedbackList feedback={feedback} />
      </div>
    </Container>
  )
}

export default App
