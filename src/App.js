import React, { useContext, useState, useEffect } from 'react'
import { Switch, Route, useLocation } from "react-router-dom"
import {createGlobalStyle, ThemeProvider } from 'styled-components'
import Menu from './components/Menu'
import SelectedWorks from './pages/SelectedWorks'
import ForeverIsACurrentEvent from './pages/ForeverIsACurrentEvent'
import DustRosesAndCockroaches from './pages/DustRosesAndCockroaches'
import Desoriente from './pages/Desoriente'
import Bio from './pages/Bio'
import Contact from './pages/Contact'
import UnderConstruction from './pages/UnderConstruction'
import { colors, fonts } from './project-styles/projectStyles'
import { ThemeContext } from './contexts/themeContext'
import { PiecesContextProvider } from './contexts/piecesContext'



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
`

function App() {

  const {contextTheme} = useContext(ThemeContext)  

  let location = useLocation()

  let [navTitle, setNavTitle] = useState("٣")

  useEffect(() => {
    if(location.pathname === "/selected-works-2020"){
      setNavTitle("٤")
    } else if (location.pathname === "/forever-is-a-current-event") {
      setNavTitle("٣")
    } else if (location.pathname === "/dust-roses-and-cockroaches") {
      setNavTitle("٢")
    } else if (location.pathname === "/desoriente") {
      setNavTitle("١")
    } else if (location.pathname === "/bio") {
      setNavTitle("Bio")
    } else if (location.pathname === "/contact") {
      setNavTitle("Contact")
    } else {
      setNavTitle(null)
    }
  }, [location])

  return (
    <ThemeProvider theme={contextTheme}>
      <PiecesContextProvider>
      
        <GlobalStyle />

        {/* <Menu navTitleProp={navTitle} /> */}

        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/bio">
            <Bio />
          </Route>
          <Route path="/desoriente">
            <Desoriente />
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
          <Route path="/">
            <UnderConstruction />
          </Route>
        </Switch>

      </PiecesContextProvider>
    </ThemeProvider>
  )
}

export default App
