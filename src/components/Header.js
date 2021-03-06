import React from 'react'
import styled from 'styled-components'
import { colors, zIndexes, mediaQueries } from '../project-styles/projectStyles'



const HeaderBg = styled.div`
  position: relative;
  height: 100px;
  width: calc(100% - 180px);
  top: 0;
  right: 0;
  background: ${ props => props.theme.mode === 'dark' ? colors.blue :  colors.white };
  position: fixed;
  display: flex;
  align-items: center;
  z-index: ${zIndexes.header};
  @media (max-width: ${mediaQueries.tablet}) {
    width: 100%;
  }
  @media (max-width: ${mediaQueries.mobile}) {
    height: 80px;
  }
`

const HeaderContainer = styled.div`
  position: relative;
  height: 100px;
  width: calc(100% - 180px);
  top: 0;
  right: 0;
  background: transparent;
  position: fixed;
  display: flex;
  align-items: center;
  z-index: ${zIndexes.headerContent};
  @media (max-width: ${mediaQueries.tablet}) {
    width: 100%;
  }
  @media (max-width: ${mediaQueries.mobile}) {
    height: 80px;
  }

  .headerContent{
    width: 100%;
    margin: 0 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: ${mediaQueries.mobile}) {
      margin: 0 30px;
    }
  }


  .leftHeader{
    width: 58px;
    height: 24px;
    position: relative;
    display: flex;
    align-items: center;
  }

  .rightHeader{
    .logo{
      font-family: 'Right Grotesk Compact';
      font-size: 25px;
      line-height: 25px;
      color: ${ props => props.theme.mode === 'dark' ? colors.white :  colors.blue };
      letter-spacing: 0.08px;
      text-align: right;
    }
  }
`


const Header = () => {
  
  return (
    <>
        <HeaderBg/>
        <HeaderContainer>
            
            <div className="headerContent">

                <div className="leftHeader">

                </div>

                <div className="rightHeader">
                    <div className="logo">ANUAR KHALIFI</div>
                </div>

            </div>
        </HeaderContainer>
    </>
  )
}
export default Header





