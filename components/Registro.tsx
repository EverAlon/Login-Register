import Link from "next/link";
import { useState } from "react";
import  formStyles  from "@/styles/formStyles.module.css"

const Registro = ({onClose} : any) =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const handleRegister = ()=>{
        console.log(`Registro con correo: ${email} y contraseña: ${password}`)
        
    }

    return(
        <div className={formStyles.modal}>
            <div className={formStyles.modal_content}>
                <h2>Registro</h2>
                <label htmlFor="email">Correo: </label>
                <input type="email" id="email" value={email} onChange={(e)=>{
                    e.preventDefault()
                    setEmail(e.target.value)
                }}/>
                <label htmlFor="password">Contraseña: </label>
                <input type="password" id="password" value={password} onChange={(e)=>{
                    e.preventDefault()
                    setPassword(e.target.value)
                }}/>
                <button onClick={handleRegister}>Registrarse</button>
                <p>¿Ya tienes cuenta?<Link href="@/pages/login">Iniciar sesion</Link></p>
                <button onClick={onClose}>Cerrar</button>
            </div>
        </div>
    )
}

export default Registro