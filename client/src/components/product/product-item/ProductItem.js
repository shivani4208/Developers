import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  useProductState,
  useCartState,
  useModalState
} from '../../../global-state';
import { FaShoppingCart } from "react-icons/fa";

export default function ProductItem({ product }) {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const { id, title, img, price, inCart } = product;
  const { productActions } = useProductState();
  const { setProductDetails } = productActions;
  const { cartActions } = useCartState();
  const { addItemToCart } = cartActions;
  const { modalActions } = useModalState();
  const { openModal } = modalActions;

  return (
    <Product className="col-9 mx-auto col-md-6 col-lg-3 my-3">
      <div className="card " data-aos="fade-up">
        <div
          className="img-container p-5"
          onClick={() => setProductDetails(product)}
        >
          <Link to="/details">
            <img src={img} alt="product" className="card-img-top" />
          </Link>
          <button
            className="cart-btn"
            disabled={inCart}
            onClick={() => {
              addItemToCart(id);
              openModal(id);
            }}
          >
            {inCart ? (
              <p className="text-capitalize m-0 p-0" style={{fontSize:"20px"}} disabled>
                In Cart
              </p>
            ) : (
              <FaShoppingCart />
            )}
          </button>
        </div>
        <div className="card-footer d-flex justify-content-between">
          <p className="align-self-center mb-0" style={{fontSize:"20px"}}>{title}</p>
          <h5 className="text-blue font-italic mb-0">
            <span className="mr-1">${price}</span>
          </h5>
        </div>
      </div>
    </Product>
  );
}

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};

const Product = styled.div`
  .card {
    width: 250px;
    background: #ebf5fe;
    border-color: transparent;
    transition: all 0.5s linear;
    border-radius: 40px;
    box-shadow: -6px -6px 20px rgba(255,255,255,1),
                6px 6px 20px rgba(0,0,0,0.1);

    @media screen and (max-width: 420px) {
      margin-left: -40px;
    }
    
    @media screen and (max-width: 280px) {
      margin-left: -45px;
      width: 200px;
    }

  }

  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 0.5s linear;
  }

  &:hover {

    .card {
      box-shadow: inset -6px -6px 10px rgba(255,255,255,0.5),
                inset 6px 6px 20px rgba(0,0,0,0.05);
    }

    .card-footer {
      background: rgba(247, 247, 247);
    }

  }

  .img-container {
    position: relative;
    overflow: hidden;
  }

  .card-img-top {
    transition: all 0.5s linear;
  }

  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }

  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: #FFC400;
    border: none;
    color: white;
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transition: all 0.5s linear;
    transform: translate(100%, 100%);
  }

  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }

  .cart-btn:hover {
    cursor: pointer;
  }
`;
