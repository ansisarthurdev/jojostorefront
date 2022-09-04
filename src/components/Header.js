import React from 'react'
import styled from 'styled-components'

import { Parallax } from 'react-parallax';

const Header = () => {
  return (
    <Wrapper>
        <Parallax bgImage="../images/header.jpg" bgImageAlt="background" strength={200}>
        <div style={{height: '200px'}}/>
        </Parallax>
    </Wrapper>
  )
}

const Wrapper = styled.div``

export default Header