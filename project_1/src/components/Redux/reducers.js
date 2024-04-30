const initialState = {  
  users: [
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
    },
    {
      id: 4,
      photo: "https://img.freepik.com/free-photo/front-view-beautiful-woman_23-2148574859.jpg?w=826&t=st=1701179543~exp=1701180143~hmac=bfcab8d089de4f2bd4e48a9ca31478dd8f16760838160dc2c04f6b5878f2b4c0",
      firstName: "Виктория",
      lastName: "Маршкова",
      job: ".NET developer",
      bio: "Имею высшее образование в области дизайна. Увлекаюсь созданием уникальных пользовательских интерфейсов.",
      country: "Беларусь",
      city: "Минск",
      quote: "«Дизайн — это не просто, как что-то выглядит. Дизайн — это, как что-то работает», — Стив Джобс",
      age: 30
    },
    {
      id: 5,
      photo: "https://img.freepik.com/free-photo/side-view-of-smiley-man-having-a-video-call-outdoors_23-2148682667.jpg?w=826&t=st=1701179829~exp=1701180429~hmac=68d71adeaf8b16e10fa59100dee6c0c590073f5125cc6737f2ea0e3b7d469bdd",
      firstName: "Иван",
      lastName: "Петров",
      job: ".NET developer",
      bio: "Закончил университет по специальности - программист. Увлекаюсь разработкой веб-приложений.",
      country: "Беларусь",
      city: "Гомель",
      quote: "«Логика может привести вас от пункта А к пункту Б, а воображение способно перенести весь мир», — Альберт Эйнштейн",
      age: 25
    },
    {
      id: 6,
      photo: "https://img.freepik.com/free-photo/portrait-of-modern-man_23-2147960990.jpg?w=826&t=st=1701179570~exp=1701180170~hmac=520c31a4aa24f61ce2d32f2de09147c3eaca534ead285d19db67efd441f1d960",
      firstName: "Геннадий",
      lastName: "Потапенко",
      job: "Flutter developer",
      bio: "Ранее закончил колледж не по своей настроящей профессии, а позже поступал на заочку на специальность инженера-программиста. Уже несколько лет работаю по этой профессии.",
      country: "Беларусь",
      city: "Гомель",
      quote: "«Любите то, что делаете. Если вы этого не любите, то ваша работа никогда не станет великой», — Стив Джобс",
      age: 33
    },
    {
      id: 7,
      photo: "https://img.freepik.com/free-photo/woman-wearing-denim-jacket-and-posing-near-beige-wall_23-2148193974.jpg?w=826&t=st=1701179644~exp=1701180244~hmac=936254a0cb3f085be587a5891f657ef7d0e62b6fe9e26ad43e300082356344d6",
      firstName: "Елена",
      lastName: "Асадчик",
      job: "Flutter developer",
      bio: "Обучаюсь на заочном отделении по специальности инженер-программист и параллельно с этим уже работаю по своей будущей профессии.",
      country: "Беларусь",
      city: "Гомель",
      quote: "«Свобода ничего не стоит, если она не включает в себя свободу ошибаться.», — Махатма Ганди",
      age: 23
    },
    {
      id: 8,
      photo: "https://img.freepik.com/free-photo/mid-shot-man-with-backpack-in-woods_23-2148637063.jpg?w=826&t=st=1701179699~exp=1701180299~hmac=fe1ceb3b1bec4e7a1755839a9a2ab5c763e0c3bf790e9ccc5d1c467d17f6b3db",
      firstName: "Федор",
      lastName: "Карпман",
      job: ".NET developer",
      bio: "Закончил высшее образование в университете по специальности инженера-программиста.",
      country: "Беларусь",
      city: "Гомель",
      quote: "«Если вы думаете, что на что-то способны, вы правы; если думаете, что у вас ничего не получится - вы тоже правы.», — Генри Форд",
      age: 26
    },
    {
      id: 9,
      photo: "https://img.freepik.com/free-photo/close-up-of-a-young-businessman-holding-disposable-coffee-cup-in-hand-looking-at-camera_23-2148176166.jpg?w=826&t=st=1701179738~exp=1701180338~hmac=bd9c27c8790a8f241f2d286467d4762e8c680296f4610394b001acf27c00a9b9",
      firstName: "Александр",
      lastName: "Вага",
      job: "Java developer",
      bio: "Имею образование инженера, но после армии решил пойти в сферу программирования и стал инженером-программистом.",
      country: "Беларусь",
      city: "Минск",
      quote: "«Все дело в мыслях. Мысль — начало всего. И мыслями можно управлять. И поэтому главное дело совершенствования: работать над мыслями.», — Лев Толстой",
      age: 30
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