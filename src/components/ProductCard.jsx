import React from 'react'
import { useCart } from 'react-use-cart'
import styled from 'styled-components'

const ProductCard = ({ product }) => {
  const { addItem } = useCart()

  // const max = product.quantity

  // if (product.quantity > max) {
  //   return (
  //     <>
  //       <h1>Item should not ne greater than {max}</h1>
  //     </>
  //   )
  // }

  return (
    <Product className='product-card'>
      <ImageContainer
        style={{
          background: `url(${product.imageURL})`,
          backgroundSize: 'cover'
        }}
      ></ImageContainer>
      <div className='details'>
        <div className='card-content'>
          <div className='name-n-price'>
            <h3 className='name'>{product.name}</h3>
            <p>{product.type}</p>
          </div>
          <div className='price'>
            <h2 className='price'>Rs {product.price}</h2>
          </div>
        </div>
      </div>
      <AddToCartButton onClick={() => addItem(product)}>
        Add to cart
      </AddToCartButton>
      <h4 className='gender-wear'>{product.gender}'s wear</h4>
    </Product>
  )
}

export default ProductCard

const Product = styled.div`
  border-radius: 10px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;

  .gender-wear {
    position: absolute;
    top: 5px;
    right: 10px;
    opacity: 0.5;
  }

  &:hover {
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);
    .details {
      opacity: 1;
    }
    .gender-wear {
      opacity: 1;
    }
  }

  .details {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    opacity: 0.5;

    .card-content {
      display: flex;
      justify-content: space-evenly;
    }

    .price {
      font-weight: 900;
      padding: 4px 25px;
    }
  }
`
const ImageContainer = styled.div`
  padding-top: 20px;
  position: relative;
  height: 230px;
  width: 300px;
  transition: all 1s ease;

  &:hover {
    scale: 1.05;
  }

  @media screen and (max-width: 768px) {
    width: 300px;
  }
`

const AddToCartButton = styled.button`
  background-color: black;
  color: white;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  transition: all 0.4s ease;

  &:hover {
    background-color: white;
    scale: 1.05;
    color: black;
  }

  &:focus {
    background-color: rgba(0, 255, 20, 0.5);
    color: black;
  }
`
