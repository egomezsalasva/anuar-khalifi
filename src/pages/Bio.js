// IMPORTS
  //-Modules
  import React from 'react'
  import styled from 'styled-components'
  //-Assets
  import ThreePiece01 from '../imgs/threePiece01.png'
  import ThreePiece02 from '../imgs/threePiece02.png'
  import homeImg01 from '../imgs/home01.png'
  //-Components
  //import Preloader from '../components/Preloader'
  import Header from '../components/Header'
  import Menu from '../components/Menu'
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
  const PieceContainer = styled.div`
    position: relative;
    width: 100%;
    height: calc(100vh - 100px);
    margin-top: 100px;

    img{
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%, calc(-53%));
      height: 600px;
      box-shadow: 1px 2px 15px 0 rgba(0,0,0,0.25);
    }
  `
//


// MAIN COMPONENT
  const Bio = () => {

    return (
      <Container>

        {/* <Preloader /> */}
        <Menu />

        <RightContent>
          
          <Header />

          <PieceContainer>
              <img src={homeImg01} alt="three"/>
          </PieceContainer>

          <PieceContainer>
              <img src={ThreePiece01} alt="three"/>
          </PieceContainer>

          <PieceContainer>
              <img src={ThreePiece02} alt="three h"/>
          </PieceContainer>

        </RightContent>

      </Container>
    )
  }
  export default Bio
// 
