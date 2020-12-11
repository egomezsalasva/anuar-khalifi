// IMPORTS
  //-Modules
  import React, { useRef, useEffect } from 'react'
  import styled from 'styled-components'
  import gsap from 'gsap'
  //-Styles
  import { colors, fonts, zIndexes, mediaQueries } from '../project-styles/projectStyles'
// 


// STYLES
  const PreloaderContainer = styled.div`
    position: fixed;
    top: 100px;
    width: calc(100% - 180px);
    height: calc(100vh - 100px);
    background: ${ props => props.theme.mode === 'dark' ? colors.blue :  colors.white };
    z-index: ${zIndexes.collectionPreloader};
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: ${mediaQueries.tablet}) {
        width: 100%;
    }
    @media (max-width: ${mediaQueries.mobile}) {
      top: 80px;
      height: calc(100vh - 80px);
      width: 100%;
    }

    .preloaderContent{
        transform: translateY(-38px);
        text-align: center;
        color: ${ props => props.theme.mode === 'dark' ? colors.white :  colors.blue };

        .title{
            font-size: 30px;
            font-weight: bold;
            font-family: ${fonts.text};
            margin-bottom: 10px;
            text-transform: capitalize;
            @media (max-width: ${mediaQueries.mobile}) {
              font-size: 19px;
            }

            .arabicNum{
                font-size: 40px;
                @media (max-width: ${mediaQueries.mobile}) {
                  font-size: 25px;
                }
            }
        }

        .year{
            font-family: 'helvetica';
            font-size: 20px;
            font-weight: bold;
            @media (max-width: ${mediaQueries.mobile}) {
              font-size: 13px;
            }
        }

    }
  `
//


// MAIN COMPONENT
  const CollectionPreloader = ({ numProp, titleProp, yearProp, arabYearProp }) => {

    // Preloader
        const preloaderTl = gsap.timeline()
        let preloaderCollectionContainerRef = useRef()
        useEffect(() => {
            preloaderTl.to(preloaderCollectionContainerRef, {duration: 1.2, yPercent: -100, ease: "Power2.easeInOut", delay: 1.2 }, "0")
        }, [preloaderTl])
    //

    // Scoll to top
      useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    // 

    // Disable Scroll on preloader
      
    // 

    return (
      <PreloaderContainer ref={ el => preloaderCollectionContainerRef = el}>
          <div className="preloaderContent">
            <div className="title"><span className="arabNum">{numProp} </span> &nbsp; {titleProp}</div>
            <div className="year">{yearProp} &nbsp; / &nbsp; {arabYearProp}</div>
          </div>
      </PreloaderContainer>
    )
  }
  export default CollectionPreloader
// 
