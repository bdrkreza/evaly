import CartItem from 'Components/chechout/CheckoutCart';
import React from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { AppType } from 'redux/reducer/rootReducer';

const Checkout = () => {
  const cart = useSelector((state: AppType) => state.cart);

  return (
    <div className=" my-3">
      <Container>
        <div className="wrapper bg-white rounded border p-5">
          {cart.map((item) => (
            <CartItem key={item._id} item={item} />
          ))}
          <div className="mt-5 d-flex flex-column align-items-end border-top pt-5">
            <h2 className="mb-4">Total : ৳</h2>
            <button className="btn btn-lg btn-primary">Confirm Checkout</button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Checkout;
