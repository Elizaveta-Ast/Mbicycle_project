import React from "react"
import Header from "./components/Header"
import Users from "./components/Users"
import AddUser from "./components/AddUser"

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
        users: [
          {
            id: 1,
            first_name: "Михаил",
            last_name: "Александрович",
            bio: "Энергетик",
            age: 54,
            isHappy: false
          },
          {
            id: 2,
            first_name: "Александр",
            last_name: "Иванов",
            bio: "Техник-программист",
            age: 23,
            isHappy: true
          },
          {
            id: 3,
            first_name: "Анна",
            last_name: "Будько",
            bio: "Преподаватель",
            age: 23,
            isHappy: true
          }
        ]
    }
    this.addUser = this.addUser.bind(this)
    this.deleteUser = this.deleteUser.bind(this)
    this.editUser = this.editUser.bind(this)
  }
  render(){
    return(
      <div>
        <Header title="Список пользователей"/>
        <main>
          <Users onEdit={this.editUser} users={this.state.users} onDelete={this.deleteUser} />
        </main>
          <aside>
            <AddUser onAdd={this.addUser}/>
          </aside>
      </div>
    )
  }

editUser(user){
  let allUsers = this.state.users
  allUsers[user.id - 1] = user

  this.setState({users: []}, () => {
    this.setState({users: [...allUsers]})
  })
}

deleteUser(id) {
  this.setState({
    users: this.state.users.filter((el) => el.id !== id)
  })
}

  addUser(user){
    const id = this.state.users.length + 1
    this.setState({ users: [ ...this.state.users, {id, ...user}]})
  }
}

export default App