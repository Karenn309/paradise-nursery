import React from 'react';

const Cart = ({ cart, updateQuantity, removeFromCart }) => {
  const totalCost = cart.reduce((sum, item) => sum + item.cost * item.quantity, 0);

  return (
    <div className="container">
      <h2 className="my-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div className="card my-2" key={item.id}>
            <div className="card-body d-flex justify-content-between align-items-center">
              <img src={item.image} alt={item.name} style={{ width: 50, height: 50 }} />
              <div>{item.name}</div>
              <div>${item.cost.toFixed(2)}</div>
              <div>
                <button className="btn btn-sm btn-outline-secondary" onClick={() => updateQuantity(item.id, -1)}>-</button>
                <span className="mx-2">{item.quantity}</span>
                <button className="btn btn-sm btn-outline-secondary" onClick={() => updateQuantity(item.id, 1)}>+</button>
              </div>
              <div>${(item.cost * item.quantity).toFixed(2)}</div>
              <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(item.id)}>Delete</button>
            </div>
          </div>
        ))
      )}
      <h4 className="mt-4">Total: ${totalCost.toFixed(2)}</h4>
      <button className="btn btn-secondary me-2">Continue Shopping</button>
      <button className="btn btn-success">Checkout</button>
    </div>
  );
};

export default Cart;
