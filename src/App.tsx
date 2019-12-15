// @flow

import * as React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'
import { colors, fonts } from './styles'
import HomePage from './components/HomePage'
import ResumeRedirect from './components/ResumeRedirect'
import AliceFarewell from './components/gift/AliceFarewell'
// import SabinChristmasGift from './components/SabinChristmasGift'
import Monil22BDay from './components/gift/Monil22BDay'

// @ts-ignore
const GlobalStyle = createGlobalStyle([
  `
    @import url('https://fonts.googleapis.com/css?family=Lora:400,700|Open+Sans:400,700');
    
    html, body {
        font-family: ${fonts['sans-serif']}, sans-serif;
        margin: 0;
        width: 100%;
        height: 100%;
        background-color: ${colors.white};
    }

    *, *:before, *:after {
        box-sizing: border-box;
    }

    @-webkit-keyframes snowflakes-fall{0%{top:-10%}100%{top:100%}}@-webkit-keyframes snowflakes-shake{0%,100%{-webkit-transform:translateX(0);transform:translateX(0)}50%{-webkit-transform:translateX(80px);transform:translateX(80px)}}@keyframes snowflakes-fall{0%{top:-10%}100%{top:100%}}@keyframes snowflakes-shake{0%,100%{transform:translateX(0)}50%{transform:translateX(80px)}}.snowflake{position:fixed;top:-10%;z-index:9999;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;-webkit-animation-name:snowflakes-fall,snowflakes-shake;-webkit-animation-duration:10s,3s;-webkit-animation-timing-function:linear,ease-in-out;-webkit-animation-iteration-count:infinite,infinite;-webkit-animation-play-state:running,running;animation-name:snowflakes-fall,snowflakes-shake;animation-duration:10s,3s;animation-timing-function:linear,ease-in-out;animation-iteration-count:infinite,infinite;animation-play-state:running,running}.snowflake:nth-of-type(0){left:1%;-webkit-animation-delay:0s,0s;animation-delay:0s,0s}.snowflake:nth-of-type(1){left:10%;-webkit-animation-delay:1s,1s;animation-delay:1s,1s}.snowflake:nth-of-type(2){left:20%;-webkit-animation-delay:6s,.5s;animation-delay:6s,.5s}.snowflake:nth-of-type(3){left:30%;-webkit-animation-delay:4s,2s;animation-delay:4s,2s}.snowflake:nth-of-type(4){left:40%;-webkit-animation-delay:2s,2s;animation-delay:2s,2s}.snowflake:nth-of-type(5){left:50%;-webkit-animation-delay:8s,3s;animation-delay:8s,3s}.snowflake:nth-of-type(6){left:60%;-webkit-animation-delay:6s,2s;animation-delay:6s,2s}.snowflake:nth-of-type(7){left:70%;-webkit-animation-delay:2.5s,1s;animation-delay:2.5s,1s}.snowflake:nth-of-type(8){left:80%;-webkit-animation-delay:1s,0s;animation-delay:1s,0s}.snowflake:nth-of-type(9){left:90%;-webkit-animation-delay:3s,1.5s;animation-delay:3s,1.5s}.snowflake:nth-of-type(10){left:25%;-webkit-animation-delay:2s,0s;animation-delay:2s,0s}.snowflake:nth-of-type(11){left:65%;-webkit-animation-delay:4s,2.5s;animation-delay:4s,2.5s}

    a {
      text-decoration: none;
    }
`,
])

const AppWrapper = styled.div``

type PropsType = {}

class App extends React.Component<PropsType> {
  render() {
    return (
      <AppWrapper>
        <GlobalStyle />
        <BrowserRouter>
          <Switch>
            {/* <Route path="/sabins-xmas-gift" component={SabinChristmasGift} /> */}
            <Route path="/gift/monil/22nd-bday" component={Monil22BDay} />
            <Route path="/gift/alice/farewell" component={AliceFarewell} />
            <Route path="/resume" component={ResumeRedirect} />
            <Route path="/" component={HomePage} />
          </Switch>
        </BrowserRouter>
      </AppWrapper>
    )
  }
}

export default App
