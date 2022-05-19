import React from 'react'

export const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  totalItem: 0,
  addItem: (item,selected) => {},
  removeItem: (id) => {},
  selectedItem:[]
})
