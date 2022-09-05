import React from 'react'
import styled from 'styled-components'

//redux
import { useDispatch } from 'react-redux'
import { updateItem } from '../features/appSlice'

const StoreItem = ({ image, name, price }) => {

    const dispatch = useDispatch();

    const openItem = () => {
        console.log(name, image, price);
        dispatch(updateItem({name: name, image: image, price: price}))
    }

  return (
    <Wrapper>
        <img className='item-image' src={image} alt='' onClick={() => openItem()}/>
        <p className='item-name'>{name}</p>
        <p className='item-price'>€{price}</p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
text-align: center;
margin: 0 40px 40px 0;
cursor: pointer;
overflow:hidden;
overflow-y: hidden;

:hover {
    .item-image {
        transform: scale(1.2) translateY(-20px);
    }

    .item-price {
        opacity: 1;
    }
}

.item-name {
    font-weight: bold;
    margin: 10px 0 8px;
    font-size: .9rem;
}

.item-price {
    font-size: .9rem;
    opacity: .6;
    margin: 0 0 10px 0;
    transition: transform .2s cubic-bezier(.2,.43,.6,1.07);
}

.item-image {
    height: 250px;
    width: 30%;
    min-width: 220px;
    object-fit: cover;
    border-radius: 8px;
    transition: transform .2s cubic-bezier(.2,.43,.6,1.07);
}
`

export default StoreItem