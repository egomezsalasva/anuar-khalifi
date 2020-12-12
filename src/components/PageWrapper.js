// IMPORTS
  //-Modules
  import React from 'react'
  import styled from 'styled-components'
  //-Components
  import Header from './Header'
  //-Styles
  import { colors, mediaQueries } from '../project-styles/projectStyles'
// 


// STYLES
  const Container = styled.div`
    width: 100%;
    min-height: 100vh;
  `
  const RightContent = styled.div`
    position: absolute;
    right: 0;
    width: calc(100% - 180px);
    min-height: 100vh;
    background: ${ props => props.theme.mode === 'dark' ? colors.blue :  colors.white };
    @media (max-width: ${mediaQueries.tablet}) {
      width: 100%;
    }
    /* @media (max-width: ${mediaQueries.mobile}) {
      margin-top: 80px;
    } */
  `
//


// MAIN COMPONENT
  const PageWrapper = ({ children }) => {

    return (
      <Container>

        <RightContent>    
          <Header />
          {children}
        </RightContent>

      </Container>
    )
  }
  export default PageWrapper
// 
