import React from "react";
import ProjectListItem from './ProjectListItem';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";

export default function ProjectList(props) {

  const editAuth = props.editAuth;

  const projectArray = props.projectData.map(project => (
    <ProjectListItem
      key={project.id}
      editAuth={editAuth}
      id={project.id}
      title={project.title}
      description={project.description}
      features={project.features}
      tech_stack={project.tech_stack}
      project_url={project.project_url}
      image_url={project.image_url}
    />
  ));

  return (
    <VerticalTimeline lineColor="black" >
      {projectArray}
    </VerticalTimeline>
  );
}