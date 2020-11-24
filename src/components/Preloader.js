import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'
import {TextPlugin} from "gsap/dist/TextPlugin"


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
        z-index: 1000;
        .percentageContainer{
            /* font-family: 'Helvetica-Bold'; */
            /* font-family: 'RightGrotesk-CompactBlack'; */
            font-family: 'KlarheitKurrentTRIAL-Bold';
            font-weight: 800;
            font-size: 80px;
            color: ${anuarBlack};
            line-height: 100px;
            .percentSign{
            position: relative;
            font-size: 50px;
            line-height: 100px;
            top: -11px;
            left: 5px
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