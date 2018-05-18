// @flow

import mediumIcon from './images/icons/medium.svg'
import facebookIcon from './images/icons/facebook.png'
import githubIcon from './images/icons/github.svg'
import linkedInIcon from './images/icons/linkedin.svg'
import resumeIcon from './images/icons/resume.png'
import homeIcon from './images/icons/home.svg'

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
    { name: "Github", href: "https://github.com/bibekg", icon: githubIcon },
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
  projectsBlurb: "Much of my work involves working with web development technologies, with a particular emphasis on front-end frameworks such as React and Redux. I have also worked extensively with Node/MongoDB in the back-end while working on BruinMeet.",
  projects: [
    {
      name: "Bruin Meet",
      icon: { src: require('./images/bruinmeet/icon.png'), width: 2560, height: 1162 },
      tagline: "UCLA-exclusive dating app.",
      description: [
        "BruinMeet is a dating app built for UCLA students by UCLA students. Bruin Meet's core belief is that the best way to get to know someone is to meet them IRL. That's why it prioritizes getting its users off the app and on a date as quickly as possible.",
        "I joined the team in late 2017 as a front-end developer and led the effort to port the existing Handlebars templated front-end into a React app.",
        "I later rearchitected the application's backend to use a graph-based model to represent the product's userbase and match relationships."
      ],
      links: [
        { name: "Main", href: "https://bruinmeet.com", icon: homeIcon }
      ],
      screenshots: [
        { src: require('./images/bruinmeet/features-banner.png'), width: 2250, height: 1152 }
      ]
    },
    {
      name: "Unjournal",
      icon: { src: require('./images/unjournal/icon.png'), width: 1, height: 1 },
      href: "https://unjournal.surge.sh",
      tagline: "Set a timer, write, delete.",
      description: [
        "Unjournal is a place to pour your thoughts/emotions into words, then let it disappear into the digital void. It's an fresh and relaxing approach to writing."
      ],
      links: [
        { name: 'Home', href: "https://unjournal.surge.sh", icon: homeIcon },
        { name: 'Github', href: "https://github.com/bibekg/unjournal", icon: githubIcon }
      ],
      screenshots: [
        { src: require('./images/unjournal/homepage.png'), width: 1000, height: 639 },
        { src: require('./images/unjournal/delete-demo.gif'), width: 600, height: 362 }
      ]
    },
    {
      name: "The Coding School",
      icon: { src: require('./images/tcs/icon.png'), width: 1, height: 1 },
      href: "https://the-cs.org",
      tagline: "Non-profit organization providing coding education.",
      description: [
        "The Coding School is a non-profit organization dedicated to empowering the next generation of leaders and problem solvers through code.",
        "I designed, developed, and deployed the organization's website while learning React."
      ],
      links: [
        { name: 'Main', href: 'https://the-cs.org', icon: homeIcon },
        { name: 'Github', href: 'https://github.com/the-coding-school/the-cs', icon: githubIcon }
      ],
      screenshots: [
        { src: require('./images/tcs/homepage.png'), width: 1000, height: 639 }
      ]
    },
    {
      name: "Visualizing LA",
      icon: { src: require('./images/visualizingla/icon.png'), width: 1, height: 1 },
      href: "http://mihirmathur.github.io/visualizingla",
      tagline: "A visualization of transportation data in Los Angeles.",
      description: [
        "Visualizing LA is a UCLA Creative Labs project that tells the story of LA's transporation -- from driving, to parking, to flying out of the city.",
        "I used d3.js to analyz 39 months of vehicle and air traffic at Los Angeles International Airport, and found a close correlation between the number of flights with the number of cars arriving and departing from the airport."
      ],
      links: [
        { name: 'Main', href: 'https://mihirmathur.github.io/visualizingla/', icon: homeIcon },
        { name: 'Github', href: 'https://github.com/Mihirmathur/visualizingla', icon: githubIcon }
      ],
      screenshots: [
        { src: require('./images/visualizingla/my-viz.png'), width: 1000, height: 546 }
      ]
    },
    {
      name: "Hyliter",
      icon: { src: require('./images/hyliter/icon.png'), width: 1, height: 1 },
      href: "https://chrome.google.com/webstore/detail/hyliter/nhiannhalledfohikpmbclkalcknilcg",
      tagline: "A Chrome extension that lets you save more useful bookmarks.",
      description: [
        "Hyliter is a Google Chrome extension that lets you save snippets of text you find as contextual bookmarks.",
      ],
      links: [
        { name: 'Main', href: 'https://chrome.google.com/webstore/detail/hyliter/nhiannhalledfohikpmbclkalcknilcg', icon: homeIcon },
        { name: 'Github', href: 'https://github.com/bibekg/Hyliter', icon: githubIcon }
      ],
      screenshots: [
        { src: require('./images/hyliter/preview.jpg'), width: 640, height: 400 }
      ]
    }
  ],
  videos: [
    {
      name: "Nepal Village Tour",
      tagline: "The rolling hills of Nepal will always have a special place in my heart.",
      icon: { src: require('./images/video-stills/nepal-village-visit.png'), height: 1, width: 1 },
      videoId: "7Ge668Ml0eI"
    },
    {
      name: "Hiking the Mist Trail",
      tagline: "Arguably the best trail in Yosemite.",
      icon: { src: require('./images/video-stills/mist-trail.png'), height: 1, width: 1 },
      videoId: "6uRwVQzM5wQ"
    },
    {
      name: "Hiking the Matt Davis Trail",
      tagline: "A peaceful hike ending on the beautiful California shoreline.",
      icon: { src: require('./images/video-stills/matt-davis-trail.png'), height: 1, width: 1 },
      videoId: "FVzuQT1lN1M"
    }
  ]
};