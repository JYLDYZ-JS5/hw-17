import { useReducer } from 'react'
import { CartContext } from './cart-context'

const defaultCartState = {
  items: [],
  totalAmount: 0,
  selectedItem: [],
  totalItem: 0,
}
function cartReducer(prevState, action) {
  if (action.type === 'ADD') {

    const updatedItems = prevState.items.concat(action.item) //добавляет к

    const updatedTotalAmount = prevState.totalAmount + (action.item.price * action.item.amount)

    var totalItem=+prevState.totalItem+action.item.amount 
    
    const selectedItems = prevState.selectedItem.concat(action.selectedItem)
    const selected = selectedItems.filter(
      (el, id) => selectedItems.indexOf(el) === id,
    )

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
      selectedItem: selected,
      totalItem:totalItem
    }
  }
  return defaultCartState
}

function CartProvider(props) {
  const [cartState, dispatchCartState] = useReducer(
    cartReducer,
    defaultCartState,
  )

  const addItemToCartHandler = (item, selected) => {
    dispatchCartState({ type: 'ADD', item: item, selectedItem: selected })
  }

  function removeItemFromCartHandler(id) {}

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    selectedItem: cartState.selectedItem,
    totalItem:cartState.totalItem
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}
export default CartProvider
