import React from 'react'
import Container from './components/Container'
import FeedbackList from './components/FeedbackList'
import Header from './components/Header'
import { FeedbackDataProvider } from './context/FeedbackContext'

function App() {
  return (
    <Container>
        <FeedbackDataProvider>
          <Header />
          <FeedbackList />

      </FeedbackDataProvider>
    </Container>
  )
}

export default App
