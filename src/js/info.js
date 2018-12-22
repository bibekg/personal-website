// @flow

import mediumIcon from './images/icons/medium.svg'
import facebookIcon from './images/icons/facebook.png'
import instagramIcon from './images/icons/instagram.png'
import githubIcon from './images/icons/github.svg'
import linkedInIcon from './images/icons/linkedin.svg'
import resumeIcon from './images/icons/resume.png'
import homeIcon from './images/icons/home.svg'
import npmIcon from './images/icons/npm.png'
import ReactScheduleSelectorDemo from './components/ReactScheduleSelectorDemo'

export default {
  name: { first: 'Bibek', last: 'Ghimire' },
  bio: [
    'Hi, my name is Bibek Ghimire. I’m a fourth-year Computer Science student at UCLA with a passion for software development and an extensive background in full-stack web development.',
    'Outside of my professional life as a developer, I enjoy reading, writing, meditating, running, hiking, and playing guitar.',
  ],
  resumeLink:
    'https://drive.google.com/file/d/0B8Xo4dQ-Hu_CbWw2U2dJR2tyWUU/view?usp=sharing',
  links: [
    {
      name: 'Medium',
      href: 'https://medium.com/@bibekg',
      icon: mediumIcon,
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/bibek_g',
      icon: instagramIcon,
    },
    { name: 'Github', href: 'https://github.com/bibekg', icon: githubIcon },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/bibekg',
      icon: linkedInIcon,
    },
    {
      name: 'Resume',
      href: '/resume',
      icon: resumeIcon,
    },
  ],
  projectsBlurb:
    'Much of my work involves working with web development technologies, with a particular emphasis on front-end frameworks such as React and Redux. I have also worked extensively with Node/MongoDB in the back-end while working on BruinMeet.',
  projects: [
    {
      name: 'The Bruin Bucket List',
      slug: 'the-bruin-bucket-list',
      icon: {
        src: require('./images/the-bruin-bucket-list/icon.png'),
        width: 1,
        height: 1,
      },
      tagline: 'An interactive bucket list website for UCLA students.',
      description: [
        'After a finals week that ended earlier than usual, I had a few days to kill before heading home. One of my good friends, George, had made an excellent "UCLA bucket list" post on Medium a while back so I checked it out.',
        'Then I realized that a bucket list would be much more usable and fun if you could check things off as you go and track your progress. So I made this site to let you do exactly that!',
        {
          screenshots: [
            {
              src: require('./images/the-bruin-bucket-list/screenshot.png'),
              width: 2250,
              height: 1152,
            },
          ],
        },
      ],
      links: [
        {
          name: 'Github',
          href: 'https://github.com/bibekg/thebruinbucketlist',
          icon: githubIcon,
        },
        {
          name: 'Website',
          href: 'http://thebruinbucketlist.surge.sh',
          icon: homeIcon,
        },
      ],
    },
    {
      name: 'React Schedule Selector',
      slug: 'react-sechedule-selector',
      icon: {
        src: require('./images/react-schedule-selector/icon.png'),
        width: 1,
        height: 1,
      },
      tagline: 'React component npm module.',
      description: [
        'While working on an auto-date scheduling feature for BruinMeet, we created a component that lets users input their availability for the next week. Pretty soon, other teams in DevX - a UCLA club focused on building software projects - were asking for the component to use in their own projects.',
        'And thus react-schedule-selector was born. Give it a try below.',
      ],
      links: [
        {
          name: 'NPM',
          href: 'https://www.npmjs.com/package/react-schedule-selector',
          icon: npmIcon,
        },
        {
          name: 'Github',
          href: 'https://github.com/bibekg/react-schedule-selector',
          icon: githubIcon,
        },
        {
          name: 'Demo',
          href: 'http://react-schedule-selector.surge.sh',
          icon: homeIcon,
        },
      ],
      CustomRender: ReactScheduleSelectorDemo,
    },
    {
      name: 'BruinMeet',
      slug: 'bruinmeet',
      icon: {
        src: require('./images/bruinmeet/icon.png'),
        width: 1,
        height: 1,
      },
      tagline: 'UCLA-exclusive dating app.',
      description: [
        "BruinMeet is a dating app built for UCLA students by UCLA students. Bruin Meet's core belief is that the best way to get to know someone is to meet them IRL. That's why it prioritizes getting its users off the app and on a date as quickly as possible.",
        {
          screenshots: [
            {
              src: require('./images/bruinmeet/features-banner.png'),
              width: 2250,
              height: 1152,
            },
          ],
        },
        'I joined the team in late 2017 as a front-end developer and led the effort to port the existing Handlebars templated front-end into a React app.',
        "I later rearchitected the application's backend to use a graph-based model to represent the product's userbase and match relationships.",
      ],
      links: [
        { name: 'Main', href: 'https://www.bruinmeet.com', icon: homeIcon },
      ],
    },
    {
      name: 'Unjournal',
      slug: 'unjournal',
      icon: {
        src: require('./images/unjournal/icon.png'),
        width: 1,
        height: 1,
      },
      href: 'https://unjournal.surge.sh',
      tagline: 'Set a timer, write, delete.',
      description: [
        "Unjournal is a place to pour your thoughts/emotions into words, then let it disappear into the digital void. It's an fresh and relaxing approach to writing.",
        {
          screenshots: [
            {
              src: require('./images/unjournal/homepage.png'),
              width: 1000,
              height: 639,
            },
            {
              src: require('./images/unjournal/delete-demo.gif'),
              width: 600,
              height: 362,
            },
          ],
        },
      ],
      links: [
        { name: 'Home', href: 'https://unjournal.surge.sh', icon: homeIcon },
        {
          name: 'Github',
          href: 'https://github.com/bibekg/unjournal',
          icon: githubIcon,
        },
      ],
    },
    {
      name: 'The Coding School',
      slug: 'the-coding-school',
      icon: { src: require('./images/tcs/icon.png'), width: 1, height: 1 },
      href: 'https://the-cs.org',
      tagline: 'Non-profit organization providing coding education.',
      description: [
        'The Coding School is a non-profit organization dedicated to empowering the next generation of leaders and problem solvers through code.',
        {
          screenshots: [
            {
              src: require('./images/tcs/homepage.png'),
              width: 1000,
              height: 639,
            },
          ],
        },
        "I designed, developed, and deployed the organization's website while learning React.",
      ],
      links: [
        { name: 'Main', href: 'https://the-cs.org', icon: homeIcon },
        {
          name: 'Github',
          href: 'https://github.com/the-coding-school/the-cs',
          icon: githubIcon,
        },
      ],
    },
    {
      name: 'Visualizing LA',
      slug: 'visualizing-la',
      icon: {
        src: require('./images/visualizingla/icon.png'),
        width: 1,
        height: 1,
      },
      href: 'http://mihirmathur.github.io/visualizingla',
      tagline: 'A visualization of transportation data in Los Angeles.',
      description: [
        "Visualizing LA is a UCLA Creative Labs project that tells the story of LA's transporation -- from driving, to parking, to flying out of the city.",
        {
          screenshots: [
            {
              src: require('./images/visualizingla/my-viz.png'),
              width: 1000,
              height: 546,
            },
          ],
        },
        'I used d3.js to analyze 39 months of vehicle and air traffic at Los Angeles International Airport, and found a close correlation between the number of flights with the number of cars arriving and departing from the airport.',
      ],
      links: [
        {
          name: 'Main',
          href: 'https://mihirmathur.github.io/visualizingla/',
          icon: homeIcon,
        },
        {
          name: 'Github',
          href: 'https://github.com/Mihirmathur/visualizingla',
          icon: githubIcon,
        },
      ],
    },
    {
      name: 'Hyliter',
      slug: 'hyliter',
      icon: { src: require('./images/hyliter/icon.png'), width: 1, height: 1 },
      href:
        'https://chrome.google.com/webstore/detail/hyliter/nhiannhalledfohikpmbclkalcknilcg',
      tagline: 'A Chrome extension that lets you save more useful bookmarks.',
      description: [
        'Hyliter is a Google Chrome extension that lets you save snippets of text you find as contextual bookmarks.',
        {
          screenshots: [
            {
              src: require('./images/hyliter/preview.jpg'),
              width: 640,
              height: 400,
            },
          ],
        },
      ],
      links: [
        {
          name: 'Main',
          href:
            'https://chrome.google.com/webstore/detail/hyliter/nhiannhalledfohikpmbclkalcknilcg',
          icon: homeIcon,
        },
        {
          name: 'Github',
          href: 'https://github.com/bibekg/Hyliter',
          icon: githubIcon,
        },
      ],
    },
  ],
  videos: [
    {
      name: 'Nepal Village Tour',
      slug: 'nepal-village-tour',
      tagline:
        'The rolling hills of Nepal will always have a special place in my heart.',
      icon: {
        src: require('./images/video-stills/nepal-village-visit.png'),
        height: 1,
        width: 1,
      },
      videoId: '7Ge668Ml0eI',
    },
    {
      name: 'Ram Sailee - Bipul Chettri (cover)',
      slug: 'ram-sailee-cover',
      icon: {
        src: require('./images/video-stills/ram-sailee-cover.png'),
        height: 1,
        width: 1,
      },
      videoId: 'BQ4zjx6bxAw',
    },
    {
      name: 'Hiking the Mist Trail',
      slug: 'hiking-mist-trail',
      tagline: 'Arguably the best trail in Yosemite.',
      icon: {
        src: require('./images/video-stills/mist-trail.png'),
        height: 1,
        width: 1,
      },
      videoId: '6uRwVQzM5wQ',
    },
    {
      name: 'Hiking the Matt Davis Trail',
      slug: 'hiking-matt-davis-trail',
      tagline: 'A peaceful hike ending on the beautiful California shoreline.',
      icon: {
        src: require('./images/video-stills/matt-davis-trail.png'),
        height: 1,
        width: 1,
      },
      videoId: 'FVzuQT1lN1M',
    },
  ],
  writing: [
    {
      title: 'react-schedule-selector',
      image: {
        src:
          'https://cdn-images-1.medium.com/max/1600/1*6DtngHjyZP5RBeTI7sYI7A.png',
        height: 1,
        width: 1,
      },
      link: 'https://medium.com/bruinmeet/react-schedule-selector-6cd5bf1f4968',
      description:
        'A versatile, mobile-friendly React UI component for selecting schedule availability.',
    },
    {
      title: 'Deploy a React/Node App Using TravisCI and AWS',
      image: {
        src:
          'https://cdn-images-1.medium.com/max/1600/1*v6B8sC0v2QDnQOxaaN_zdg.png',
        height: 1,
        width: 1,
      },
      link:
        'https://medium.com/ucladevx/deploy-a-react-node-app-using-travisci-and-aws-b41e3b09110b',
      description:
        'Let’s say you have a web app project built with React on the front-end and Node on the back-end API. You have the front- and back-end split up into separate GitHub...',
    },
    {
      title: 'The Most Expressive Way to Journal is to Unjournal',
      image: {
        src:
          'https://cdn-images-1.medium.com/max/1200/1*eFHvN-ix54aAORy5gKObYg.png',
        height: 1,
        width: 1,
      },
      link:
        'https://medium.com/@bibekg/the-most-expressive-way-to-journal-is-to-unjournal-283bd8e9b72c',
      description:
        'For the past five years, I’ve been journaling in various ways. I started off scrawling down a 10-minute stream of consciousness each night into a physical notebook...',
    },
    {
      title: 'Becoming BruinMeet Tech Lead',
      image: {
        src:
          'https://cdn-images-1.medium.com/max/2000/1*koG5mtl7rS1z5HOVuIx1lQ.png',
        height: 1,
        width: 1,
      },
      link:
        'https://medium.com/bruinmeet/becoming-bruinmeet-tech-lead-cc4567ed2688',
      description:
        'From September 2017 to April 2018 (~7 months), I worked as front-end developer for BruinMeet. With months of self-learning React and a summer internship behind me, I was...',
    },
    {
      title: 'I hiked every weekend this quarter. Here’s why.',
      image: {
        src:
          'https://cdn-images-1.medium.com/max/1600/1*LGgWWF3fjDz2xBI0wMwPEg@2x.jpeg',
        height: 1,
        width: 1,
      },
      link:
        'https://medium.com/@bibekg/i-hiked-every-weekend-this-quarter-heres-why-600528c53bff',
      description:
        'For several of the past years, my parents and I talked a lot about taking a family trip to Hawaii. But every time we started thinking about the details, we’d come up with...',
    },
    {
      title:
        'I architected BruinMeet’s front-end. These are the technologies I used and why.',
      image: {
        src:
          'https://cdn-images-1.medium.com/max/2000/1*UfsLW0te2nCRv8JorGENQg.png',
        height: 1,
        width: 1,
      },
      link:
        'https://medium.com/bruinmeet/i-architected-bruinmeets-front-end-these-are-the-technologies-i-used-and-why-ec60a8b5b238',
      description:
        'For the last five months, I’ve been working as a web developer for Bruin Meet — a dating app exclusively for UCLA students. When I came on as a front-end developer, the OG...',
    },
  ],
}
