import React from "react"
import Header from "./components/Header"
import Users from "./components/Users/Users"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mbicycle from "./components/Mbicycle"
import store from "./components/Redux/store";
import { Provider } from "react-redux";
import JavaPage from "./components/Cards/JavaPage"
import NETPage from "./components/Cards/NETPage";
import FlutterPage from "./components/Cards/FlutterPage";
import ProjectsPage from "./components/Cards/ProjectsPage";
import JavaUsers from "./components/Users/JavaUsers";
import NETUsers from "./components/Users/NETUsers";
import FlutterUsers from "./components/Users/FlutterUsers";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Header />
          <Routes>
            {/* Главная страница */}
            <Route path="/" element={<Mbicycle />} />

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