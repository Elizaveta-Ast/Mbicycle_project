import React, { useState } from "react";
import AddUser from "./AddUser";
import { connect } from "react-redux";
import { editUser } from "./actions";

function EditUser({ user, onEdit }) {
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleSaveEdit = () => {
    onEdit(editedUser);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <AddUser
      user={editedUser}
      onEdit={handleSaveEdit} 
      onInputChange={handleInputChange}
    />
  );
}

const mapDispatchToProps = (dispatch) => ({
  onEdit: (user) => dispatch(editUser(user)),
});

export default connect(null, mapDispatchToProps)(EditUser);