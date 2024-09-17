import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Menu from './components/Menu'
import Contact from './components/Contact'
import Login from './components/Login'
import Us from './components/Us'


function App() {

  return (
    <div className="principal">
    <Router>
      <Routes>
        <Route path='/' element ={<Menu/>}></Route>
        <Route path='/contact' element ={<Contact/>}></Route>
        <Route path='/login' element= {<Login/>}></Route>
        <Route path='/us' element= {<Us/>}></Route>
      </Routes>
    </Router>
    </div>
  )
}

export default App
