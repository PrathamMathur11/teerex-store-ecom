import React from 'react'
import { useCart } from 'react-use-cart'
import styled from 'styled-components'

const CartCard = ({ item, max }) => {
  const { updateItemQuantity, removeItem } = useCart()

  // if (item.quantity > max) {
  //   return (
  //     <>
  //       <h1>Item should not ne greater than {max}</h1>
  //     </>
  //   )
  // }
  // console.log(items)
  // console.log(item.quantity)
  return (
    <Container className='product-details'>
      <ImageContainer>
        <img src={item.imageURL} alt='' />
      </ImageContainer>
      <div className=''>
        <h3>{item.name}</h3>
        <p>Rs {item.price}</p>
      </div>
      <div className='quantity-buttons'>
        <ReduceButton
          onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
        >
          -
        </ReduceButton>
        <div>{item.quantity}</div>
        <AddButton
          onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
        >
          +
        </AddButton>
      </div>
      <DeleteButton onClick={() => removeItem(item.id)}>
        <span>Delete</span>
      </DeleteButton>
    </Container>
  )
}

export default CartCard

const Container = styled.div`
  ${'' /* border: 1px solid red; */}
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1px;
  padding: 3%;
  max-width: 600px;
  min-width: 450px;
  height: 100px;
  margin-bottom: 1rem;

  img {
    width: 100%;
    aspect-ratio: 1;
    cursor: pointer;
  }

  h3,
  p {
    font-weight: bold;
    cursor: pointer;
  }

  select {
    background-color: rgba(211, 211, 211, 0.5);
    border: 2px solid gray;
    color: gray;
    padding: 3px 10px;
    height: 30px;
    cursor: pointer;
    ${'' /* border: 2px solid #cecece; */}
    ${'' /* color: #a0b0b0; */}
  }

  .quantity-buttons {
    display: flex;

    align-items: center;
    justify-content: space-between;
  }
`

const Button = styled.button`
  background-color: #fff;
  border-radius: 5px;
  height: 40px;
  margin-inline: 15px;
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`

const DeleteButton = styled(Button)``

const AddButton = styled(Button)``
const ReduceButton = styled(Button)``

const ImageContainer = styled.div`
  ${'' /* border: 2px solid rgba(0, 0, 0, 1); */}
  ${'' /* background-color: rgba(211, 211, 211, 0.7); */}
  width: 100px;
  aspect-ratio: 1;
  img {
    width: 100%;
    height: 100%;
  }
`
