import React from "react";
import "./ProjectList.css";
import { useNavigate } from "react-router-dom";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"
import { Link } from "react-router-dom"
import Assignment from '@mui/icons-material/Assignment';

export default function ProjectListItem(props) {

  const navigate = useNavigate();
  const currentUser = localStorage.getItem("user_id");
  const editAuth = props.editAuth; 
  const { id, title, description, features, tech_stack, project_url, image_url } = props;

  const handleEdit = (event) => {
    const project_id = localStorage.setItem("project_id", id);
    navigate("/editproject");
  }
  return (
    <div>
      <VerticalTimelineElement
        date ="2023"
        className="project-icon"
        iconStyle={{ background: 'black', color: "white" }}
        icon={<Assignment />}>
          <h1>{title}</h1>
          <h2>{description}</h2>
          <p>{features}</p>
            <h3> Tech Stack: </h3>
            <p>{tech_stack}</p>
          <div>
            <Link to={project_url} >
              <img className="image" src={image_url} />
            </Link>
            {editAuth && (
              <button className="edit-button" onClick={handleEdit}>Edit</button>
            )}
          </div>
        </VerticalTimelineElement>     
      <div>
      </div>
    </div>
  )
};