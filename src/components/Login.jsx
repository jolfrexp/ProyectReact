import Menu from "./Menu"
import Demoform from "./Demoform"

function Login() {
  return (
    <>
    <Menu
        principal = "Inicio sesion" link1= "/login"
        secundario = "Contactos" link2 = "/contact"
        tercero = "Nosotros" link3 = "/us"
        cuarto = "Principal" link4 = "/"
        quinto = "Register" link5 = "/register"
        />
        <Demoform></Demoform>

    </>
  )
    
}
export default Login