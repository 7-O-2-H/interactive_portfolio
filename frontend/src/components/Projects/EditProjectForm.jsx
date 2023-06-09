import React, { useState, Fragment } from "react";
import { editProject, deleteProject } from "../../helpers/projectsHelpers";
import { useNavigate } from "react-router-dom";
import './EditProject.css';

export default function EditProjectForm(props) {

  const currentUser = localStorage.getItem("user_id");
  const {id, title} = props;
  const navigate = useNavigate();

  const handleDelete = (event) => {
    event.preventDefault();

    deleteProject(Number(id)).then((data) => {
      console.log(data);
    });

    if (currentUser === "5") {
      navigate('/joshportfolio');
    } else if (currentUser === "7") {
      navigate('/shilpaportfolio');
    };

  };
 
  const [editFormData, setEditFormData] = useState({
       
    title: '',
    description: '',
    feature: '',
    techstack: '',
    imageurl: '',
    projecturl: ''

  });

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData }
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault()

    const editedProject = {
        id: Number(id),
        title: title,
        description: editFormData.description,
        features: editFormData.feature,
        tech_stack: editFormData.techstack,
        image_url: editFormData.imageurl,
        project_url: editFormData.projecturl,
        user_id: Number(currentUser),
    }

    editProject(editedProject).then((data) => {
      console.log(data);
    });

    window.location.reload(false);

  };

  return (
    <div>
      <button className="delete-btn" onClick={handleDelete}>
        Delete Project?
      </button>
      <form className="edit-form" onSubmit={handleEditFormSubmit}>
        <h1 className="form-title">Edit Project</h1>
        <input
          type="text"
          name="description"
          required="required"
          placeholder="Description"
          onChange={handleEditFormChange}
        />
        <input
            type="text"
            name="feature"
            required="required"
            placeholder="Feature"
            onChange={handleEditFormChange}
        />
        <input
            type="text"
            name="techstack"
            required="required"
            placeholder="Tech_stack"
            onChange={handleEditFormChange}
        />
        <input
            type="text"
            name="imageurl"
            required="required"
            placeholder="Image_url"
            onChange={handleEditFormChange}
        />
        <input
            type="text"
            name="projecturl"
            required="required"
            placeholder="Project_url"
            onChange={handleEditFormChange}
        />
        <button className="edit-submit-btn" type="submit">Submit Changes</button>
      </form>
    </div>
  )
};
