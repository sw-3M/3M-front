import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Main } from './Components'
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css);
  *{
    margin: 0px;
    font-family: 'NanumSquare';
  }
`

const App = () => {
  return (
    <BrowserRouter>
    <GlobalStyle></GlobalStyle>
      <Switch>
        <Route exact path="/" component={Main}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App

