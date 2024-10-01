import React,{useState} from 'react'

function Demoform() {
    let alert1 = document.getElementById('alert1')
    let alert2= document.getElementById('alert2')
    let alert3 = document.getElementById('alert3')
    const [userName,setUserName] = useState('');
    const [fullName,setFullName] = useState('');
    const [password,setPassword] = useState('');
    const[isErrorUserName, setErrorUserName] = useState(false)
    const[isErrorFullName, setErrorFullName] = useState(false)
    const[isErrorPassword, setErrorPassword] = useState(false)
    const onSubmit = (e) =>{
      e.preventDefault()
      setErrorUserName(userName == "" ? true : false)
      setErrorFullName(fullName == "" ? true : false)
      setErrorPassword(password == "" ? true : false)
      if (userName !="" && fullName != "" && password !=""){
          console.log(userName,fullName,password)
      }else{
          
      }

      // if (userName !="" && fullName != "" && password !="") {
      //   console.log(userName,fullName,password)
      // }else{
      //   if(userName == ""){
      //   alert1.innerHTML = "Debe ingresar el usuario"
      // }else{
      //   alert1.innerHTML = ""
      // }
      // if(fullName == ""){
      //     alert2.innerHTML = "Debe ingresar el nombre"
      // }else{
      //   alert2.innerHTML = ""
      // }
      // if(password == ""){
      //     alert3.innerHTML = "Debe ingresar la contraseña"
      // }else{
      //   alert3.innerHTML = ""
      // }
      // }
      
      }
  return (
    <div className='container sef'>
        <h2>Formulario en React</h2>

        <form onSubmit={onSubmit}>
            
            <label className='form-label'>Usuario</label>
            <div className="cont1"><input 
            type="text" 
            placeholder="User" 
            name='userName' 
            className='form-control ' 
            value={userName}
            onChange={userName => setUserName(userName.target.value)}
            /><p style={{color: "red"}} id="alert1">*</p></div>
            {isErrorUserName && <p style={{color: "red"}} id="alert1">Debe ingresar el usuario</p>}
            <label className='form-label'>Nombre completo</label>
            <input 
            type="text" 
            placeholder='Full Name' 
            name='fullName' 
            className='form-control' 
            value={fullName}
            onChange={fullName => setFullName(fullName.target.value)}
            />
            { isErrorFullName && <p style={{color: "red"}} id="alert2">Debe ingresar su nombre completo</p>}
            
            <label className='form-label'>Contraseña</label>
            <input 
            type="password" 
            placeholder='Password' 
            name='password' 
            className='form-control' 
            value={password}  
            onChange={password => setPassword(password.target.value)}
            />
            { isErrorPassword && <p style={{color: "red"}} id="alert3">Debe ingresar la contraseña</p>}
            
            <button type='submit' className="btn btn-primary">Login</button>
            
        </form>
        <div className="container2">
          <h3>Nombre:{fullName}</h3>

          <h3>Usuario: {userName}</h3>
          <h3>Contraseña: *******</h3>
          
        </div>
    </div>
  )
}

export default Demoform