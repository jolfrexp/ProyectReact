import React from 'react'

function Calculator() {
  return (
    <>
        <form className='form-cal'>
            <div className="inputs">
            <label className='number1'>Primer Numero</label>
            <input type="number" id='FirstNumber' placeholder='firstNumber'/>
            <label className='number2'>Segundo Numero</label>
            <input type="number" id='SecondNumer' placeholder='secondNumber'/></div>
            <h2>Seleccione la opcion requerida</h2>
            <button className='opc-cal'>Sumar</button>
            <button className='opc-cal'>Restar</button>
            <button className='opc-cal'>Multiplicar</button>
            <button className='opc-cal'>Dividir</button>
            <button className='opc-cal'>Raiz</button>
            <button className='opc-cal'>Exponente</button>
            <h4>Resultado:</h4>
            <p id="result"></p>
        </form>
    </>
  );
}
export default Calculator