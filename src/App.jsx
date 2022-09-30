import { useEffect } from 'react'
// pages
import Home from './pages/Home'
import NotFound from './pages/NotFound'
// layout
import Base from './components/layouts/Base'
// aos
import Aos from 'aos'
import 'aos/dist/aos.css'
// other
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './app.scss'

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000
    })
  }, [])

  return (
    <BrowserRouter>
      <Base>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </Base>
    </BrowserRouter>
  )
}
export default App