const initialState = {  
  users: [
    // Ваш исходный массив пользователей
    {
      id: 1,
      photo: "https://img.freepik.com/free-photo/smiling-young-man-with-crossed-arms-outdoors_1140-255.jpg?w=826&t=st=1700568876~exp=1700569476~hmac=ae14f05af631e40b256368dc03b8e3ae2b6d79862ad31411370a6527982886da",
      firstName: "Михаил",
      lastName: "Потапенко",
      job: ".NET developer",
      bio: "Имеею высшее образование по специальности - инженер-программист. Учился на факультете «Информационные технологии» в БГТУ. Интересуют велоспортом.",
      country: "Беларусь",
      city: "Гомель",
      quote: "«Цели никогда не должны быть простыми. Они должны быть неудобными, чтобы заставить вас работать», — Майкл Фелпс",
      age: 32
    },
    {
      id: 2,
      photo: "https://img.freepik.com/free-photo/man-with-sunglasses-talking-on-the-phone-outdoors_23-2148682621.jpg?w=826&t=st=1700569014~exp=1700569614~hmac=63ffc6fb7e3719281da0f1628beafdb8881144b5ba500f8b29c0b8cac17fd264",
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
      photo: "https://img.freepik.com/free-photo/front-view-of-serious-woman_23-2148369453.jpg?w=826&t=st=1700569047~exp=1700569647~hmac=517300d669fcbc7c603c3886a1e3bb8e6c50deb9e5690cb412c6045d4a2266cb",
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