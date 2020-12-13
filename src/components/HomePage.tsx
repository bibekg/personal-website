// @flow

import styled from "@emotion/styled";
import * as React from "react";
import Link from "src/components/Link";
import { mq } from "src/styles/breakpoints";
import items from "../info";
import { colors, sizes } from "../styles";
import Logo from "./Logo";
import ProfilePic, { picturePositioningCalc } from "./ProfilePic";
import ProjectCarousel from "./ProjectCarousel";
import OldText from "./Text";

const HomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.offWhite};
  min-height: 100vh;
  overflow: hidden;
  position: relative;
`;

const InnerContainer = styled.div`
  margin-top: calc(${sizes.logo} + 20px);
  padding: 0 20px;

  ${mq.md} {
    margin-top: calc(0.5 * calc(${sizes.profilePicWidth} - ${picturePositioningCalc}));
    padding: 0;
  }

  max-width: 650px;
  width: 95%;
  position: relative;
  margin-bottom: 80px;
`;

const ProfilePicContainer = styled.div`
  position: absolute;
  top: calc(-1 * ${picturePositioningCalc});
  right: calc(-1 * ${picturePositioningCalc});
  opacity: 0.5;
  display: none;

  ${mq.md} {
    display: block;
  }
`;

const Section = styled.section`
  margin-bottom: 50px;
`;

const HomePage = () => (
  <HomePageWrapper>
    <Logo />

    <ProfilePicContainer>
      <ProfilePic />
    </ProfilePicContainer>

    <InnerContainer>
      <Section id="heythere">
        <OldText as="h1">Hey there! 👋🏽</OldText>
      </Section>
      <Section id="intro">
        <OldText as="p">
          My name is Bibek Ghimire. I’m a software engineer based in the San Francisco Bay Area. I’m
          currently working on point-of-sale payments software at{" "}
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
          When I'm not coding, I love to {items.blog("write")}, {items.readingList("read")},{" "}
          {items.run("run")}, {items.guitar("play guitar")}, and{" "}
          {items.outside("spend time outdoors")}.
        </OldText>
      </Section>

      <Section id="contact">
        <OldText as="p">
          If you're interested in working together, you can find me on the rest of the internet at{" "}
          {items.github("GitHub")}, {items.linkedIn("LinkedIn")}, and {items.medium("Medium")}, or
          hit me up at {items.email()}.
        </OldText>
      </Section>
    </InnerContainer>
  </HomePageWrapper>
);

export default HomePage;
