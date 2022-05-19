import cls from './Card.module.css'

export function Card(props){
    return(
        <div className={cls.card}>{props.children}</div>
    )
}