import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import CartList from './CartList';
import CartTotal from './CartTotal';
import { FormTitle } from '../PageStyles/Forms';
import { useCartState } from '../../global-state/index';

export default function Cart() {
  const { cartState, cartActions } = useCartState();
  const { cart } = cartState;
  let content;
  content =
    cart.length > 0 ? (
      <>
        <div>
          <h1 className="text-center m-5">Your Cart</h1>
          <CartColumns />
          <CartList cart={cart} />
          <CartTotal cartState={cartState} cartActions={cartActions} />
        </div>
      </>
    ) : (
      <EmptyCart />
    );

  const user = JSON.parse(localStorage.getItem('profile'));

  if (!user?.result?.name) {
    return (
      <FormTitle className="m-5">
          Please Sign In to view your cart.
      </FormTitle>
    );
  }

  return (
    <>
    <div className="center">
      {content}
    </div>
    </>
  )
}