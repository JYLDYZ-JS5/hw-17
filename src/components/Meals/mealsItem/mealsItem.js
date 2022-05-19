import { useContext } from 'react'
import { CartContext } from '../../store/cart-context'
import { MealItemForm } from './MealItemForm'
import cls from './mealsItem.module.css'
import { useRef } from 'react'

export function MealsItem(props) {
  const amountInputRef = useRef()
  const cartCtx = useContext(CartContext)

  function addToCartHandler(amount, selected) {
    cartCtx.addItem(
      {
        id: props.id,
        name: props.name,
        amount: amount,
        price: props.price,
      },
      selected,
    )
  }
  function submitHandler(event) {
    event.preventDefault()
 const enteredAmount = amountInputRef.current.value
    const enteredAmountNumber = +enteredAmount
    const selected = event.currentTarget.id
    const filtered = props.dummyMeals.filter((el) => {
     
      el.amount=enteredAmountNumber
     return el.id === selected
     
    })
   
    addToCartHandler(enteredAmountNumber, filtered)
  }

  return (
    <li className={cls.meal} id={props.id} onSubmit={submitHandler}>
      <div>
        <h3>{props.name}</h3>
        <div className={cls.description}>{props.description}</div>
        <div className={cls.price}>{props.price}</div>
      </div>
      <div>
        <MealItemForm
          id={props.id}
          ref={amountInputRef}
        />
      </div>
    </li>
  )
}
