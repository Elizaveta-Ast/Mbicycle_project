import React, { useState } from "react";
import Checkbox from '@mui/material/Checkbox';
import { FormLabel } from "@mui/material";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import { connect } from 'react-redux';
import { addUser, editUser } from "./actions";

// Функция, которая принимает объекты user, onAdd и onEdit
function AddUser({ user, onAdd, onEdit }) {
  // Создание состояний и функций для их обновления
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [bio, setBio] = useState("");
  const [age, setAge] = useState(1);
  const [isHappy, setIsHappy] = useState(false);

  // Функция, вызываемая при отправке формы
  const handleSubmit = (e) => {
    e.preventDefault();
    const userAdd = {
      firstName: firstName,
      lastName: lastName,
      bio: bio,
      age: age,
      isHappy: isHappy,
    };

    if (user && user.id) {
      userAdd.id = user.id;
      onEdit(userAdd); // Вызываем onEdit для редактирования существующего пользователя
    } else {
      onAdd(userAdd); // Вызываем onAdd для добавления нового пользователя
    }

    // Очистка полей после добавления/редактирования пользователя
    setFirstName("");
    setLastName("");
    setBio("");
    setAge(1);
    setIsHappy(false);
  };

  // Стили MUI компонентов
  const useStyles = makeStyles({
    button: {
      background: 'linear-gradient(rgba(139, 139, 108, 0.697), rgba(139, 139, 108, 0.697), rgba(164, 164, 135, 0.697))',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(139, 139, 108, 0.697)',
      height: 48,
      padding: '0 30px',
      color: "black",
    },
    label: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '30px',
      textAlign: "center",
      color:"rgb(70, 70, 70)",
    },
    input: {
      width: '100%',
      border: 0,
      color: 'black',
      outline: 'none',
      height: '80px',
    },
    labelCheck: {
      margin: '15px',
      width: '20ch',
    },
    form:{
      border: 1,
      borderRadius: 10,
      boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0.1)',
      padding: '20px',
      margin: '10px',
      color: "black",
    },
  });

  const classes = useStyles();

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <div className={classes.label}>{user ? '' : 'Добавление пользователя'}</div>
      <TextField className={classes.input} label="Имя" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
      <TextField className={classes.input} label="Фамилия" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
      <TextField className={classes.input} label="БИО" value={bio} onChange={(e) => setBio(e.target.value)} />
      <TextField className={classes.input} label="Возраст" value={age} onChange={(e) => setAge(e.target.value)}/>
      <FormLabel className={classes.labelCheck} htmlFor="isHappy">Счастлив?</FormLabel>
      <Checkbox type="checkbox" id="isHappy" checked={isHappy} onChange={(e) => setIsHappy(e.target.checked)}/>
      <Button type="submit"  className={classes.button}>{user ? 'Редактировать' : 'Добавить'}</Button>
    </form>
  );
}

// Функция для связи компонента с Redux store
const mapDispatchToProps = (dispatch) => ({
  onAdd: (user) => dispatch(addUser(user)),
  onEdit: (user) => dispatch(editUser(user)),
});

export default connect(null, mapDispatchToProps)(AddUser);