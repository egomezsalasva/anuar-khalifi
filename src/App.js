import React, { useContext } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {createGlobalStyle, ThemeProvider } from 'styled-components'
import ForeverIsACurrentEvent from './pages/ForeverIsACurrentEvent'
import DustRosesAndCockroaches from './pages/DustRosesAndCockroaches'
import Desoriente from './pages/Desoriente'
import Bio from './pages/Bio'
import Contact from './pages/Contact'
import UnderConstruction from './pages/UnderConstruction'
import { colors } from './project-styles/projectStyles'
import { ThemeContext } from './contexts/themeContext'



const GlobalStyle = createGlobalStyle`
 

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
    background: ${ props => props.theme.mode === 'dark' ? colors.blue :  colors.white };
  }
`

function App() {

  const {contextTheme} = useContext(ThemeContext)

  return (
    <ThemeProvider theme={contextTheme}>
      <Router>

        <GlobalStyle />

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
          <Route path="/">
            <UnderConstruction />
          </Route>
        </Switch>
      
        </Router>  
    </ThemeProvider>
  )
}

export default App
