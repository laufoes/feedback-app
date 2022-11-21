import React from 'react'
import Container from './components/Container'
import FeedbackForm from './components/FeedbackForm'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import Header from './components/Header'
import { FeedbackDataProvider } from './context/FeedbackContext'

function App() {
  return (
    <Container>
        <FeedbackDataProvider>
          <Header />
          <div className='container max-w-3xl m-auto py-0'>
            <FeedbackForm />
            <FeedbackStats />
            <FeedbackList />
          </div>
      </FeedbackDataProvider>
    </Container>
  )
}

export default App
