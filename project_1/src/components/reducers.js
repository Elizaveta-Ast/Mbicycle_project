const initialState = {  
  users: [
    // Ваш исходный массив пользователей
    {
      id: 1,
      firstName: "Михаил",
      lastName: "Потапенко",
      job: "Frontend developer",
      bio: "Имеею высшее образование по специальности - инженер-программист. Учился на факультете «Информационные технологии» в БГТУ. Интересуют велоспортом.",
      country: "Беларусь",
      city: "Гомель",
      quote: "«Цели никогда не должны быть простыми. Они должны быть неудобными, чтобы заставить вас работать», — Майкл Фелпс",
      age: 32
    },
    {
      id: 2,
      firstName: "Александр",
      lastName: "Гринич",
      job: "Java developer",
      bio: "Студент. Обучаюсь на факультете «Информационные технологии и робототехники» в БНТУ. Интересуюсь профессиональной фотосъемкой.",
      country: "Беларусь",
      city: "Минск",
      quote: "«Возраст — это всего лишь ограничение, которое вы кладёте себе в голову», — Джеки Джойнер-Керси",
      age: 19
    },
    {
      id: 3,
      firstName: "Анна",
      lastName: "Будько",
      job: "Flutter developer",
      bio: "Имеею среднее образование по специальности - техник-программист. Закончила колледж ГГЭК.",
      country: "Беларусь",
      city: "Гомель",
      quote: "«Причина создаёт ограничения. Но вы можете сделать многое, если верите в это всем своим сердцем», — Арнольд Шварценеггер",
      age: 22
    }
  ],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case 'EDIT_USER':
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
      };
    case 'DELETE_USER':
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    default:
      return state;
  }
};

export default userReducer;