import { CssBaseline } from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent'
import AboutPage from './components/Pages/AboutPage'
import ContactPage from './components/Pages/ContactPage'
import HomePage from './components/Pages/HomePage'

function App() {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/About' element={<AboutPage />} />
          <Route path='/Contact' element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
      <h1>Hello</h1>
    </>
  )
}

export default App
