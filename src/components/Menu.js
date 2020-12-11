// IMPORTS
    //-Modules
    import React, { useEffect, useRef, useContext, useState } from 'react'
    import styled from 'styled-components'
    import gsap from 'gsap'
    import { Link } from 'react-router-dom'
    //-Styles
    import { colors, fonts, zIndexes, mediaQueries } from '../project-styles/projectStyles'
    import { ThemeContext } from '../contexts/themeContext'
// 


// STYLES

    const HamburgerMenu = styled.div`
        width: 18px;
        height: 24px;
        cursor: pointer;
        position: fixed;
        top: 38px;
        left: calc(180px + 50px);
        z-index: ${zIndexes.menuButtons};
        @media (max-width: ${mediaQueries.tablet}) {
            left: 50px;
        }

        .line{
            width: 2px;
            height: 100%;
            background: ${ props => props.theme.mode === 'dark' ? colors.white :  colors.blue };
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
    `

    const titleLineHeight = "100px"
    const MenuBlockContainer = styled.div`
        width: 340px;
        height: 100vh;
        position: fixed;
        z-index: ${zIndexes.menu};
        background: ${ props => props.theme.mode === 'dark' ? colors.white:  colors.blue };
        transform: translateX(-160px);
        display: flex;
        justify-content: center;
        align-items: center;
        @media (max-width: ${mediaQueries.tablet}) {
            width: 100vw;
            transform: translateX(-100vw);
        }

        .currentNavTitleContainer{
            position: absolute;
            right: 0;
            height: 100%;
            width: 180px;
            @media (max-width: ${mediaQueries.tablet}) {
                display: none;
            }

            .currentNavTitle{
                position: absolute;
                bottom: 40px;
                right: 50%;
                transform: translateX(calc(50% - 6px));
                font-weight: bold;

                .overflowNavTitle{
                    overflow: hidden;
                    transform: rotate(-90deg) translateX( calc( 50% - ( ${titleLineHeight} / 2 ) ) );
            
                    .rotateNavTitle{
                        font-weight: bold;
                        font-size: 130px;
                        color: ${ props => props.theme.mode === 'dark' ? colors.black :  colors.white };
                        line-height: ${titleLineHeight};
                        overflow: hidden;
                        transform: translateY(-0px);
                    }
                }
            }
        }

        .menuList{
            opacity: 0;

            .menuOption{
                /* width: 120px; */
                transform: translateX(-20px);
                font-family: ${fonts.bold};
                font-weight: bold;
                font-size: 20px;
                color: ${ props => props.theme.mode === 'dark' ? colors.black :  colors.white };
                margin-bottom: 10px;
                cursor: pointer;
            }
        }

        a{
            text-decoration: none;
        }
    `

// 


// MAIN COMPONENT
    const Menu = ({navTitleProp}) => {

        // Toggle Theme Color
            const { contextTheme } = useContext(ThemeContext)
        // 

        // Click Menu  
            const [menuTl] = useState(gsap.timeline({ paused: true }))
            const [menuActive, setMenuActive] = useState(false)
            let leftLineRef = useRef()
            let centerLineRef = useRef()
            let rightLineRef = useRef()
            let navTitleRef = useRef()
            let menuListRef = useRef()
            let menuBlockRef = useRef()

            // Check theme for line colors
                const [linesColor, setLinesColor] = useState(colors.black)
                useEffect(() => {
                    if(contextTheme.mode === "dark"){
                        setLinesColor(colors.black)
                    }
                    if(contextTheme.mode === "light"){
                        setLinesColor(colors.white)
                    }
                }, [setLinesColor, contextTheme])
            // 

            
            useEffect(() => {
                const time01 = 0.8
                menuTl
                // Main Block
                    .to(menuBlockRef, {duration: time01, x: "0px", ease: "Power2.easeInOut"}, "0")
                // Title Overflow  
                    .to(navTitleRef, {duration: time01, yPercent: -150, ease: "Power2.easeInOut"}, "0")
                //Hamburguer Menu   
                    .to(leftLineRef, {duration: time01, x: "8px", ease: "Power2.easeInOut"}, "0")
                    .to(centerLineRef, {duration: time01, opacity: 0, ease: "Power2.easeInOut"}, "0")
                    .to(rightLineRef, {duration: time01, x: "-8px", ease: "Power2.easeInOut"}, "0")
                    .to(".line", {duration: time01, background: linesColor, ease: "Power2.easeInOut"}, "0")
                    .to(centerLineRef, {duration: time01, x: "0px", ease: "Power1.easeInOut"}, "0")
                // Menu list
                    .to(menuListRef, {duration: time01, opacity: 1, ease: "Power2.easeInOut"}, "1-=0.6")
                // Hamburger menu Rotate
                    .to(leftLineRef, {duration: 0.4, rotate: 45, ease: "Power1.easeInOut"}, "1-=0.4")
                    .to(rightLineRef, {duration: 0.4, rotate: -45, ease: "Power1.easeInOut"}, "1-=0.4")
                    .reverse()
            }, [menuTl, linesColor])
            
            const menuClickHandler = () => {
                if(menuTl.isActive() === false){
                    menuTl.reversed(!menuTl.reversed())
                    setMenuActive(!menuActive)
                }
            }
        //

        return (
            <>

                <HamburgerMenu onClick={menuClickHandler} >
                    <div className="line lineLeft"  ref={ el => leftLineRef = el } />
                    <div className="line lineCenter" ref={ el => centerLineRef = el } />
                    <div className="line lineRight" ref={ el => rightLineRef = el }/> 
                </HamburgerMenu>

                <MenuBlockContainer ref={ el => menuBlockRef = el }>

                    <div className="currentNavTitleContainer">
                        <div className="currentNavTitle">
                            <div className="overflowNavTitle">
                                <div className="rotateNavTitle" ref={el => navTitleRef = el}>{navTitleProp}</div>
                            </div>
                        </div>
                    </div>

                    <div className="menuList" ref={el => menuListRef = el}>

                        <Link to="/selected-works-2020" onClick={menuClickHandler}>
                            <div className="menuOption">٣</div>
                        </Link>

                        <Link to="/forever-is-a-current-event" onClick={menuClickHandler}>
                            <div className="menuOption">٢</div>
                        </Link>

                        <Link to="/dust-roses-and-cockroaches" onClick={menuClickHandler}>
                            <div className="menuOption">١</div>
                        </Link>

                        {/* <Link to="/desoriente" onClick={menuClickHandler}>
                            <div className="menuOption">١</div>
                        </Link> */}

                        <Link to="/bio" onClick={menuClickHandler}>
                            <div className="menuOption">Bio</div>
                        </Link>

                        <Link to="/contact" onClick={menuClickHandler}>
                            <div className="menuOption">Contact</div>
                        </Link>

                    </div>

                </MenuBlockContainer>
            </>
        )
    }
    export default Menu
// 





