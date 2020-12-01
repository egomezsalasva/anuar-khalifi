// IMPORTS
  //-Modules
  import React from 'react'
  import styled from 'styled-components'
  //-Assets
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
          margin-bottom: 5px;

          .name{
            transform: translateY(100%);
          }
        }

        .techniquesOverflow{
          overflow: hidden;
          margin-bottom: 6px;

          .techniques{
            transform: translateY(100%);
          }
        }
        
        .measurementsOverflow{
          overflow: hidden; 

          .measurements{
            transform: translateY(100%);

            span{
              font-size: 11px;
            }
          } 
        }

      }
    }
  `
//


// MAIN COMPONENT
  const Piece = ({imageProp, nameProp, measurementsProp, techniquesProp, onMouseEnterProp, onMouseLeaveProp}) => {


    return (
        <PieceContainer>
            <img src={imageProp} alt="three"/>
            <div className="infoPiece">

              <div className="infoSquare" 
                onMouseEnter={onMouseEnterProp} 
                onMouseLeave={onMouseLeaveProp}
              />

              <div className="infoTextWrapper">
                <div className="nameOverflow">
                  <div className="name infoAnim">{nameProp}</div>
                </div>
                <div className="techniquesOverflow">
                  <div className="techniques infoAnim">{techniquesProp}</div>
                </div>
                <div className="measurementsOverflow">
                  <div className="measurements infoAnim"><span>{measurementsProp}</span> cm</div>
                </div>
              </div>

            </div>
        </PieceContainer>
    )
  }
  export default Piece
// 
