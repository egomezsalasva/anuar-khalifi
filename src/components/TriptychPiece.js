// IMPORTS
  //-Modules
  import React, { useEffect, useRef } from 'react'
  import styled from 'styled-components'
  import gsap from 'gsap'
  import { LazyLoadImage } from 'react-lazy-load-image-component'
  import 'react-lazy-load-image-component/src/effects/blur.css'
  //-Assets
  import { colors } from '../project-styles/projectStyles'
  import triptychTheNegus from '../imgs/triptychTheNegus.png'
// 


// STYLES

  const PieceContainer = styled.div`
    position: relative;
    width: 100%;
    height: calc( 100vh - 100px );
    margin-top: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .infoTriptychPiece{
      position: relative;
      display: flex;
      text-align: center;
      justify-content: center;
      margin-top: 30px;

      .infoSquare{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        width: 20px;
        height: 20px;
        background: ${ props => props.theme.mode === 'dark' ? colors.white :  colors.blue };
        cursor: pointer;
      }

      .infoTextWrapper{
        position: absolute;
        top: 35px;
        font-weight: bold;
        font-size: 12px;
        line-height: 1.1;
        color: ${ props => props.theme.mode === 'dark' ? colors.white :  colors.blue };
        width: 500px;
        text-align: center;

        .nameOverflow{
          overflow: hidden;
          margin-bottom: 5px;

          .name{
            transform: translateY(100%);
            text-transform: capitalize;
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
  const PieceImg = styled(LazyLoadImage)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
  `
//


// MAIN COMPONENT
  const TriptychPiece = () => {

    const infoTl = gsap.timeline({ paused: true })

    let nameRef = useRef()
    let techniquesRef = useRef()
    let measurementsRef = useRef()
    
    useEffect(() => {
      infoTl.to([nameRef, techniquesRef, measurementsRef], {duration: 0.375, yPercent: -100, stagger: 0.125, ease: "Power1.easeInOut"})
    }, [infoTl])

    
    return (
        <PieceContainer>


            <PieceImg src={triptychTheNegus} alt='The Negus Asked Me "Do you want to be Sultan or Rumi? And Then Opened A Pomegranate'/>
            
            <div className="infoTriptychPiece">

              <div className="infoSquare" onMouseEnter={ () => infoTl.play() } onMouseLeave={ () => infoTl.reverse() } />

              <div className="infoTextWrapper">
                <div className="nameOverflow">
                  <div className="name" ref={ el => nameRef = el }>The Negus Asked Me "Do you want to be Sultan or Rumi? And Then Opened A Pomegranate</div>
                </div>
                <div className="techniquesOverflow">
                  <div className="techniques" ref={el => techniquesRef = el}>Acrylic on canvas</div>
                </div>
                <div className="measurementsOverflow">
                  <div className="measurements" ref={el => measurementsRef = el}><span>190 / 160</span> cm Each</div>
                </div>
              </div>

            </div>
            
        </PieceContainer>
    )
  }
  export default TriptychPiece
// 
