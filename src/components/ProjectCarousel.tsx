import * as React from "react";
import { css } from "@emotion/react";
import Box from "src/components/Box";
import * as Text from "src/components/NewText";
import bmHero from "src/assets/images/bruinmeet/hero.png";
import rssHero from "src/assets/images/react-schedule-selector/hero.png";
import unjournalHero from "src/assets/images/unjournal/hero.png";
import ravHero from "src/assets/images/react-audio-viz/hero.gif";
import { rgba } from "polished";
import { colors } from "src/styles";
import { Link } from "./Link";

interface Props {}

const ProjectCarousel = ({}: Props) => {
  const projects = [
    {
      name: "react-audio-viz",
      description:
        "A delightfully simple yet impressively extendable audio visualization framework for React",
      image: ravHero,
      link: "http://react-audio-viz.surge.sh/",
    },
    {
      name: "react-schedule-selector",
      description:
        "An open-source React component for specifying schedule availability with 500+ weekly downloads",
      image: rssHero,
      link: "https://react-schedule-selector.surge.sh",
    },
    {
      name: "Unjournal",
      description:
        "A web app that uses impermanence to help you write openly and freely (in other words, it tosses your words into the digital void when you're done).",
      image: unjournalHero,
      link: "https://unjournal.co",
    },
    {
      name: "BruinMeet",
      description: "A UCLA-exclusive dating app made by UCLA students for UCLA students",
      image: bmHero,
      link: "https://medium.com/bruinmeet/i-architected-bruinmeets-front-end-these-are-the-technologies-i-used-and-why-ec60a8b5b238",
    },
  ];

  return (
    <Box
      display="grid"
      gridTemplateColumns={{ _: "1fr", md: "repeat(2, 1fr)", xl: "repeat(3, 1fr)" }}
      gridGap={3}
      my={3}
    >
      {projects.map((item) => {
        return (
          <Link
            key={item.name}
            to={item.link}
            noUnderline
            position="relative"
            width="100%"
            pb="100%"
          >
            <Box
              position="absolute"
              top={0}
              left={0}
              bottom={0}
              right={0}
              boxShadow="card"
              bg="white"
              borderRadius={2}
            >
              <Box
                width="100%"
                height="100%"
                borderRadius="inherit"
                css={css({
                  background: `url(${item.image}) 50% 50% no-repeat`,
                  backgroundSize: "cover",
                })}
              >
                <Box
                  bg={rgba(colors.blue, 0.7)}
                  width="100%"
                  height="100%"
                  p={3}
                  css={css`
                    opacity: 0;
                    transition: 0.3s ease opacity;
                    &:hover {
                      opacity: 1;
                    }
                  `}
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  textAlign="center"
                  borderRadius="inherit"
                >
                  <Text.CardHeader fontSize={16} fontWeight={500} color="white">
                    {item.name}
                  </Text.CardHeader>
                  <Text.Body3 color="white">{item.description}</Text.Body3>
                </Box>
              </Box>
            </Box>
          </Link>
        );
      })}
    </Box>
  );
};

export default ProjectCarousel;
