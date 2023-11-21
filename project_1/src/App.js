import React, {useState} from "react"
import Header from "./components/Header"
import Users from "./components/Users"
import AddUser from "./components/AddUser"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mbicycle from "./components/Mbicycle"
import store from "./components/store";
import { Provider } from "react-redux";
import EditUser from "./components/EditUser";
import JavaPage from "./components/JavaPage";
import NETPage from "./components/NETPage";
import FlutterPage from "./components/FlutterPage";
import ProjectsPage from "./components/ProjectsPage";
import JavaUsers from "./components/JavaUsers";
import NETUsers from "./components/NETUsers";
import FlutterUsers from "./components/FlutterUsers";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Header />
          <Routes>
            {/* Главная страница */}
            <Route path="/" element={<Mbicycle />} />

            {/* Страница добавления пользователя */}
            <Route path="/add" element={
                <aside>
                  <AddUser />
                </aside>
              }
            />

             {/* Маршрут для отображения формы редактирования */}
             <Route path="/edit" element={
                <main>
                  <EditUser />
                </main>
              }
            />

            {/* Страница персонала */}
            <Route path="/users" element={
                <main>
                  <Users />
                </main>
              }
            />

            {/* Страницы для карточек */}
            <Route path="/java-development" element={ <JavaPage /> } />

            <Route path="/net-development" element={ <NETPage /> } />

            <Route path="/flutter-development" element={ <FlutterPage /> } />

            <Route path="/projects" element={ <ProjectsPage /> } />

            {/* Страницы для персонала */}
            
            <Route path="/java-users" element={ <JavaUsers /> } />

            <Route path="/net-users" element={ <NETUsers /> } />

            <Route path="/flutter-users" element={ <FlutterUsers /> } />

          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;