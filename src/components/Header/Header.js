import { HeaderButton } from './HeaderButton'
import cls from './Header.module.css'
import dastorkon from './дасторкон.jpg'
export function Header(props) {
  return (
    <>
      <header className={cls.header}>
        <h1>Food order </h1>
        <HeaderButton onClick={props.onClick} />
      </header>
      <div className={cls['main-image']}>
        <img src={dastorkon} alt=" dastorkon" />
      </div>
    </>
  )
}
 
