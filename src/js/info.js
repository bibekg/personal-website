// @flow

import mediumIcon from './images/medium.svg'
import facebookIcon from './images/facebook.png'
import githubIcon from './images/github.svg'
import linkedInIcon from './images/linkedin.svg'
import resumeIcon from './images/resume.png'

import bruinMeetLogo from './images/bruinmeet.png'
import unjournalLogo from './images/unjournal.png'
import tcsLogo from './images/tcs.png'
import hyliterLogo from './images/hyliter.png'
import visualizingLAImage from './images/visualizingla.png'

import uberLogo from './images/uber.png'
import stanzaLogo from './images/stanza.png'

import nepalVisitVideoStill from './images/video-stills/nepal-village-visit.png'
import mistTrailVideoStill from './images/video-stills/mist-trail.png'
import mattDavisTrailVideoStill from './images/video-stills/matt-davis-trail.png'
import mayaDeuMalaiVideoStill from './images/video-stills/maya-deu-malai.png'

export default {
  name: { first: "Bibek", last: "Ghimire" },
  tagline: "UCLA CS '19 • Software Developer",
  bio: "Hi, my name is Bibek Ghimire. I’m a third year Computer Science student at UCLA with a passion for software engineering and web development. When I’m not coding, I’m either reading, writing, running, hiking, or playing guitar.",
  links: [
    { name: "Medium", href: "https://medium.com/@bibekg", icon: mediumIcon },
    {
      name: "Facebook",
      href: "https://facebook.com/bibekgg",
      icon: facebookIcon
    },
    { name: "Github", href: "https://github.com/@bibekg", icon: githubIcon },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/bibekg",
      icon: linkedInIcon
    },
    {
      name: "Resume",
      href: "https://drive.google.com/file/d/0B8Xo4dQ-Hu_CbWw2U2dJR2tyWUU/view?usp=sharing",
      icon: resumeIcon
    }
  ],
  projects: [
    {
      name: "Bruin Meet",
      image: bruinMeetLogo,
      href: "https://bruinmeet.com",
      description: "A dating app exclusively for UCLA students."
    },
    {
      name: "Unjournal",
      image: unjournalLogo,
      href: "https://unjournal.surge.sh",
      description: "A place to pour your emotions into words, then watch it disappear into the digital void."
    },
    {
      name: "The Coding School",
      image: tcsLogo,
      href: "https://the-cs.org",
      description: "A non-profit organization teaching coding to students all across the US."
    },
    {
      name: "Visualizing LA",
      image: visualizingLAImage,
      href: "http://mihirmathur.github.io/visualizingla",
      description: "A visualization of transportation data in Los Angeles."
    },
    {
      name: "Hyliter",
      image: hyliterLogo,
      href: "https://chrome.google.com/webstore/detail/hyliter/nhiannhalledfohikpmbclkalcknilcg",
      description: "A Chrome extension that lets you save more useful bookmarks."
    }
  ],
  work: [
    { name: "Uber", image: uberLogo },
    { name: "Stanza", image: stanzaLogo }
  ],
  videos: [
    {
      name: "Nepal Village Tour",
      description: "The rolling hills of Nepal will always have a special place in my heart.",
      image: nepalVisitVideoStill,
      videoId: "7Ge668Ml0eI"
    },
    {
      name: "Hiking the Mist Trail",
      description: "Arguably the best trail in Yosemite.",
      image: mistTrailVideoStill,
      videoId: "6uRwVQzM5wQ"
    },
    {
      name: "Hiking the Matt Davis Trail",
      description: "A peaceful hike through thick forest and ending on the beautiful California shoreline.",
      image: mattDavisTrailVideoStill,
      videoId: "FVzuQT1lN1M"
    }
  ]
};