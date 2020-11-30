// IMPORTS
  //-Modules
  import React from 'react'
  import styled from 'styled-components'
  //-Components
  //import Preloader from '../components/Preloader'
  import Header from './Header'
  // import Menu from './Menu'
  //-Styles
  import { colors } from '../project-styles/projectStyles'
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
  `
//


// MAIN COMPONENT
  const PageWrapper = ({children, navTitleProp }) => {

    return (
      <Container>

        {/* <Preloader /> */}
        {/* <Menu navTitleProp={navTitleProp} /> */}

        <RightContent>    
          <Header />
          {children}
        </RightContent>

      </Container>
    )
  }
  export default PageWrapper
// 
