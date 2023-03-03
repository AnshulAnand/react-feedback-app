import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import AboutPage from './pages/AboutPage'
import FeedbackForm from './components/FeedbackForm'
import FeedbackStats from './components/FeedbackStats'
import FeedbackList from './components/FeedbackList'
import AboutIconLink from './components/AboutIconLink'
import FeedbackProvider from './context/FeedbackContext'

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            />
            <Route path='/about' element={<AboutPage />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App
