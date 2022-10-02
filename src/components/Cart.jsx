import React from 'react'
import CartCard from './CartCard'
import './Cart.scss'
import { useCart } from 'react-use-cart'

const Cart = () => {
  const {
    isEmpty,
    // totalUniqueItems,
    items,
    // totalItems,
    cartTotal
  } = useCart()

  if (isEmpty)
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          paddingTop: '50px',
          flexDirection: 'column'
        }}
      >
        <h2>Your cart is empty</h2>
        <h4>Please Add some items to your cart</h4>
      </div>
    )
  return (
    <div className='outer-cart-section'>
      <div className='inner-cart-section'>
        <h3>Shopping Cart</h3>
        <div className='cart-details'>
          <div className='cart-items'>
            {items.map(item => {
              return <CartCard id={item.id} key={item.id} item={item} max={item.quantity} />
            })}
          </div>
          <hr />
          <div className='payment-details'>
            <h3>SubTotal : Rs {cartTotal}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
