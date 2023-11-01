import React, { useState } from "react"
import { IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5'
import AddUser from "./AddUser"

export const User = ({ user, onEdit, onDelete }) => {

    const [ editForm, setEditForm ] = useState(false);
    
    return(
        <div className="user">
            <IoCloseCircleSharp  onClick={() => onDelete(user.id)} className="delete-icon" />
            <IoHammerSharp onClick={() => setEditForm(!editForm)} className="edit-icon" />
            <h3>{user.first_name} {user.last_name} </h3>
            <p>{user.bio}</p>
            <p>Возраст: {user.age}</p>
            <b>{user.isHappy ? 'Счастлив :)' : 'Не очень счастлив :('}</b>
            
            {editForm && <AddUser user={user} onAdd={onEdit}/>}
        </div>
    )
}