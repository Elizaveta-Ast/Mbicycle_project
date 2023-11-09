import React, {useState} from "react"
import Header from "./components/Header"
import Users from "./components/Users"
import AddUser from "./components/AddUser"

function App(){
  const [users, setUsers] = useState([
    {
      id: 1,
      firstname: "Михаил",
      lastname: "Александрович",
      bio: "Энергетик",
      age: 54,
      isHappy: false
    },
    {
      id: 2,
      firstname: "Александр",
      lastname: "Иванов",
      bio: "Техник-программист",
      age: 23,
      isHappy: true
    },
    {
      id: 3,
      firstname: "Анна",
      lastname: "Будько",
      bio: "Преподаватель",
      age: 23,
      isHappy: true
    }
  ])

  const editUser = (user) => {
    setUsers(prevUsers => prevUsers.map(prevUser => prevUser.id === user.id ? user : prevUser))
  }
  
  const deleteUser = (id) => {
    setUsers(prevUsers => prevUsers.filter(prevUser => prevUser.id !== id))
  }

  const addUser = (user) => {
    const id = users.length + 1
    setUsers(prevUsers => [...prevUsers, { id, ...user }])
  }

  return (
    <div>
      <Header title="Список пользователей">
      </Header>
      <main>
        <Users onEdit={editUser} users={users} onDelete={deleteUser} />
      </main>
      <aside>
        <AddUser onAdd={addUser} />
      </aside>
    </div>
  ) 
}

export default App