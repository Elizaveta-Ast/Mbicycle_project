import React from 'react'
import User from './User'

function Users(props) {
  if (props.users.length > 0) {
    return (
      <div>
        {props.users.map((el) => (
          <div key={el.id}>
            <User onEdit={props.onEdit} onDelete={props.onDelete} user={el} />
          </div>
        ))}
      </div>
    )
  } else {
    return (
      <div className="user">
        <h3>Пользователей нет</h3>
      </div>
    )
  }
}

export default Users