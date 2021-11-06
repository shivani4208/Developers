import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Faq from './Faq';

import {
  useProductState,
  useCartState,
  useModalState
} from '../../global-state/index';

export default function Details() {
  // Accesing state and actions
  const { productState } = useProductState();
  const { productDetails } = productState;
  const { cartActions } = useCartState();
  const { addItemToCart } = cartActions;
  const { modalActions } = useModalState();
  const { openModal } = modalActions;

  const { id, title, img, price, company, info, inCart } = productDetails;
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-10 mx-auto text-center text-blue my-5">
          <h1>{title}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <img src={img} alt="Product" className="img-fluid" />
        </div>
        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
          <h2>Model: {title}</h2>
          <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
            Made by: {company}
          </h4>
          <h4 className="text-blue">
            <strong>
              Price: <span>$</span>
              {price}
            </strong>
          </h4>
          <p className="text-muted lead">{info}</p>
          {/* Buttons */}
          <div>
            <Link to="/">
              <Button>Back To Products</Button>
            </Link>
            <Button
              cart
              disabled={inCart ? true : false}
              onClick={() => {
                addItemToCart(id);
                openModal(id);
              }}
            >
              {inCart ? 'In Cart' : 'Add to cart'}
            </Button>
          </div>
        </div>
      </div>
      {/* End Product Info */}
      <Faq/>
    </div>
  );
}

const Button = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid white;
  border-color: ${props =>
    props.cart ? 'orange' : '#555'};
  color: ${props => (props.cart ? 'orange' : '#555')};
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 300ms ease-in-out;
  &:hover {
    background: ${props =>
      props.cart ? 'orange' : '#555'};
    color: ${props => (props.cart ? 'white' : 'white')};};
  }
  &:focus {
    outline: none;
  }
`;