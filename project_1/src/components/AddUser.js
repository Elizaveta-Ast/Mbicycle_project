import React, { useState } from "react";

//функция которая принимает объекты user, onAdd
function AddUser({ user, onAdd }) {
    //создание состояния с именем ... и функцией set... для его обновления
  const [firstName, setFirstName] = useState(""); 
  const [lastName, setLastName] = useState("");
  const [bio, setBio] = useState("");
  const [age, setAge] = useState(1);
  const [isHappy, setIsHappy] = useState(false);

/* Объявляется функция handleSubmit, 
которая будет вызываться при отправке формы. 
Она принимает объект события e в качестве аргумента.*/
  const handleSubmit = (e) => {
    e.preventDefault(); //предотвращение перегрузки страницы

    //объект, который хранит значения из состояний ...
    const userAdd = {
      first_name: firstName,
      last_name: lastName,
      bio: bio,
      age: age,
      isHappy: isHappy,
    };

    if (user) userAdd.id = user.id;

    onAdd(userAdd);

    setFirstName("");
    setLastName("");
    setBio("");
    setAge(1);
    setIsHappy(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Имя" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
      <input placeholder="Фамилия" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
      <textarea placeholder="БИО" value={bio} onChange={(e) => setBio(e.target.value)} />
      <input placeholder="Возраст" value={age} onChange={(e) => setAge(e.target.value)}/>
      <label htmlFor="isHappy">Счастлив?</label>
      <input type="checkbox" id="isHappy" checked={isHappy} onChange={(e) => setIsHappy(e.target.checked)}/>
      <button type="submit">Добавить</button>
    </form>
  );
}

export default AddUser;