import React from 'react'
import styled from 'styled-components'

//components
import Header from './components/Header'
import UserImage from './components/UserInfo'
import StoreItem from './components/StoreItem'
import Footer from './components/Footer'

import { Provider } from 'react-redux'
import { store } from './features/store'

const App = () => {

  const items = [{
    image: '../images/clothes1.jfif',
    name: 'Regular Fit Round-neck T-shirt',
    price: '5,99'
  },{
    image: '../images/clothes2.jfif',
    name: 'Regular Fit Hoodie 1',
    price: '29,99'
  },{
    image: '../images/clothes3.jfif',
    name: 'Relaxed Fit Hoodie 2',
    price: '29,99'
  },{
    image: '../images/clothes4.jfif',
    name: 'Relaxed Fit Hoodie 3',
    price: '29,99'
  },{
    image: '../images/clothes5.jfif',
    name: 'Hybrid Regular Tapered Joggers',
    price: '39,99'
  },{
    image: '../images/clothes6.jfif',
    name: 'Loose Jeans',
    price: '39,99'
  },
  {
    image: '../images/clothes7.jfif',
    name: 'Relaxed Fit Corduroy shirt',
    price: '29,99'
  },
  {
    image: '../images/clothes8.jfif',
    name: 'Regular Fit Oxford shirt',
    price: '19,99'
  },
  {
    image: '../images/clothes9.jfif',
    name: 'Relaxed Fit Terry resort shirt',
    price: '24,99'
  },


  ]


  return (
    <Provider store={store}>
    <Wrapper>
      <Header />
      <UserImage source='../images/portrait' />

      <div className='store-items'>
        {items.map(item => (
          <StoreItem 
            key={item?.name}
            image={item?.image}
            name={item?.name}
            price={item?.price}
          />
        ))}  
      </div>

      <Footer />
    </Wrapper>
    </Provider>
  )
}



const Wrapper = styled.div`

.store-items {
  margin: 100px auto 0;
  display: flex;
  flex-wrap: wrap;
  padding: 0 0 0 40px;
  justify-content: center;
  max-width: 1200px;
}
`

export default App