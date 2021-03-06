import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent'
import AboutPage from './components/Pages/AboutPage'
import ContactPage from './components/Pages/ContactPage'
import HomePage from './components/Pages/HomePage'
import LoginPage from './components/Pages/LoginPage'

function App() {
  const userTheme = createTheme({
    palette: {
      primary: {
        main: '#396EB0',
      },
      secondary: {
        main: '#F3950D',
      },
    },
  })

  return (
    <>
      <ThemeProvider theme={userTheme}>
        <CssBaseline />
        <BrowserRouter>
          <HeaderComponent />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/About' element={<AboutPage />} />
            <Route path='/Contact' element={<ContactPage />} />
            <Route path='/Login' element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
        <h1>Hello</h1>
      </ThemeProvider>
    </>
  )
}

export default App
