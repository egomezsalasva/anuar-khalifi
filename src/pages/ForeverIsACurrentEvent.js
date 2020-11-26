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
import { colors } from '../project-styles/projectStyles'
// 


// STYLES
  const PieceContainer = styled.div`
    position: relative;
    width: 100%;
    height: calc(100vh - 100px);
    margin-top: 100px;
    display: flex;
    align-items: center;
    justify-content: center;

    img{
      position: relative;
      /* top: 50%;
      left: 50%;
      transform: translate(-50%, calc(-53%)); */
      height: 600px;
      box-shadow: 1px 2px 15px 0 rgba(0,0,0,0.25);
      transform: translateX(50px);
    }

    .infoPiece{
      display: inline-block;
      position: relative;
      width: 100px;
      height: 100px;
      /* background: red; */
      top: calc(300px - 80px);
      left: calc(40px + 50px);

      .infoSquare{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 20px;
        height: 20px;
        background: ${ props => props.theme.mode === 'dark' ? colors.white :  colors.blue };
        cursor: pointer;
      }
    }
  `
//


// MAIN COMPONENT
  const ForeverIsACurrentEvent = () => {

    return (
      <PageWrapper navTitleProp="٣" >

        <PieceContainer>
            <img src={homeImg01} alt="three"/>
            <div className="infoPiece">
              <div className="infoSquare" />
            </div>
        </PieceContainer>

        <PieceContainer>
            <img src={ThreePiece01} alt="three"/>
            <div className="infoPiece">
              <div className="infoSquare" />
            </div>
        </PieceContainer>

        <PieceContainer>
            <img src={ThreePiece02} alt="three h"/>
            <div className="infoPiece">
              <div className="infoSquare" />
            </div>
        </PieceContainer>

      </PageWrapper>
    )
  }
  export default ForeverIsACurrentEvent
// 
