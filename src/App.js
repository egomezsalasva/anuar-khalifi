import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {createGlobalStyle, ThemeProvider} from 'styled-components'
import ForeverIsACurrentEvent from './pages/ForeverIsACurrentEvent'
import DustRosesAndCockroaches from './pages/DustRosesAndCockroaches'
import Desoriente from './pages/Desoriente'
import Bio from './pages/Bio'
import Contact from './pages/Contact'
import UnderConstruction from './pages/UnderConstruction'

const anuarWhite = "#FCFBFA"
const anuarBlue = "#001F80"
// const anuarBlack = "#030303"


const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    font-family: 'PeakTRIAL', 'Helvetica', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${ props => props.theme.mode === 'dark' ? anuarBlue :  anuarWhite };
  }
`

function App() {

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

  return (
    <ThemeProvider theme={theme}>
      <Router>

          <GlobalStyle />

          <Switch>
            <Route path="/bio">
              <Contact themeColorToggleHandlerProp={themeColorToggleHandler} />
            </Route>
            <Route path="/bio">
              <Bio  themeColorToggleHandlerProp={themeColorToggleHandler} />
            </Route>
            <Route path="/desoriente">
              <Desoriente themeColorToggleHandlerProp={themeColorToggleHandler} />
            </Route>
            <Route path="/dust-roses-and-cockroaches">
              <DustRosesAndCockroaches themeColorToggleHandlerProp={themeColorToggleHandler} />
            </Route>
            <Route path="/forever-is-a-current-event">
              <ForeverIsACurrentEvent themeColorToggleHandlerProp={themeColorToggleHandler} />
            </Route>
            <Route path="/">
              <UnderConstruction />
            </Route>
          </Switch>
          

  
      </Router>
    </ThemeProvider>
  )
}

export default App
