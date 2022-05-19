import { forwardRef } from 'react'
import cl from './Input.module.css'

const Input = forwardRef ((props,ref) =>{
    return(
        <div className={cl.input}>
            <label>{props.label}</label>
            <input {...props.input} ref={ref} />
        </div>
    )
})
export default Input