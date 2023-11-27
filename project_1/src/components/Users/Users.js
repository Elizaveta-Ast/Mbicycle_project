import React from 'react'
import User from './User'
import { connect } from 'react-redux';


function Users(props) {

  return (
    <div>
      {props.users.length > 0 ? (
        props.users.map((el) => (
          <div key={el.id}>
            <User
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

export default connect(mapStateToProps)(Users);