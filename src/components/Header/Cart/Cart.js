import { useContext } from 'react'
import { CartContext } from '../../store/cart-context'
import Modal from '../../UI/Modal'
import cls from './Cart.module.css'

 
export function Cart(props) {
  const cartCtx = useContext(CartContext)
  // const numberOfCartItems =cartCtx.totalItem
  const cartItems = (
    <ul className={cls['cart-items']}>
      {cartCtx.selectedItem.map((el) => (
        <div key={el.id}>
          <div className={cls.total}>
            <li>{el.name}</li>
            <li>{cartCtx.totalItem}</li>
           
          </div>
        </div>
      ))}
    </ul>
  )
  const total = <span className={cls.totalword}>{cartCtx.totalAmount.toFixed()}</span>

  return (
    <Modal onCloseCart={props.onCloseCart}>
      <div>
        {cartItems}
        <div className={cls.total}>
          <span className={cls.totalword}>Total</span>
          <span>- - - -  $ {total}  - - - -</span>
        </div>
        <div className={cls.actions}>
          <button className={cls['button--alt']} onClick={props.onClick}>
            Close
          </button>
          <button className={cls.button}>order</button>
        </div>
      </div>
    </Modal>
  )
}
