import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import { connect } from 'react-redux';
import { addUser, editUser } from "./actions";
import { useNavigate  } from "react-router";

// Функция, которая принимает объекты user, onAdd и onEdit
function AddUser({ user, onAdd, onEdit, onCancelEdit }) { 
  const navigate = useNavigate();
  const [showUsers, setShowUsers] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  // Создание состояний и функций для их обновления
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(1);
  const [job, setJob] = useState("");
  const [bio, setBio] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [quote, setQuote] = useState("");

  

  // Функция, вызываемая при отправке формы
  const handleSubmit = (e) => {
    e.preventDefault();
    const userAdd = {
      firstName: firstName,
      lastName: lastName,
      age: age,
      job: job,
      bio: bio,
      country: country,
      city: city,
      quote: quote,
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
    setAge(1);
    setJob("");
    setBio("");
    setCountry("");
    setCity("");
    setQuote("");
    navigate("/users");

    setShowUsers(true);
  };

  const [editForm, setEditForm] = useState(false);

  const handleEditClick = () => {
    setIsEditing(false);
    setEditForm(false);
  };

  // Стили MUI компонентов
  const useStyles = makeStyles({
    button: {
      background: 'rgb(200, 200, 200)',
      border: 0,
      width: "90%",
      borderRadius: 3,
      boxShadow: 'rgb(160, 160, 160)',
      height: 48,
      padding: '0 30px',
      color: "black",
    },
    label: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "10px",
      textAlign: "center",
      color: "rgb(70, 70, 70)",
    },
    input: {
      width: "90%",
      border: 0,
      color: "black",
      outline: "none",
      height: "80px",
    },
    form:{
      width: "30%",
      border: 1,
      borderRadius: 10,
      background: "rgba(230, 230, 230)",
      boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0.1)',
      padding: '20px',
      marginTop: "30px",
      margin: 'auto',
      color: "black",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
  });

  const classes = useStyles();

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <div className={classes.label}>{user ? 'Редактирование пользователя' : 'Добавление пользователя' }</div>
      <TextField className={classes.input} variant="standard" label="Имя" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
      <TextField className={classes.input} variant="standard" label="Фамилия" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
      <TextField className={classes.input} variant="standard" label="Возраст" value={age} onChange={(e) => setAge(e.target.value)}/>
      <TextField className={classes.input} variant="standard" label="Должность" value={job} onChange={(e) => setJob(e.target.value)}/>
      <TextField className={classes.input} variant="standard" label="БИО" value={bio} onChange={(e) => setBio(e.target.value)} />
      <TextField className={classes.input} variant="standard" label="Старана" value={country} onChange={(e) => setCountry(e.target.value)}/>
      <TextField className={classes.input} variant="standard" label="Город" value={city} onChange={(e) => setCity(e.target.value)}/>
      <TextField className={classes.input} variant="standard" label="Цитата" value={quote} onChange={(e) => setQuote(e.target.value)}/>
      <Button type="submit"  className={classes.button}>{user ? 'Редактировать' : 'Добавить'}</Button>
      {user && (
        <Button onClick={handleEditClick} className={classes.button}>Отменить</Button>
      )}
    </form>
  );
}

// Функция для связи компонента с Redux store
const mapDispatchToProps = (dispatch) => ({
  onAdd: (user) => dispatch(addUser(user)),
  onEdit: (user) => dispatch(editUser(user)),
});

export default connect(null, mapDispatchToProps)(AddUser);