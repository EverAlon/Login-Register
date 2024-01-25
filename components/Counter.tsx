import { useState } from "react"

const Counter = () =>{

    const [counter, setCounter] = useState(0)
    const [showMessage, setShowMessage] = useState(false)

    return(
        <div>
            <p>Haz echo click {counter} veces</p>
            <button onClick={()=>{
                setCounter(counter+1)
            }}>
            Haz click
            </button>


            <button onClick={()=>{
                setShowMessage(!showMessage)
            }}>{!showMessage ? "Mostrar mensaje" : "Ocultar mensaje"}Mostrar mensaje</button>

            {showMessage && <p>¡¡Hola Mundo!!</p>}

        </div>
    )
}
