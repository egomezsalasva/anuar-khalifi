import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'
import {TextPlugin} from "gsap/dist/TextPlugin"
import { zIndexes, mediaQueries } from '../project-styles/projectStyles'


//STYLES
    const anuarWhite = "#FCFBFA"
    const anuarBlack = "#030303"

    const PreLoader = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        width: 100vw;
        height: 100vh;
        background: ${anuarWhite};
        z-index: ${zIndexes.websitePreloader};

        .percentageContainer{
            font-family: 'KlarheitKurrentTRIAL-Bold';
            font-weight: 800;
            font-size: 80px;
            color: ${anuarBlack};
            line-height: 100px;
            @media (max-width: ${mediaQueries.mobile}) {
              font-size: 50px;
              line-height: 62.5px;
            }

            .percentSign{
              position: relative;
              font-size: 50px;
              line-height: 100px;
              top: -11px;
              left: 5px;
              @media (max-width: ${mediaQueries.mobile}) {
                top: -7px;
                left: 3px;
                font-size: 32px;
                line-height: 62.5px;
              }
            }
        }
    `
//



const Preloader = () => {

  // Preloader
    const preloaderTl = gsap.timeline()
    let preloaderContainerRef = useRef()
    useEffect(() => {
        preloaderTl.to(preloaderContainerRef, {duration: 1.2, yPercent: -100, ease: "Power2.easeInOut"}).delay(2)
        //  .from(navTitleRef, { duration: 0.9, xPercent: -100}, "-=0.2")
    })  
  //

  //Percentage Timeline

    //GSAP Plugins
      gsap.registerPlugin(TextPlugin)
    //
    //Initialize
      const percentageTl = gsap.timeline()
      const initialLoadPerCentSecs = 0.02
      let introTopNumberRef = useRef(null)
      let introBottomNumberRef = useRef(null)
    //

    useEffect( () => {
      percentageTl
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "١", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٢", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٣", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٤", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٥", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٦", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٧", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٨", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٩", ease: "power2.inOut"})
        .to(introTopNumberRef, {duration:initialLoadPerCentSecs, text: "١", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٠", ease: "power2.inOut"}, `-=${initialLoadPerCentSecs}`)
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "١", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٢", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٣", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٤", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٥", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٦", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٧", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٨", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٩", ease: "power2.inOut"})
        .to(introTopNumberRef, {duration:initialLoadPerCentSecs, text: "٢", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٠", ease: "power2.inOut"}, `-=${initialLoadPerCentSecs}`)
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "١", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٢", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٣", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٤", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٥", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٦", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٧", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٨", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٩", ease: "power2.inOut"})
        .to(introTopNumberRef, {duration:initialLoadPerCentSecs, text: "٣", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٠", ease: "power2.inOut"}, `-=${initialLoadPerCentSecs}`)
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "١", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٢", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٣", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٤", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٥", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٦", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٧", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٨", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٩", ease: "power2.inOut"})
        .to(introTopNumberRef, {duration:initialLoadPerCentSecs, text: "٤", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٠", ease: "power2.inOut"}, `-=${initialLoadPerCentSecs}`)
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "١", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٢", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٣", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٤", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٥", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٦", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٧", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٨", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٩", ease: "power2.inOut"})
        .to(introTopNumberRef, {duration:initialLoadPerCentSecs, text: "٥", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٠", ease: "power2.inOut"}, `-=${initialLoadPerCentSecs}`)
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "١", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٢", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٣", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٤", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٥", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٦", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٧", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٨", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٩", ease: "power2.inOut"})
        .to(introTopNumberRef, {duration:initialLoadPerCentSecs, text: "٦", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٠", ease: "power2.inOut"}, `-=${initialLoadPerCentSecs}`)
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "١", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٢", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٣", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٤", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٥", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٦", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٧", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٨", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٩", ease: "power2.inOut"})
        .to(introTopNumberRef, {duration:initialLoadPerCentSecs, text: "٧", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٠", ease: "power2.inOut"}, `-=${initialLoadPerCentSecs}`)
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "١", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٢", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٣", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٤", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٥", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٦", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٧", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٨", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٩", ease: "power2.inOut"})
        .to(introTopNumberRef, {duration:initialLoadPerCentSecs, text: "٨", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٠", ease: "power2.inOut"}, `-=${initialLoadPerCentSecs}`)
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "١", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٢", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٣", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٤", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٥", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٦", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٧", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٨", ease: "power2.inOut"})
        .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "٩", ease: "power2.inOut"})
        .to(introTopNumberRef, {duration:initialLoadPerCentSecs, text: "٩", ease: "power2.inOut"})
    })
  //

  // Scoll to top
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
  //

  return (
    <PreLoader ref={el => {preloaderContainerRef = el}}>
        <div className="percentageContainer">
            <span ref={el => {introTopNumberRef = el}}>٠</span>
            <span ref={el => {introBottomNumberRef = el}}>٠</span>
            <span className="percentSign"> %</span>
        </div>
    </PreLoader>
  )
}
export default Preloader
