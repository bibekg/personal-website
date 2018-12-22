// @flow

import * as React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import styled from 'styled-components'
import Gallery from './Gallery'
import ProjectSpotlight from './ProjectSpotlight'
import info from '../info'
const { projects } = info

const SelectedProjectDiv = styled.div`
  width: 100%;
  margin-top: 20px;
`

const ProjectGalleryDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export class ProjectGallery extends React.Component<PropsType, StateType> {
  state = {
    selectedProject: projects[0],
  }

  renderProject(project) {
    return props => <ProjectSpotlight {...project} {...props} />
  }

  render(): React.Element<*> {
    return (
      <ProjectGalleryDiv>
        <Gallery
          name="project"
          contents={projects.map(p => ({ ...p, href: `/work/${p.slug}` }))}
          selectable
          selectedItem={this.props.match.params.subItem}
        />

        <SelectedProjectDiv>
          <Switch>
            {projects.map(project => (
              <Route
                key={project.slug}
                path={`/work/${project.slug}`}
                render={this.renderProject(project)}
              />
            ))}
          </Switch>
        </SelectedProjectDiv>
      </ProjectGalleryDiv>
    )
  }
}

export default withRouter(ProjectGallery)
