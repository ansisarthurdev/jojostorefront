import React from 'react'
import styled from 'styled-components'

const UserInfo = () => {
  return (
    <Wrapper>
      <div className='portrait-img' />

      <div className='user-info'>
        <h3>Jojo's Store</h3>
        <p>Shop from our range of items including t-shirts, jeans, knitwear, sweats, coats and accessories; if you want it, we're pretty sure we've got it! With hundreds of styles landing each week and regular trend updates you can be sure to get the latest. #betheMAN.</p>
        
        <div className='user-info-links'>
          <a href='/'>Twitter</a>/
          <a href='/'>Instagram</a>/
          <a href='/'>Youtube</a>
        </div>

        <div className='user-info-search'>
          <input type='text' placeholder='Enter your email address..' />
          <div className='user-info-btn'>Subscribe</div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
position: relative;
font-family: 'Oswald', sans-serif;

.user-info {
  max-width: 600px;
  padding: 0 20px;
  margin: 0 auto;
  position: relative;
  top: 40px;
  text-align: center;
  font-weight: 300;

  .user-info-search {
    margin: 20px 0;
    display: flex;
    justify-content: center;

    input {
      outline: none;
      font-size: .6rem;
      padding: 5px 10px;
      border: 1px solid lightgray;  
      border-radius: 8px;
      width: 30%;
    }

    .user-info-btn {
      background: #25262E;
      color: white;
      padding: 5px 20px;
      font-size: .8rem;
      margin: 0 0 0 5px;
      border-radius: 8px;
      transition: .2s linear;
      cursor: pointer;

      :hover {
        opacity: .8;
      }
    }
  }

  .user-info-links {
    
    a {
      text-decoration: underline;
      color: black;
      margin: 0 10px; 

      :hover {
        text-decoration: none;
      }
    }
  }
}

.portrait-img {
  background: url('../images/portrait.jpg');
  height: 70px;
  width: 70px;
  border-radius: 50%;
  background-size: cover;
  position: absolute;
  top: -60px;
  left: 50%;
  transform: translateX(-50%);
}
`

export default UserInfo