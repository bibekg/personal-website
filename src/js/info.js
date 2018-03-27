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

export default {
    name: { first: "Bibek", last: "Ghimire" },
    tagline: "UCLA CS \'19 | Software Developer",
    bio: "Hi, my name is Bibek Ghimire. I’m a third year Computer Science student at UCLA with a passion for software engineering and web development. When I’m not coding, I’m either reading, writing, running, hiking, or playing guitar. For more of my latest content, check out my Medium and YouTube.",
    links: [
        { name: 'Medium', href: 'https://medium.com/@bibekg', icon: mediumIcon },
        { name: 'Facebook', href: 'https://facebook.com/bibekgg', icon: facebookIcon },
        { name: 'Github', href: 'https://github.com/@bibekg', icon: githubIcon },
        { name: 'LinkedIn', href: 'https://linkedin.com/in/bibekg', icon: linkedInIcon },
        { name: 'Resume', href: 'https://drive.google.com/a/g.ucla.edu/file/d/0B8Xo4dQ-Hu_CRFloU3hxYzRZbU0/view?usp=sharing', icon: resumeIcon },
    ],
    projects: [
        { name: 'Bruin Meet', image: bruinMeetLogo, href: 'https://bruinmeet.com' },
        { name: 'Unjournal', image: unjournalLogo, href: 'https://unjournal.surge.sh' },
        { name: 'The Coding School', image: tcsLogo, href: 'https://the-cs.org' },
        { name: 'Visualizing LA', image: visualizingLAImage, href: 'http://mihirmathur.github.io/visualizingla' },
        { name: 'Hyliter', image: hyliterLogo, href: 'https://chrome.google.com/webstore/detail/hyliter/nhiannhalledfohikpmbclkalcknilcg' }
    ],
    work: [
        { name: 'Uber', image: uberLogo },
        { name: 'Stanza', image: stanzaLogo }
    ],
    videos: [
        { name: 'Nepal Village Tour - Manikhel, Gotikhel, Shankhu', image: nepalVisitVideoStill, href: 'https://www.youtube.com/watch?v=7Ge668Ml0eI&t=2s' },
        { name: 'Hiking the Mist Trail', image: mistTrailVideoStill, href: 'https://www.youtube.com/watch?v=6uRwVQzM5wQ&t=4s' }
    ]
}