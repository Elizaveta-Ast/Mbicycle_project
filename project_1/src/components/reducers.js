const initialState = {  
  users: [
    // Ваш исходный массив пользователей
    {
      id: 1,
      firstName: "Михаил",
      lastName: "Александрович",
      bio: "Энергетик",
      age: 54,
      isHappy: false
    },
    {
      id: 2,
      firstName: "Александр",
      lastName: "Иванов",
      bio: "Техник-программист",
      age: 23,
      isHappy: true
    },
    {
      id: 3,
      firstName: "Анна",
      lastName: "Будько",
      bio: "Преподаватель",
      age: 23,
      isHappy: true
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