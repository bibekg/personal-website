import * as React from "react";
import styled from "styled-components";

import LinkedText from "./components/LinkedText";
// @TODO -- Clean up icons interface so I can do just one import  here
import cleverIcon from "./images/clever.png";
import uberIcon from "./images/uber.png";
import stanzaIcon from "./images/stanza.png";
import bmIcon from "./images/bruinmeet/icon.png";
import unjournalIcon from "./images/unjournal/icon.png";
import scheduleSelectorIcon from "./images/react-schedule-selector/icon.png";
import githubIcon from "./images/icons/github.svg";
import linkedInIcon from "./images/icons/linkedin.svg";
import mediumIcon from "./images/icons/medium.svg";

interface ItemMeta {
  defaultTitle?: string;
  icon?: JSX.Element;
  link?: string;
}

const ICON_SIZE = "1em";
const EmojiIcon = (props: { children: any }) => (
  <span style={{ fontSize: ICON_SIZE }}>{props.children}</span>
);
const Icon = styled.img`
  height: ${ICON_SIZE};
`;

const itemMetas: { [s: string]: ItemMeta } = {
  clever: {
    defaultTitle: "Clever",
    icon: <Icon src={cleverIcon} />,
    link: "https://clever.com"
  },
  uber: {
    defaultTitle: "Uber",
    icon: <Icon src={uberIcon} />,
    link: "https://uber.com"
  },
  stanza: {
    defaultTitle: "Stanza",
    icon: <Icon src={stanzaIcon} />,
    link: "https://stanza.co"
  },
  bruinmeet: {
    defaultTitle: "BruinMeet",
    icon: <Icon src={bmIcon} />,
    link:
      "https://medium.com/bruinmeet/i-architected-bruinmeets-front-end-these-are-the-technologies-i-used-and-why-ec60a8b5b238"
  },
  unjournal: {
    defaultTitle: "Unjournal",
    icon: <Icon src={unjournalIcon} />,
    link: "https://unjournal.co"
  },
  scheduleSelector: {
    defaultTitle: "react-schedule-selector",
    icon: <Icon src={scheduleSelectorIcon} />,
    link: "https://www.npmjs.com/package/react-schedule-selector"
  },
  blog: {
    defaultTitle: "Blog",
    icon: <EmojiIcon>📝</EmojiIcon>,
    link: "https://blog.bibekg.com"
  },
  readingList: {
    icon: <EmojiIcon>📚</EmojiIcon>,
    link:
      "https://www.notion.so/bibek/47fa22a75a4b44308cb4f8685a40399f?v=a881c87ad1244224a4149ccad939501a"
  },
  run: {
    icon: <EmojiIcon>👟</EmojiIcon>
  },
  guitar: {
    icon: <EmojiIcon>🎸</EmojiIcon>
  },
  outside: {
    icon: <EmojiIcon>🏕</EmojiIcon>
  },
  github: {
    icon: <Icon src={githubIcon} />,
    link: "https://github.com/bibekg"
  },
  linkedIn: {
    icon: <Icon src={linkedInIcon} />,
    link: "https://linkedin.com/in/bibekg"
  },
  medium: {
    icon: <Icon src={mediumIcon} />,
    link: "https://medium.com/@bibekg"
  },
  email: {
    defaultTitle: "me@bibekg.com",
    icon: <EmojiIcon>✉️</EmojiIcon>,
    link: "mailto:me@bibekg.com"
  }
};

const items = Object.keys(itemMetas).reduce((acc: any, ldKey: keyof typeof itemMetas) => {
  const { icon, link, defaultTitle } = itemMetas[ldKey];
  acc[ldKey] = (customTitle?: string) => (
    <LinkedText icon={icon} href={link}>
      {customTitle || defaultTitle}
    </LinkedText>
  );
  return acc;
}, {});

export default items;
