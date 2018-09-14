// @flow

import React from 'react'
import {Redirect} from 'react-router-dom'
import info from '../info'

const ResumeRedirect = () => {
  window.location = info.resumeLink
  return null
}

export default ResumeRedirect