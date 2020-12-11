// IMPORTS
  //-Modules
  import React, { useContext, useState, useEffect } from 'react'
  import { Switch, Route, useLocation } from "react-router-dom"
  import styled, {createGlobalStyle, ThemeProvider } from 'styled-components'
  //-Components
  import Menu from './components/Menu'
  import Preloader from './components/Preloader'
  //-Pages
  import Home from './pages/Home'
  import SelectedWorks from './pages/SelectedWorks'
  import ForeverIsACurrentEvent from './pages/ForeverIsACurrentEvent'
  import DustRosesAndCockroaches from './pages/DustRosesAndCockroaches'
  import Bio from './pages/Bio'
  import Contact from './pages/Contact'
  import FourOFour from './pages/FourOFour'
  //-Styles
  import { colors, fonts, zIndexes, mediaQueries } from './project-styles/projectStyles'
  //-Contexts
  import { ThemeContext } from './contexts/themeContext'
  import { PiecesContextProvider } from './contexts/piecesContext'
// 




const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    font-family: ${fonts.text}, 'Helvetica', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${ props => props.theme.mode === 'dark' ? colors.blue :  colors.white };
  }

  a{
    text-decoration: none;
    color: ${colors.black};
  }
`
const ColorThemeDot = styled.div`
  position: fixed;
  top: 38px;
  left: calc(180px + 50px + 18px + 15px);
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: ${ props => props.theme.mode === 'dark' ? colors.white :  colors.blue };
  border: ${ props => props.theme.mode === 'dark' ? "2px solid" + colors.blue :  "2px solid" + colors.white };
  cursor: pointer;
  z-index: ${zIndexes.menuButtons};

  @media (max-width: ${mediaQueries.tablet}) {
    left: calc(50px + 18px + 15px);
  }
  @media (max-width: ${mediaQueries.mobile}) {
    top: 28px;
    left: calc(30px + 18px + 15px);
  }
`

function App() {

  // Theme Colors
    const { contextTheme, themeColorToggleHandler } = useContext(ThemeContext) 
  //  

  // Menu SideBar Name
    let location = useLocation()
    let [navTitle, setNavTitle] = useState(null)
    useEffect(() => {
      if (location.pathname === "/") {
        setNavTitle("٣")
      } else if(location.pathname === "/selected-works-2020"){
        setNavTitle("٣")
      } else if (location.pathname === "/forever-is-a-current-event") {
        setNavTitle("٢")
      } else if (location.pathname === "/dust-roses-and-cockroaches") {
        setNavTitle("١")
      } else if (location.pathname === "/bio") {
        setNavTitle("Bio")
      } else if (location.pathname === "/contact") {
        setNavTitle("Contact")
      } else {
        setNavTitle("٤٠٤")
      }
    }, [location])
  // 

  return (
    <ThemeProvider theme={contextTheme}>
      <PiecesContextProvider>
      
        <GlobalStyle />

        { location.pathname === "/" ? <Preloader /> : null }

        <Menu navTitleProp={navTitle} />

        <ColorThemeDot onClick={themeColorToggleHandler}/>

        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/bio">
            <Bio />
          </Route>
          <Route path="/dust-roses-and-cockroaches">
            <DustRosesAndCockroaches />
          </Route>
          <Route path="/forever-is-a-current-event">
            <ForeverIsACurrentEvent />
          </Route>
          <Route path="/selected-works-2020">
            <SelectedWorks />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route>
            <FourOFour />
          </Route>
        </Switch>

      </PiecesContextProvider>
    </ThemeProvider>
  )
}
export default App
