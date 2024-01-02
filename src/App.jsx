import { Route, Routes} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Projects from './pages/Projects'

function App() {


  return (
    <div className=' dark:bg-slate-800 relative'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='*' element={<NotFound/>} />
        <Route path='/projects/:id' element={<Projects/>} />
      </Routes>
    </div>
  )
}

export default App
