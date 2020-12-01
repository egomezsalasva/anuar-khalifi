// IMPORTS
  //-Modules
  import React, { useRef, useEffect } from 'react'
  import styled from 'styled-components'
  import gsap from 'gsap'
  //-Styles
  import { colors, fonts, zIndexes } from '../project-styles/projectStyles'
// 


// STYLES
  const PreloaderContainer = styled.div`
    position: fixed;
    top: 100px;
    width: calc(100% - 180px);
    height: calc(100vh - 100px);
    background: ${colors.blue};
    z-index: ${zIndexes.collectionPreloader};
    display: flex;
    justify-content: center;
    align-items: center;

    .preloaderContent{
        /* background: green; */
        transform: translateY(-38px);
        text-align: center;
        color: ${colors.white};

        .title{
            font-size: 30px;
            font-weight: bold;
            font-family: ${fonts.text};
            margin-bottom: 10px;
            text-transform: capitalize;

            .arabicNum{
                font-size: 40px;
            }
        }

        .year{
            font-family: 'helvetica';
            font-size: 20px;
            font-weight: bold;
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
            preloaderTl.to(preloaderCollectionContainerRef, {duration: 1.2, yPercent: -100, ease: "Power2.easeInOut", delay: 0.8 }, "0")
        })  
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
