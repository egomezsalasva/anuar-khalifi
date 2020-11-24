import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'
import ThreePiece01 from '../imgs/threePiece01.png'
import ThreePiece02 from '../imgs/threePiece02.png'
import homeImg01 from '../imgs/home01.png'
import Preloader from '../components/Preloader'

const anuarWhite = "#FCFBFA"
const anuarBlue = "#001F80"
const anuarBlack = "#030303"



const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`

const LeftBar = styled.div`
  position: fixed;
  width: 180px;
  height: 100vh;
  background: ${anuarWhite};
  z-index: 10;
  border-right: 2px solid ${anuarBlue};
  .currentNavTitle{
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(calc(-50% - 5px));
  }
  .overflowNavTitle{
    overflow: hidden;
    transform: rotate(-90deg) translateX(calc(50% - 75px));

    .rotateNavTitle{
      font-family: 'PeakTRIAL-Bold';
      font-size: 130px;
      color: ${anuarBlack};
      line-height: 150px;
      overflow: hidden;
    }
  }
`

const RightContent = styled.div`
  position: absolute;
  right: 0;
  width: calc(100% - 180px);
  min-height: 100vh;
  background: ${ props => props.theme.mode === 'dark' ? anuarBlue :  anuarWhite };

`

const HeaderBg = styled.div`
  position: relative;
  height: 100px;
  width: calc(100% - 180px);
  top: 0;
  right: 0;
  background: ${ props => props.theme.mode === 'dark' ? anuarBlue :  anuarWhite };
  position: fixed;
  display: flex;
  align-items: center;
  z-index: 9;
`
const Header = styled.div`
  position: relative;
  height: 100px;
  width: calc(100% - 180px);
  top: 0;
  right: 0;
  background: transparent;
  position: fixed;
  display: flex;
  align-items: center;
  z-index: 20;

  .headerContent{
    width: 100%;
    margin: 0 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }


  .leftHeader{
    width: 58px;
    height: 24px;
    position: relative;
    display: flex;
    align-items: center;

    .hamburgerMenu{
      width: 18px;
      height: 24px;
      cursor: pointer;
      .line{
        width: 2px;
        height: 100%;
        /* mix-blend-mode: difference; */
        background: ${ props => props.theme.mode === 'dark' ? anuarWhite :  anuarBlue };
      }
      .lineLeft{
        position: absolute;
        left: 0;
      }
      .lineCenter{
        position: absolute;
        left: 8px;
      }
      .lineRight{
        position: absolute;
        left: 16px;
      }
    }

    .colorThemeDot{
      position: absolute;
      right: 0;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: ${ props => props.theme.mode === 'dark' ? anuarWhite :  anuarBlue };
      border: 2px solid ${anuarBlue};
      cursor: pointer;
    }
  }

  .rightHeader{
    .logo{
      font-family: 'RightGrotesk-CompactBlack';
      font-size: 25px;
      line-height: 25px;
      color: ${ props => props.theme.mode === 'dark' ? anuarWhite :  anuarBlue };
      letter-spacing: 0.08px;
      text-align: right;
    }
  }
`

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

const Menu = styled.div`
  width: 340px;
  height: 100vh;
  position: fixed;
  background: ${anuarWhite};
  top: 0;
  left: -340px;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: ${ props => props.theme.mode === 'dark' ? `0px solid ${anuarBlue}` :  `2px solid ${anuarBlue}` };
  .menuList{
    .menuOption{
      /* width: 120px; */
      transform: translateX(-20px);
      font-family: 'PeakTRIAL-Bold';
      font-size: 20px;
      color: ${anuarBlack};
      margin-bottom: 10px;
      cursor: pointer;
    }
  }
`

const Desoriente = () => {

  // Color Themeing
    const [theme, setTheme] = useState({ mode: "dark" })
    const [themeColorToggle, setThemeColorToggle] = useState(false)
    const themeColorToggleHandler = () => {
      if(themeColorToggle === false){
        setTheme({ mode: "light"})
      } else {
        setTheme({ mode: "dark"})
      }
      setThemeColorToggle(!themeColorToggle)
    }
  // 

  // Menu Animation

    const [menuActive, setMenuActive] = useState(false)
    const menuHamburgerHoverTl = gsap.timeline({ paused: true })
    // const menuHamburgerClickTl = gsap.timeline({paused: true})
    let lineLeftRef = useRef()
    let lineCenterRef = useRef()
    let lineRightRef = useRef()
    let leftBarRef = useRef()
    let menuRef = useRef()

    useEffect(() => {
      menuHamburgerHoverTl.to( lineCenterRef, { duration: 0.8, x: "8px", ease:"Power2.easeInOut" }, "0")
                          .to( lineLeftRef, { duration: 0.8, x: "8px", ease:"Power2.easeInOut" }, "0")
                          .to( leftBarRef, { duration: 0.8, width: "196px", ease:"Power2.easeInOut" }, "0")
    }, [menuHamburgerHoverTl])

    //- Handlers
      const hoverInHandler = () => {
        menuActive ? menuHamburgerHoverTl.pause() : menuHamburgerHoverTl.play()
      }
      const hoverOutHandler = () => {
        menuActive ? menuHamburgerHoverTl.pause() : menuHamburgerHoverTl.reverse()
      }
      const clickHandler = () => {
        const tl = gsap.timeline()
        tl.to( menuRef, { duration: 1.2, x: "340px", ease:"Power2.easiInOut" }, "0" )
          .to( ".line", { duration: 1.2, background: anuarBlack, ease:"Power2.easiInOut"}, "0")
          .to(lineRightRef, { duation: 0, opacity: "0"}, "0")
          .to(lineCenterRef, { duation: 100, x: "0px" }, "0")
          .to(lineCenterRef, { duation: 100, rotate: "45" }, "1")
          .to(lineLeftRef, { duation: 100, rotate: "-45" }, "1")
        setMenuActive(true)
      }
    // 
  
  //

  return (
    <Container>

        <Preloader />

        <LeftBar ref={el => {leftBarRef = el}}>
        <div className="currentNavTitle">
            <div className="overflowNavTitle">
                <div className="rotateNavTitle">٣</div>
            </div>
        </div>
        </LeftBar>

        <Menu ref={ el => {menuRef = el}}>
        <div className="menuList">
            <div className="menuOption">٣</div>
            <div className="menuOption">٢</div>
            <div className="menuOption">١</div>
            <div className="menuOption">Bio</div>
            <div className="menuOption">Contact</div>
        </div>
        </Menu>

        <RightContent>
        <HeaderBg/>
        <Header>
            <div className="headerContent">
            <div className="leftHeader">
                <div className="hamburgerMenu" 
                onMouseEnter={ hoverInHandler } 
                onMouseLeave={ hoverOutHandler }
                onClick={ clickHandler }
                >
                <div className="line lineLeft" ref={el => { lineLeftRef = el }}/>
                <div className="line lineCenter" ref={el => { lineCenterRef = el }}/>
                <div className="line lineRight" ref={el => { lineRightRef = el }}/> 
                
                </div>

                <div className="colorThemeDot" onClick={themeColorToggleHandler}/>

            </div>
            <div className="rightHeader">
                <div className="logo">ANUAR KHALIFI</div>
            </div>
            </div>
            
        </Header>

        <PieceContainer>
            <img src={homeImg01} alt="three"/>
        </PieceContainer>

        <PieceContainer>
            <img src={ThreePiece01} alt="three"/>
        </PieceContainer>

        <PieceContainer>
            <img src={ThreePiece02} alt="three h"/>
        </PieceContainer>

        </RightContent>

    </Container>
  )
}
export default Desoriente
