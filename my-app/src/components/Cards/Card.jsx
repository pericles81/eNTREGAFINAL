import styles from './Card.css'
import Button from '../Button'
export default function Card(props) {

    return (
        <div className="divCard">
            <div className='divCard1'></div>
            <img src={props.imagem} />
            <div className='divCard3'>
                <h3>{props.nome}</h3>
                <p>{props.preco}</p>
                <p>{props.id}</p>
            </div>
            <div className='divCard4'>
                <button onClick={props.onClick}>Ver Mais</button>
            </div>
        </div>
    )
}