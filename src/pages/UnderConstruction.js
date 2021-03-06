import React from 'react'
import styled from 'styled-components'
import { colors, fonts, zIndexes } from '../project-styles/projectStyles'


const Container = styled.div`
  position: absolute;
  width: 100%;
  min-height: 100vh;
  z-index: ${zIndexes.underConstruction};
`

const UnderContructionContentWrapper = styled.div`
    position: absolute;
    top: 50vh;
    left: 50%;
    transform: translate(-50%, -50%);

    .logo{
        font-family: ${fonts.logo};
        font-size: 25px;
        line-height: 25px;
        color: ${colors.white};
        letter-spacing: 0.08px;
        text-align: center;
        margin-bottom: 20px;
    }
    .text{
        color: ${colors.white};
        font-family: ${fonts.text};
        font-size: 17px;
        text-align: center;
        margin-bottom: 5px;
    }
`


const UnderConstruction = () => {

  return (
    <Container>
        <UnderContructionContentWrapper>
            <div className="logo">ANUAR KHALIFI</div>
            <div className="text">Website Under Construction</div>
            <div className="text">Contact: anuarkhalifi@gmail.com</div>
        </UnderContructionContentWrapper>    
    </Container>
  )
}
export default UnderConstruction
