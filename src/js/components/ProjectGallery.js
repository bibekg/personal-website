// @flow

import * as React from 'react'
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

export default class ProjectGallery extends React.Component<
  PropsType,
  StateType
> {
  state = {
    selectedProject: projects[0]
  }

  handleSelectChange = (itemName: string) => {
    this.setState({
      selectedProject: projects.find(v => (v.name === itemName))
    })
  }

  renderSelectedProject() {
    const { selectedProject } = this.state
    if (selectedProject) {
      return <ProjectSpotlight
        {...selectedProject}
      />
    }
  }

  render(): React.Element<*> {
    return (
      <ProjectGalleryDiv>
        <Gallery
          name="project"
          contents={projects}
          selectable
          selectedItem={this.state.selectedProject}
          onSelectChange={this.handleSelectChange}
        />

        <SelectedProjectDiv>
          {this.state.selectedProject != null ? this.renderSelectedProject() : null}
        </SelectedProjectDiv>
      </ProjectGalleryDiv>
    )
  }
}