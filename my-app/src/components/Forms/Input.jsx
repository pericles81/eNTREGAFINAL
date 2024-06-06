import styles from './Input.css'


export default function Input({name,nameLabel,type,htmlFor,id,onBlur,value}){
    return(
        <div className="divInput">
            <label htmlFor={htmlFor}>{nameLabel}</label>
            <input type={type} name={name} id={id} onBlur={onBlur} value={value} />
        </div>
    )
}