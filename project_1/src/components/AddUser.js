import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import { connect } from 'react-redux';
import { useNavigate  } from "react-router";
import { addUser, editUser } from "./actions";

function AddUser({ user, onAdd, onEdit }) {
  const navigate = useNavigate();
  const [showUsers, setShowUsers] = useState(true);

  useEffect(() => {
    if (user) {
      setFormData({ ...user });
    }
  }, [user]);

  const [formData, setFormData] = useState({
    photo: "",
    firstName: "",
    lastName: "",
    age: 1,
    job: "",
    bio: "",
    country: "",
    city: "",
    quote: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userAdd = { ...formData };

    if (user && user.id) {
      userAdd.id = user.id;
      onEdit(userAdd);
    } else {
      onAdd(userAdd);
    }

    setFormData({
      photo: "",
      firstName: "",
      lastName: "",
      age: 1,
      job: "",
      bio: "",
      country: "",
      city: "",
      quote: "",
    });

    navigate("/users");
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
      <TextField className={classes.input} variant="standard" label="Имя" name="firstName" value={formData.firstName} onChange={handleChange}/>
      <TextField className={classes.input} variant="standard" label="Фамилия" name="lastName" value={formData.lastName} onChange={handleChange}/>
      <TextField className={classes.input} variant="standard" label="Возраст" name="age" value={formData.age} onChange={handleChange}/>
      <TextField className={classes.input} variant="standard" label="Должность" name="job" value={formData.job} onChange={handleChange}/>
      <TextField className={classes.input} variant="standard" label="БИО" name="bio" value={formData.bio} onChange={handleChange} />
      <TextField className={classes.input} variant="standard" label="Страна" name="country" value={formData.country} onChange={handleChange}/>
      <TextField className={classes.input} variant="standard" label="Город" name="city" value={formData.city} onChange={handleChange}/>
      <TextField className={classes.input} variant="standard" label="Цитата" name="quote" value={formData.quote} onChange={handleChange}/>
      <TextField className={classes.input} variant="standard" label="URL фотографии" name="photo" value={formData.photo} onChange={handleChange}/>
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