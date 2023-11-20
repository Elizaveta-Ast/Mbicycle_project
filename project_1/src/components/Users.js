import React from 'react'
import User from './User'
import { connect } from 'react-redux';
import { deleteUser, editUser } from './actions';
import { useState } from 'react';

function Users(props, onCancelEdit) {
  const [editingUserId, setEditingUserId] = useState(null);

  const startEditing = (userId) => {
    setEditingUserId(userId);
  };

  const cancelEditing = () => {
    setEditingUserId(null);
  };

  return (
    <div>
      {props.users.length > 0 ? (
        props.users.map((el) => (
          <div key={el.id}>
            <User
              onEdit={props.onEdit}
              onDelete={props.onDelete}
              user={el}
              startEditing={startEditing}
              cancelEditing={cancelEditing}
              isEditing={editingUserId === el.id}
            />
          </div>
        ))
      ) : (
        <div className="user">
          <h3>Пользователей нет</h3>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = (dispatch) => ({
  onDelete: (id) => dispatch(deleteUser(id)),
  onEdit: (user) => dispatch(editUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);