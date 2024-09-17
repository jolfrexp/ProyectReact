import { Link } from "react-router-dom"


function Menu() {
  return (
   <div>
       <nav>
        <ul>
            <li>
                <Link to="/">Inicio</Link>
            </li>
            <li>
                <Link to="/contact">Contactenos</Link>
            </li>
            <li>
                <Link to="/us">Nosotros</Link>
            </li>
            <li>
                <Link to="/login">Registro</Link>
            </li>
        </ul>
       </nav>
    
   </div>
  )
}

export default Menu