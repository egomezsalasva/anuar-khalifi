// IMPORTS
  //-Modules
  import React, { useEffect, useRef, useState, useLayoutEffect } from 'react'
  import styled from 'styled-components'
  import gsap from 'gsap'
  import { LazyLoadImage } from 'react-lazy-load-image-component'
  import 'react-lazy-load-image-component/src/effects/blur.css'
  //-Assets
  import { colors, mediaQueries } from '../project-styles/projectStyles'
// 


// STYLES

  // const pieceHeight = "77.5vh" //620px
  const pieceHeight = "75vh" //600px
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
    margin-bottom: 150px;

    @media (max-width: ${mediaQueries.mobile}) {
      max-width: 100vw;
      height: auto;
      margin-bottom: 140px;
      margin-top: 140px;
      flex-direction: column;
    }

    .infoPiece{
      display: inline-block;
      position: relative;
      width: ${widthInfoContainer};
      height: 100px;
      top: calc( (${pieceHeight} / 2) - 80px );
      left: calc( 40px + (${widthInfoContainer} / 2) );
      transform: translate( -${leftOffset}, ${topOffset} );
      @media (max-width: ${mediaQueries.mobile}) {
        transform: translate(0, 0);
        left: 0;
        top: 0;
        display: flex;
        text-align: center;
        justify-content: center;
        flex-direction: column;
        margin-top: 30px;
      }

      .infoSquare{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 20px;
        height: 20px;
        background: ${ props => props.theme.mode === 'dark' ? colors.white :  colors.blue };
        cursor: pointer;
        @media (max-width: ${mediaQueries.mobile}) {
          top: 0;
          left: 50%;
          transform: translateX(-50%);
        }
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

        @media (max-width: ${mediaQueries.mobile}) {
          top: 35px;
          width: 100%;
          max-width: 100%;
        }

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
    position: relative;
    height: ${pieceHeight};
    box-shadow: 1px 2px 15px 0 rgba(0,0,0,0.25);
    transform: translateX( calc((${widthInfoContainer}/2) - ${leftOffset})) translateY(${topOffset});
    @media (max-width: ${mediaQueries.mobile}) {
      width: calc(100vw - 10px - 10px);
      height: auto;
      transform: translateX(0) translateY(0);
    }
  `
//


// CUSTOM RESIZE HOOK
  const useWindowSize = () => {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }
// 


// MAIN COMPONENT
  const Piece = ({ imageProp, imageMobileProp, nameProp, measurementsProp, techniquesProp }) => {

    const infoTl = gsap.timeline({ paused: true })

    let nameRef = useRef()
    let techniquesRef = useRef()
    let measurementsRef = useRef()
    
    useEffect(() => {
      infoTl.to([nameRef, techniquesRef, measurementsRef], {duration: 0.375, yPercent: -100, stagger: 0.125, ease: "Power1.easeInOut"})
    }, [infoTl])

    const [width] = useWindowSize()

    
    return (
        <PieceContainer>


            { width < 430 ? <PieceImg src={imageMobileProp} alt={nameProp} effect="blur" threshold="1000" /> : <PieceImg src={imageProp} alt={nameProp} effect="blur" threshold="1000" placeholderSrc={imageMobileProp} /> }
            
            <div className="infoPiece">

              <div className="infoSquare" 
                onMouseEnter={() => infoTl.play()} 
                onMouseLeave={() => infoTl.reverse()}
              />

              <div className="infoTextWrapper">
                <div className="nameOverflow">
                  <div className="name" ref={ el => nameRef = el }>{nameProp}</div>
                </div>
                <div className="techniquesOverflow">
                  <div className="techniques" ref={el => techniquesRef = el}>{techniquesProp}</div>
                </div>
                <div className="measurementsOverflow">
                  <div className="measurements" ref={el => measurementsRef = el}><span>{measurementsProp}</span> cm</div>
                </div>
              </div>

            </div>
        </PieceContainer>
    )
  }
  export default Piece
// 
