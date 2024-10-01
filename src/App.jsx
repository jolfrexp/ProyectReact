import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Menu from './components/Menu'
import Contact from './components/Contact'
import Login from './components/Login'
import Us from './components/Us'
import 'bootstrap/dist/css/bootstrap.min.css';
import Calculator from './components/Calculator'


function App() {

  return (
    <div className="principal">
    <Router>
      <Routes>
        <Route path='/' element ={<Menu
        principal = "Principal" link1= "/"
        secundario = "Contactos" link2 = "/contact"
        tercero = "Nosotros" link3 = "/us"
        cuarto = "login" link4 = "/login"
        quinto = "Register" link = "/register"
        alternative = "Calculadora" alter = "/Calculator"
        />}></Route>
        <Route path='/contact' element ={<Contact/>}></Route>
        <Route path='/login' element= {<Login/>}></Route>
        <Route path='/us' element= {<Us/>}></Route>
        <Route path='/Calculator' element = {<Calculator/>}></Route>
      </Routes>
    </Router>
    </div>
  )
}

export default App
