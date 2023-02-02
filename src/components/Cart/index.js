import Header from '../Header'
import CartListView from '../CartListView'
import CartContext from '../../Context/CartContext'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {() => (
      <>
        <Header />
        <div className="cart-container">
          <div className="cart-content-container">
            <h1 className="cart-heading">My Cart</h1>
            <CartListView />
          </div>
        </div>
      </>
    )}
  </CartContext.Consumer>
)

export default Cart
