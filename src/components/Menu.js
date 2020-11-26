// IMPORTS
    //-Modules
    import React from 'react'
    import styled from 'styled-components'
    import { Link } from 'react-router-dom'
    //-Styles
    import { colors, fonts } from '../project-styles/projectStyles'
// 


// STYLES
    const titleLineHeight = "100px"
    const MenuContainer = styled.div`
        width: 340px;
        height: 100vh;
        position: fixed;
        background: ${colors.white};
        top: 0;
        left: -160px;
        left: 0;
        z-index: 20;
        display: flex;
        justify-content: center;
        align-items: center;
        border-right: ${ props => props.theme.mode === 'dark' ? `0px solid ${colors.blue}` :  `2px solid ${colors.blue}` };

        .currentNavTitleContainer{
            position: absolute;
            right: 0;
            height: 100%;
            width: 180px;

            .currentNavTitle{
                position: absolute;
                bottom: 40px;
                right: 50%;
                transform: translateX(calc(50%));

                .overflowNavTitle{
                    overflow: hidden;
                    transform: rotate(-90deg) translateX(calc(50% - (${titleLineHeight}/2)));
            
                    .rotateNavTitle{
                        font-family: ${fonts.bold};
                        font-size: 130px;
                        color: ${colors.black};
                        line-height: ${titleLineHeight};
                        overflow: hidden;
                        transform: translateY(-0px);
                    }
                }
            }
        }

        .menuList{
            .menuOption{
                opacity: 1;
                /* width: 120px; */
                transform: translateX(-20px);
                font-family: ${fonts.bold};
                font-size: 20px;
                color: ${colors.black};
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
    
        return (
            <MenuContainer>
                <div className="currentNavTitleContainer">
                    <div className="currentNavTitle">
                        <div className="overflowNavTitle">
                            <div className="rotateNavTitle">{navTitleProp}</div>
                        </div>
                    </div>
                </div>
                <div className="menuList">

                    <Link to="/forever-is-a-current-event">
                        <div className="menuOption">٣</div>
                    </Link>

                    <Link to="/dust-roses-and-cockroaches">
                        <div className="menuOption">٢</div>
                    </Link>

                    <Link to="/desoriente">
                        <div className="menuOption">١</div>
                    </Link>

                    <Link to="/bio">
                        <div className="menuOption">Bio</div>
                    </Link>

                    <Link to="/contact">
                        <div className="menuOption">Contact</div>
                    </Link>

                </div>
            </MenuContainer>
        )
    }
    export default Menu
// 





