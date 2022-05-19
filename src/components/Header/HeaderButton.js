import { useContext } from 'react'
import { CartContext } from '../store/cart-context'
import CartIcon from './Cart-ikonka'
import cls from './Header-Button.module.css'

export function HeaderButton(props) {
  const cartCtx = useContext(CartContext)
  const numberOfCartItems = cartCtx.items.reduce((currNumber, item)=>{
    return currNumber + item.amount
},0)
  return (
    <button className={cls.button} onClick={props.onClick}>
      <span className={cls.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={cls.badge}>{numberOfCartItems}</span>
    </button>
  )
}
