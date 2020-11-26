import React from 'react'
import styled from 'styled-components'
// import gsap from 'gsap'
import { colors, fonts } from '../project-styles/projectStyles'

const titleLineHeight = "100px"
const MenuContainer = styled.div`
  width: 340px;
  height: 100vh;
  position: fixed;
  background: ${colors.white};
  top: 0;
  left: -160px;
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
      opacity: 0;
      /* width: 120px; */
      transform: translateX(-20px);
      font-family: ${fonts.bold};
      font-size: 20px;
      color: ${colors.black};
      margin-bottom: 10px;
      cursor: pointer;
    }
  }
`


const Menu = () => {
  
  return (
    <MenuContainer>
        <div className="currentNavTitleContainer">
            <div className="currentNavTitle">
                <div className="overflowNavTitle">
                    <div className="rotateNavTitle">٣</div>
                </div>
            </div>
        </div>
        <div className="menuList">
            <div className="menuOption">٣</div>
            <div className="menuOption">٢</div>
            <div className="menuOption">١</div>
            <div className="menuOption">Bio</div>
            <div className="menuOption">Contact</div>
        </div>
    </MenuContainer>
  )
}
export default Menu





