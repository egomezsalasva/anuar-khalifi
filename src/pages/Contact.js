// IMPORTS
  //-Modules
  import React from 'react'
  import styled from 'styled-components'
  //-Components
  import PageWrapper from '../components/PageWrapper'
  //-Assets
  import ThreePiece01 from '../imgs/threePiece01.png'
  import ThreePiece02 from '../imgs/threePiece02.png'
  import homeImg01 from '../imgs/home01.png'
// 


// STYLES
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
  const Contact = () => {

    return (
      <PageWrapper navTitleProp="Contact" >

        <PieceContainer>
              <img src={homeImg01} alt="three"/>
          </PieceContainer>

          <PieceContainer>
              <img src={ThreePiece01} alt="three"/>
          </PieceContainer>

          <PieceContainer>
              <img src={ThreePiece02} alt="three h"/>
          </PieceContainer>

      </PageWrapper>
    )
  }
  export default Contact
// 
