import React, { useState } from "react";
import { IoCloseCircleSharp, IoHammerSharp } from "react-icons/io5";
import AddUser from "./AddUser";
import { connect } from "react-redux";
import { deleteUser, editUser } from "./actions";

function User({ user, onDelete, onEdit, onCancelEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState(false);

  const handleEditClick = () => {
    onEdit(user);
    setIsEditing(true);
    setEditForm(!editForm);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    onCancelEdit();
  };

  return (
    <div>
      {isEditing ? (
        editForm && <AddUser user={user} onAdd={onEdit} onCancelEdit={handleCancelEdit} />
      ) : (
        <>
          <div className="user-container">
            <div className="user-image">
              <img src={user.photo} alt={`${user.firstName} ${user.lastName}`} />
            </div>
            <div className="user-details">
              <h3>{user.firstName} {user.lastName}, {user.age} лет</h3>
              <p style={{color: "grey", fontStyle: "italic", marginBottom: "5px" }}>{user.job}</p>
              <p><b><i>БИО:</i></b> {user.bio}</p>
              <p style={{marginTop: "5px" }}><i><b>Цитата:</b> {user.quote}</i></p>
              <p style={{marginTop: "5px" }}><i>{user.country}, {user.city}</i></p>

              <div className="user-actions">
                <IoHammerSharp onClick={handleEditClick} className="edit-icon" />
                <IoCloseCircleSharp onClick={() => onDelete(user.id)} className="delete-icon" />
              </div>
            </div>
          </div>
        </>
      )
    }
  </div>
);}

const mapDispatchToProps = (dispatch) => ({
  onDelete: (id) => dispatch(deleteUser(id)),
  onEdit: (user) => dispatch(editUser(user)),
});

export default connect(null, mapDispatchToProps)(User);