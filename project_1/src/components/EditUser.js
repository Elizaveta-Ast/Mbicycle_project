import React from "react";
import AddUser from "./AddUser";
import { connect } from "react-redux";
import { editUser } from "./actions";
import { useState } from "react";

function EditUser({ user, onDelete, onEdit, onCancelEdit }) {
    const [isEditing, setIsEditing] = useState(false);
  

    const handleCancelEdit = () => {
      setIsEditing(false);
      onCancelEdit();
    };
  
    return (
      <div>
        isEditing ? (
          editForm && <AddUser user={user} onAdd={onEdit} onCancelEdit={handleCancelEdit} />
        ) 
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
    onEdit: (user) => dispatch(editUser(user)),
});

export default connect(null, mapDispatchToProps)(EditUser);