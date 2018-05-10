// @flow

import * as React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import styled, { injectGlobal } from 'styled-components'
import { colors, fonts } from './styles'
import HomePage from './components/HomePage'

injectGlobal([`
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

    ::-webkit-scrollbar {
        width: 7px;
        height: 7px;
    }
    ::-webkit-scrollbar-track {
        background-color: transparent;
    }
    ::-webkit-scrollbar-thumb {
        background-color: ${colors.blue};
        border-radius: 3px;
    }
`])

const AppWrapper = styled.div`
`

type PropsType = {}

class App extends React.Component<PropsType> {
    render() {
        return (
            <AppWrapper>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={HomePage} />
                    </Switch>
                </BrowserRouter>
            </AppWrapper>
        )
    }
}

export default App