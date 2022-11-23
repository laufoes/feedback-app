import React from 'react'
import Header from '../components/Header'
import PageContainer from '../components/Container'
import { FeedbackDataProvider } from '../context/FeedbackContext'
import FeedbackForm from '../components/FeedbackForm'
import FeedbackStats from '../components/FeedbackStats'
import FeedbackList from '../components/FeedbackList'
import AboutIconLink from '../components/AboutIconLink'

function MainPage() {
  return (
    <PageContainer>
          <FeedbackDataProvider>
            <Header />
            <div className='container max-w-3xl m-auto py-0'>
              <FeedbackForm />
              <FeedbackStats />
              <FeedbackList />
            </div>
            <AboutIconLink />
        </FeedbackDataProvider>
      </PageContainer>
  )
}

export default MainPage
