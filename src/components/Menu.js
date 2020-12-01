// IMPORTS
    //-Modules
    import React, { useEffect, useRef, useContext, useState } from 'react'
    import styled from 'styled-components'
    import gsap from 'gsap'
    import { Link } from 'react-router-dom'
    //-Styles
    import { colors, fonts, zIndexes } from '../project-styles/projectStyles'
    import { ThemeContext } from '../contexts/themeContext'
// 


// STYLES
    const titleLineHeight = "100px"
    const MenuContainer = styled.div`
        width: 340px;
        height: 100vh;
        position: fixed;
        z-index: ${zIndexes.menu};

        .hamburgerMenu{
            width: 18px;
            height: 24px;
            cursor: pointer;
            position: absolute;
            top: 38px;
            right: 92px;
            z-index: ${zIndexes.menuButtons};

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
        }

        .colorThemeDot{
            position: absolute;
            top: 38px;
            right: 52px;
            width: 25px;
            height: 25px;
            border-radius: 50%;
            background: ${ props => props.theme.mode === 'dark' ? colors.white :  colors.blue };
            border: ${ props => props.theme.mode === 'dark' ? "2px solid" + colors.blue :  "2px solid" + colors.white };
            cursor: pointer;
            z-index: ${zIndexes.menuButtons};
        }

        .menuBlockContainer{
            width: 340px;
            height: 100%;
            position: absolute;
            background: ${ props => props.theme.mode === 'dark' ? colors.white:  colors.blue };
            transform: translateX(-160px);
            display: flex;
            justify-content: center;
            align-items: center;

            .currentNavTitleContainer{
                position: absolute;
                right: 0;
                height: 100%;
                width: 180px;
    
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
                            font-family: ${fonts.bold};
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
        }

    `
// 


// MAIN COMPONENT
    const Menu = ({navTitleProp}) => {

        // Toggle Theme Color
            const {themeColorToggleHandler} = useContext(ThemeContext)
        // 

        // Click Menu  

            const [hamburguerTl] = useState(gsap.timeline({ paused: true }))
            const [menuTl] = useState(gsap.timeline({ paused: true }))
            const [menuActive, setMenuActive] = useState(false)
            let leftLineRef = useRef()
            let centerLineRef = useRef()
            let rightLineRef = useRef()
            let navTitleRef = useRef()
            let menuListRef = useRef()
            let menuBlockRef = useRef()

            
            useEffect(() => {
                menuTl
                // Main Block
                    .to(menuBlockRef, {duration: 0.8, x: "0px", ease: "Power2.easeInOut"}, "0")
                // Title Overflow  
                    .to(navTitleRef, {duration: 0.8, yPercent: -150, ease: "Power2.easeInOut"}, "0")
                //Hamburguer Menu   
                    .to(leftLineRef, {duration: 0.8, x: "8px", ease: "Power2.easeInOut"}, "0")
                    .to(centerLineRef, {duration: 0.8, opacity: 0, ease: "Power2.easeInOut"}, "0")
                    .to(rightLineRef, {duration: 0.8, x: "-8px", ease: "Power2.easeInOut"}, "0")
                    .to(".line", {duration: 0.8, background: colors.black, ease: "Power2.easeInOut"}, "0")
                    .to(centerLineRef, {duration: 0.8, x: "0px", ease: "Power1.easeInOut"}, "0")

                    .to(menuListRef, {duration: 1, opacity: 1, ease: "Power2.easeInOut"}, "1-=0.2")

                    .to(leftLineRef, {duration: 0.4, rotate: 45, ease: "Power1.easeInOut"}, "1")
                    .to(rightLineRef, {duration: 0.4, rotate: -45, ease: "Power1.easeInOut"}, "1")
                    .reverse()
            }, [menuTl])

            const afterMenuTl = () => {
                if(menuTl.reversed()){
                    return gsap.to(menuBlockRef, {duration: 0.2, x: "-160px", delay: 1.6})
                }
            }
            
            const menuClickHandler = () => {
                menuTl.reversed(!menuTl.reversed()).eventCallback("onComplete", afterMenuTl())
                setMenuActive(!menuActive)
            }

        // 
    
        // Hover Hamburguer Menu
            useEffect(() => {
                hamburguerTl.to(menuBlockRef, {duration: 0.8, x: "-140px", ease: "Power2.easeInOut"})
            }, [hamburguerTl]) 
        //


        return (
            <MenuContainer >

                <div className="hamburgerMenu" 
                    onMouseEnter={ () => menuActive === false && menuTl.isActive() === false ? hamburguerTl.play() : null} 
                    onMouseLeave={ () => menuActive === false && menuTl.isActive() === false ? hamburguerTl.reverse() : null}
                    onClick={menuClickHandler}
                >
                    <div className="line lineLeft"  ref={ el => leftLineRef = el } />
                    <div className="line lineCenter" ref={ el => centerLineRef = el } />
                    <div className="line lineRight" ref={ el => rightLineRef = el }/> 
                </div>

                <div className="colorThemeDot" onClick={themeColorToggleHandler}/>

                <div className="menuBlockContainer" ref={ el => menuBlockRef = el }>

                    <div className="currentNavTitleContainer">
                        <div className="currentNavTitle">
                            <div className="overflowNavTitle">
                                <div className="rotateNavTitle" ref={el => navTitleRef = el}>{navTitleProp}</div>
                            </div>
                        </div>
                    </div>

                    <div className="menuList" ref={el => menuListRef = el}>

                        <Link to="/selected-works-2020" onClick={menuClickHandler}>
                            <div className="menuOption">٤</div>
                        </Link>

                        <Link to="/forever-is-a-current-event" onClick={menuClickHandler}>
                            <div className="menuOption">٣</div>
                        </Link>

                        <Link to="/dust-roses-and-cockroaches" onClick={menuClickHandler}>
                            <div className="menuOption">٢</div>
                        </Link>

                        <Link to="/desoriente" onClick={menuClickHandler}>
                            <div className="menuOption">١</div>
                        </Link>

                        <Link to="/bio" onClick={menuClickHandler}>
                            <div className="menuOption">Bio</div>
                        </Link>

                        <Link to="/contact" onClick={menuClickHandler}>
                            <div className="menuOption">Contact</div>
                        </Link>

                    </div>

                </div>

            </MenuContainer>
        )
    }
    export default Menu
// 





