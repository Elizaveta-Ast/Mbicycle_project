import React from "react"
import User from "./User"

class Users extends React.Component{
    render(){
        if(this.props.users.length>0){
            return(
                <div>
                    {this.props.users.map((el) => (<div>
                        <User onEdit={this.props.onEdit} onDelete={this.props.onDelete} key={el.id} user={el}/>
                        </div>))}
                </div>
            )
        }
        else{
            return(
                <div className="user">
                    <h3>Пользователей нет</h3>
                </div>
            )
        }
    }
}

export default Users