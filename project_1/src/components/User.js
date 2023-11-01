import React, {useState} from "react"
import {IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5'
import AddUser from "./AddUser"

function User({ user, onDelete, onEdit }) {
    const [editForm, setEditForm] = useState(false);
  
    const handleEditClick = () => {
      setEditForm(!editForm);
    };
  
    return (
        <div className="user">
          <IoCloseCircleSharp onClick={() => onDelete(user.id)} className="delete-icon" />
          <IoHammerSharp onClick={handleEditClick} className="edit-icon" />
          <h3>{user.firstname} {user.lastname}</h3>
          <p>{user.bio}</p>
          <p>Возраст: {user.age}</p>
          <b>{user.isHappy ? 'Счастлив :)' : 'Не очень счастлив :('}</b>
          
          {editForm && <AddUser user={user} onAdd={onEdit} />}
        </div>
      );
  }
  
  export default User;