import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { PublicLayout } from './layout/PublicLayout'
import { HomePage } from './pages/HomePage'
import { ModalProvider } from './contexts/ModalContext'
import { Modal } from './components/Modal'

function App() {
  return (
    <ModalProvider>
      <Router>
        <Routes>
          <Route path="/" element={
            <PublicLayout>
              <HomePage />
            </PublicLayout>
          } />
        </Routes>
        <Modal />
      </Router>
    </ModalProvider>
  )
}

export default App
