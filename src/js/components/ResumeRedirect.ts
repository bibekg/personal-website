// @flow

import info from "../info";

const ResumeRedirect = () => {
  // @ts-ignore
  window.location = info.resumeLink;
  return null;
};

export default ResumeRedirect;
