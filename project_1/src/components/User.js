import React from "react"
import {IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5'
import AddUser from "./AddUser"

class User extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            editForm: false
        }
    }
    user = this.props.user
    render(){
        return(
            <div className="user">
                <IoCloseCircleSharp  onClick={() => this.props.onDelete(this.user.id)} className="delete-icon"></IoCloseCircleSharp>
                <IoHammerSharp onClick={() =>{
                    this.setState({
                    editForm: !this.state.editForm
                })
                }}
                className="edit-icon"></IoHammerSharp>
                <h3>{this.user.firstname} {this.user.lastname} </h3>
                <p>{this.user.bio}</p>
                <p>Возраст: {this.user.age}</p>
                <b>{this.user.isHappy ? 'Счастлив :)' : 'Не очень счастлив :('}</b>
                
                {this.state.editForm && <AddUser user={this.user} onAdd={this.props.onEdit}/>}
            </div>
        )
    }
}

export default User