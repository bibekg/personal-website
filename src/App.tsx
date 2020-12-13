// @flow

import { css, Global, ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { colors, fonts } from "src/styles";
import AliceFarewell from "src/components/gift/AliceFarewell";
import Monil22BDay from "src/components/gift/Monil22BDay";
import HomePage from "src/components/HomePage";
import ResumeRedirect from "src/components/ResumeRedirect";
import theme from "src/styles/theme";

const AppWrapper = styled.div``;

type PropsType = {};

class App extends React.Component<PropsType> {
  render() {
    return (
      <AppWrapper>
        <Global
          styles={css`
            @import url("https://fonts.googleapis.com/css?family=Lora:400,700|Open+Sans:400,500,700");

            html,
            body {
              font-family: ${fonts["sans-serif"]}, sans-serif;
              margin: 0;
              width: 100%;
              height: 100%;
              background-color: ${colors.white};
            }

            *,
            *:before,
            *:after {
              margin: 0;
              box-sizing: border-box;
            }
          `}
        />
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Switch>
              {/* <Route path="/sabins-xmas-gift" component={SabinChristmasGift} /> */}
              <Route path="/gift/monil/22nd-bday" component={Monil22BDay} />
              <Route path="/gift/alice/memories" component={AliceFarewell} />
              <Route path="/resume" component={ResumeRedirect} />
              <Route path="/" component={HomePage} />
            </Switch>
          </BrowserRouter>
        </ThemeProvider>
      </AppWrapper>
    );
  }
}

export default App;
