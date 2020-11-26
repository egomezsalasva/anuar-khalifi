import React, {useContext} from 'react'
import styled from 'styled-components'
// import gsap from 'gsap'
import { colors } from '../project-styles/projectStyles'
import { ThemeContext } from '../contexts/themeContext'


const HeaderBg = styled.div`
  position: relative;
  height: 100px;
  width: calc(100% - 180px);
  top: 0;
  right: 0;
  background: ${ props => props.theme.mode === 'dark' ? colors.blue :  colors.white };
  position: fixed;
  display: flex;
  align-items: center;
  z-index: 9;
`

const HeaderContainer = styled.div`
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
      right: 0;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: ${ props => props.theme.mode === 'dark' ? colors.white :  colors.blue };
      border: 2px solid ${colors.blue};
      cursor: pointer;
    }
  }

  .rightHeader{
    .logo{
      font-family: 'RightGrotesk';
      font-size: 25px;
      line-height: 25px;
      color: ${ props => props.theme.mode === 'dark' ? colors.white :  colors.blue };
      letter-spacing: 0.08px;
      text-align: right;
    }
  }
`


const Header = () => {

  const {themeColorToggleHandler} = useContext(ThemeContext)
  
  return (
    <>
        <HeaderBg/>
        <HeaderContainer>
            
            <div className="headerContent">

                <div className="leftHeader">

                    <div className="hamburgerMenu">
                        <div className="line lineLeft" />
                        <div className="line lineCenter" />
                        <div className="line lineRight" /> 
                    </div>

                    <div className="colorThemeDot" onClick={themeColorToggleHandler}/>

                </div>

                <div className="rightHeader">
                    <div className="logo">ANUAR KHALIFI</div>
                </div>

            </div>
        </HeaderContainer>
    </>
  )
}
export default Header




