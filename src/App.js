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

  @font-face {
    font-family: 'PeakTRIAL-Regular';
    src: url('./fonts/PeakTRIAL-Regular.eot');
    src: url('./fonts/PeakTRIAL-Regular.eot?#iefix') format('embedded-opentype'),
        url('./fonts/PeakTRIAL-Regular.woff2') format('woff2'),
        url('./fonts/PeakTRIAL-Regular.woff') format('woff'),
        url('./fonts/PeakTRIAL-Regular.ttf') format('truetype'),
        url('./fonts/PeakTRIAL-Regular.svg#PeakTRIAL-Regular') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'PeakTRIAL-Bold';
    src: url('./fonts/PeakTRIAL-Bold.eot');
    src: url('./fonts/PeakTRIAL-Bold.eot?#iefix') format('embedded-opentype'),
        url('./fonts/PeakTRIAL-Bold.woff2') format('woff2'),
        url('./fonts/PeakTRIAL-Bold.woff') format('woff'),
        url('./fonts/PeakTRIAL-Bold.ttf') format('truetype'),
        url('./fonts/PeakTRIAL-Bold.svg#PeakTRIAL-Bold') format('svg');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'RightGrotesk-CompactBlack';
    src: url('./fonts/RightGrotesk-CompactBlack.eot');
    src: url('./fonts/RightGrotesk-CompactBlack.eot?#iefix') format('embedded-opentype'),
        url('./fonts/RightGrotesk-CompactBlack.woff2') format('woff2'),
        url('./fonts/RightGrotesk-CompactBlack.woff') format('woff'),
        url('./fonts/RightGrotesk-CompactBlack.ttf') format('truetype'),
        url('./fonts/RightGrotesk-CompactBlack.svg#RightGrotesk-CompactBlack') format('svg');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }

  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    font-family: 'PeakTRIAL-Regular', 'Helvetica', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
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
