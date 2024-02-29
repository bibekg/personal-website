// @flow

import styled from "@emotion/styled";
import { css } from "@emotion/react";
import * as React from "react";
import Link from "src/components/Link";
import Box from "src/components/Box";
import * as Text from "src/components/NewText";
import { mq } from "src/styles/breakpoints";
import { colors, sizes } from "src/styles";
import Logo from "src/components/Logo";
import ProfilePic, { picturePositioningCalc } from "src/components/ProfilePic";
import ProjectCarousel from "src/components/ProjectCarousel";
import OldText from "src/components/Text";

import githubIcon from "src/assets/images/icons/github.svg";
import linkedInIcon from "src/assets/images/icons/linkedin.svg";
import mediumIcon from "src/assets/images/icons/medium.svg";

const Section = styled.section`
  margin-bottom: 50px;
`;

const HomePage = () => (
  <Box
    css={css`
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: ${colors.offWhite};
      min-height: 100vh;
      overflow: hidden;
      position: relative;
    `}
  >
    {/* Logo */}
    <Box
      position="absolute"
      top="20px"
      left="20px"
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
    >
      <Logo />
    </Box>

    {/* Picture */}
    <Box
      css={css`
        position: absolute;
        top: calc(-1 * ${picturePositioningCalc});
        right: calc(-1 * ${picturePositioningCalc});
        opacity: 0.5;
        display: none;

        ${mq.md} {
          display: block;
        }
      `}
    >
      <ProfilePic />
    </Box>

    {/* Navbar */}
    <Box
      mx={-2}
      display="flex"
      position="relative"
      justifyContent="flex-start"
      px={{ _: "0", md: "20px" }}
      mt={`calc(${sizes.logo} / 2 + 20px)`}
      transform="translateY(-50%)"
      mb={5}
      maxWidth="650px"
      width="95%"
      css={css`
        left: max(20px + calc((${sizes.logo} + 20px) - ((100vw - min(95vw, 650px)) / 2)), 0px);
      `}
    >
      {[
        {
          name: "Blog",
          link: "https://blog.bibekg.com",
        },
      ].map((item, index) => {
        return [
          index !== 0 ? "•" : null,
          <Link key="link" color={colors.grey} to={item.link} fontSize={18} fontWeight={700}>
            {item.name}
          </Link>,
        ].filter(Boolean);
      })}
    </Box>

    <Box
      position="relative"
      maxWidth="650px"
      width="95%"
      mb={5}
      px={{ _: "0", md: "20px" }}
      mt={{
        _: `calc(${sizes.logo} + 20px);`,
        md: `calc(0.5 * calc(${sizes.profilePicWidth} - ${picturePositioningCalc}) - 100px);`,
      }}
    >
      <Section id="heythere">
        <OldText as="h1">👋🏽 Hey there!</OldText>
      </Section>
      <Section id="intro">
        <OldText as="p">
          My name is Bibek Ghimire. I’m a software engineer based in the San Francisco Bay Area. I’m
          currently building internal docs platforms and tooling at
          <Link to="https://stripe.com">Stripe</Link>. I graduated from UCLA in 2019 with a B.S. in
          Computer Science and have worked at <Link to="https://clever.com">Clever</Link>,{" "}
          <Link to="https://uber.com">Uber</Link>, and <Link to="https://stanza.co">Stanza</Link> in
          the past.
        </OldText>
      </Section>

      <Section id="side-projects">
        <OldText as="p">
          I've also worked on a couple of fun side projects through the years.
        </OldText>
        <ProjectCarousel />
      </Section>

      <Section id="when-not-coding">
        <OldText as="p">
          When I'm not coding, I love to <Link to="https://blog.bibekg.com">write</Link>, read, run,
          play guitar, and spend time outdoors.
        </OldText>
      </Section>

      <Section id="contact">
        <OldText as="p">
          If you're interested in connecting, you can find me on the rest of the internet below.
        </OldText>
        <Box display="flex" mx={-2} justifyContent="center" alignItems="center" mt={5}>
          {[
            {
              name: "GitHub",
              icon: githubIcon,
              link: "https://github.com/bibekg",
            },
            {
              name: "LinkedIn",
              icon: linkedInIcon,
              link: "https://linkedin.com/in/bibekg",
            },
          ].map((item, index) => {
            return [
              index !== 0 ? <Text.Plain color={colors.grey}>•</Text.Plain> : null,
              <Link key="link" mx={2} color={colors.grey} to={item.link}>
                {item.name}
              </Link>,
            ].filter(Boolean);
          })}
        </Box>
      </Section>
    </Box>
  </Box>
);

export default HomePage;
