import React, { useState } from 'react'
import Card from './components/Card'
import Container from './components/Container'
import FeedbackList from './components/FeedbackList'
import Header from './components/Header'
import FeedbackData from './data/FeedbackData'

function App() {
  const [ feedback, setFeedback ] = useState(FeedbackData)
  return (
    <Container>
      <Header />
        <FeedbackList feedback={feedback} />
    </Container>
  )
}

export default App
