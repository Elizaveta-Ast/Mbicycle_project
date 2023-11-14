import React, {useState} from "react"
import {IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5'
import AddUser from "./AddUser"
import { connect } from 'react-redux';
import { deleteUser, editUser } from "./actions";

function User({ user, onDelete, onEdit }) {
    const [editForm, setEditForm] = useState(false);
  
    const handleEditClick = () => {
      onEdit(user);
      setEditForm(!editForm);
    };
  
    return (
        <div className="user">
          <IoCloseCircleSharp onClick={() => onDelete(user.id)} className="delete-icon" />
          <IoHammerSharp onClick={handleEditClick} className="edit-icon" />
          <h3>{user.firstName} {user.lastName}</h3>
          <p>{user.bio}</p>
          <p>Возраст: {user.age}</p>
          <b>{user.isHappy ? 'Счастлив :)' : 'Не очень счастлив :('}</b>
          
          {editForm && <AddUser user={user} onAdd={onEdit} />}
        </div>
      );
  }
  
const mapDispatchToProps = (dispatch) => ({
  onDelete: (id) => dispatch(deleteUser(id)),
  onEdit: (user) => dispatch(editUser(user)),
});

export default connect(null, mapDispatchToProps)(User);