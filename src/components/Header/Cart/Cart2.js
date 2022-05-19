// import { useContext } from 'react/cjs/react.production.min'
// import { CartContext } from '../../store/cart-context'
import Modal from '../../UI/Modal'
import cls from './Cart.module.css'

export function Cart(props) {
  




//нужно дать обьъект в App.js чтобы связать его с mealsItemForm
  const cartItems = (
    <ul className={cls['cart-items']}>
      {props.DUMMY_MEALS.map((el) => (
        <div key={el.id}>
          <li >{el.name}</li>
          <div className={cls.total}>
            <span>Total</span>
            <span>{el.price}</span>
          </div>
        </div>
      ))}
    </ul>
  )

  return (
    <Modal onCloseCart={props.onCloseCart}>
      <div>
        {cartItems}

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
