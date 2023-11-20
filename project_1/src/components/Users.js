import React from 'react'
import User from './User'
import { connect } from 'react-redux';
import { deleteUser, editUser } from './actions';

function Users(props) {

  return (
    <div>
      {props.users.length > 0 ? (
        props.users.map((el) => (
          <div key={el.id}>
            <User
              onEdit={props.onEdit}
              onDelete={props.onDelete}
              user={el}
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