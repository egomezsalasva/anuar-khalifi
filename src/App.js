import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
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
  // 

  return (
    <ThemeProvider theme={theme}>
      <Router>

          <GlobalStyle />

          <Switch>
            <Route path="/bio">
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
