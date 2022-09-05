import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { Parallax } from 'react-parallax';

//icons
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import { Cart } from '@styled-icons/bootstrap/Cart'

//router
import { useSelector, useDispatch } from 'react-redux'
import { selectItem, updateItem } from '../features/appSlice'


const Header = () => {

  const [item, setItem] = useState(null);
  const dispatch = useDispatch();
  const reduxItem = useSelector(selectItem);

  const closeItem = () => dispatch(updateItem(null))

  useEffect(() => {
    setItem(reduxItem);
    window.scrollTo(0,0);
    //eslint-disable-next-line
  }, [reduxItem])


  return (
    <Wrapper>
        <Parallax bgImage="../images/header.jpg" bgImageAlt="background" strength={200}>
        <div style={{height: '200px'}}/>
        </Parallax>
        
      {item &&
      <SingleItem>
        <div className='item-image-container'><img className='item-image' src={item?.image} alt='' /></div>
        <div className='item-info'>
        <p className='item-name'>{item?.name}</p>
        <p className='item-price'>€{item?.price}</p>
        <div className='add-cart'>Buy now <Cart className='cart' /></div>
        </div>
        <CloseOutline className='icon-close' onClick={() => closeItem()} />
      </SingleItem>}
    </Wrapper>
  )
}

const SingleItem = styled.div`
  position: absolute;
  top: 0;
  max-width: 1200px;
  width: 80vw;
  height: 100vh;
  background: white;
  display: flex;
  justify-content: center;
  z-index: 100;
  padding: 20px 20px 20px 30px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;

  @media(max-width: 430px){
    flex-direction: column;
  }

  .item-info {
    position: relative;
    margin-left: 5%;

    @media(max-width: 580px){
      top: 40px;
    }

    @media(max-width: 430px){
      top: 0;
      text-align: center;
      margin-left: 0;
    }
  }

  .item-name {
    margin: 0;
  }

  .item-price {
    margin: 5px 0 20px 0;
  }

  .add-cart {
    background: #25262E;
    color: white;
    padding: 5px 20px;
    font-size: .8rem;
    border-radius: 8px;
    transition: .2s linear;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;

    :hover {
      opacity: .8;
    }

    .cart {
      width: 24px;
      height: 24px;
      margin-left: 10px;
    }
  }

  .item-image-container {
    
    @media(max-width: 430px){
      text-align: center;
    }
  }

  .item-image {
    height: 450px;
    width: 100%;
    min-width: 200px;
    max-width: 250px;
    object-fit: cover;
    border-radius: 8px;

    @media(max-width: 430px){
      height: 300px;
    }
  }

  .icon-close {
    width: 28px; 
    height: 28px;
    transition: .2s linear;
    position: absolute;
    right: 20px;
    cursor: pointer;

    :hover {
      opacity: .8;
      transform: scale(1.1);
    }

    @media(max-width: 430px){
      top: 20px; 
    }
  }
`

const Wrapper = styled.div``

export default Header