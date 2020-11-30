// IMPORTS
  //-Modules
  import React, { useEffect } from 'react'
  import styled from 'styled-components'
  import gsap from 'gsap'
  //-Components
  import PageWrapper from '../components/PageWrapper'
  //-Assets
  import ThreePiece01 from '../imgs/threePiece01.png'
  import ThreePiece02 from '../imgs/threePiece02.png'
  import homeImg01 from '../imgs/home01.png'
  import { colors } from '../project-styles/projectStyles'
// 


// STYLES
  const widthInfoContainer = "200px"
  const leftOffset = "10px"
  const topOffset = "-18px"
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
      height: 600px;
      box-shadow: 1px 2px 15px 0 rgba(0,0,0,0.25);
      transform: translateX( calc((${widthInfoContainer}/2) - ${leftOffset})) translateY(${topOffset});
    }

    .infoPiece{
      display: inline-block;
      position: relative;
      width: ${widthInfoContainer};
      height: 100px;
      /* background: red; */
      top: calc(300px - 80px);
      left: calc( 40px + (${widthInfoContainer}/2) );
      transform: translateX(-${leftOffset}) translateY(${topOffset});

      .infoSquare{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 20px;
        height: 20px;
        background: ${ props => props.theme.mode === 'dark' ? colors.white :  colors.blue };
        cursor: pointer;
      }

      .infoTextWrapper{
        position: absolute;
        font-weight: bold;
        font-size: 12px;
        line-height: 1.1;
        color: ${ props => props.theme.mode === 'dark' ? colors.white :  colors.blue };
        width: 160px;
        right: 0;
        bottom: 0;
        max-width: 160px;

        .nameOverflow{
          overflow: hidden;
          margin-bottom: 4px;

          .name{
            transform: translateY(100%);
          }
        }
        
        .measurementsOverflow{
          overflow: hidden;
          margin-bottom: 4px;

          .measurements{
            transform: translateY(100%);
          } 
        }

        .techniquesOverflow{
          overflow: hidden;

          .techniques{
            transform: translateY(100%);
          }
        }
      }
    }
  `
//


// MAIN COMPONENT
  const ForeverIsACurrentEvent = () => {

    const infoTl = gsap.timeline({paused: true})
    
    useEffect(() => {
      infoTl.to(".infoAnim", {duration: 0.6, yPercent: -100, stagger: 0.125, ease: "Power1.easeInOut"})
    }) 

    return (
      <PageWrapper navTitleProp="٣" >

        <PieceContainer>
            <img src={homeImg01} alt="three"/>
            <div className="infoPiece">
              <div className="infoSquare" onMouseEnter={() => infoTl.play()} onMouseLeave={() => infoTl.reverse()}/>
              <div className="infoTextWrapper">
                <div className="nameOverflow">
                  <div className="name infoAnim">Name Of Piece</div>
                </div>
                <div className="measurementsOverflow">
                  <div className="measurements infoAnim">Measurements</div>
                </div>
                <div className="techniquesOverflow">
                  <div className="techniques infoAnim">Technique</div>
                </div>
              </div>
            </div>
        </PieceContainer>

        <PieceContainer>
            <img src={ThreePiece01} alt="three"/>
            <div className="infoPiece">
              <div className="infoSquare" />
              <div className="infoTextWrapper">
                <div className="nameOverflow">
                  <div className="name">Name Of Piece</div>
                </div>
                <div className="measurementsOverflow">
                  <div className="measurements">Measurements</div>
                </div>
                <div className="techniquesOverflow">
                  <div className="techniques">Technique</div>
                </div>
              </div>
            </div>
        </PieceContainer>

        <PieceContainer>
            <img src={ThreePiece02} alt="three h"/>
            <div className="infoPiece">
              <div className="infoSquare" />
              <div className="infoTextWrapper">
                <div className="nameOverflow">
                  <div className="name">Name Of Piece</div>
                </div>
                <div className="measurementsOverflow">
                  <div className="measurements">Measurements</div>
                </div>
                <div className="techniquesOverflow">
                  <div className="techniques">Technique</div>
                </div>
              </div>
            </div>
        </PieceContainer>

      </PageWrapper>
    )
  }
  export default ForeverIsACurrentEvent
// 
