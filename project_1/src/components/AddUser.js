import React, { useState } from "react";
import Checkbox from '@mui/material/Checkbox';
import { FormLabel } from "@mui/material";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import FormControl from '@mui/material/FormControl';

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

  const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(rgba(107, 163, 1, 0.566), rgba(128, 197, 0, 0.566), rgba(128, 197, 0, 0.566))',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(107, 163, 1, 0.566)',
      height: 48,
      padding: '0 30px',
    },
  });

  const inputStyles = makeStyles({
    root: {
      width: '100%',
      border: 0,
      color: 'black',
      outline: 'none',
      height: '80px',
      color: 'rgba(128, 197, 0, 0.566)',
    },
  });

  const labelStyles = makeStyles({
    root: {
      margin: '15px',
      width: '20ch',
    },
  });

  const classesButton = useStyles();
  const classesInput = inputStyles();
  const classesLabel = labelStyles();

  return (
    <form onSubmit={handleSubmit}>
      <TextField className={classesInput.root} label="Имя" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
      <TextField className={classesInput.root} label="Фамилия" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
      <TextField className={classesInput.root} label="БИО" value={bio} onChange={(e) => setBio(e.target.value)} />
      <TextField className={classesInput.root} label="Возраст" value={age} onChange={(e) => setAge(e.target.value)}/>
      <FormLabel className={classesLabel.root} htmlFor="isHappy">Счастлив?</FormLabel>
      <Checkbox type="checkbox" id="isHappy" checked={isHappy} onChange={(e) => setIsHappy(e.target.checked)}/>
      <Button type="submit"  className={classesButton.root}>Добавить</Button>
    </form>
  );
}

export default AddUser;