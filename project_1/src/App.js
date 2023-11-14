import React, {useState} from "react"
import Header from "./components/Header"
import Users from "./components/Users"
import AddUser from "./components/AddUser"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mbicycle from "./components/Mbicycle"
import store from "./components/store";
import { Provider } from "react-redux";

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
            <Route
              path="/add"
              element={
                <aside>
                  <AddUser />
                </aside>
              }
            />

            {/* Страница персонала */}
            <Route
              path="/users"
              element={
                <main>
                  <Users />
                </main>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;