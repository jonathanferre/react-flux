import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import CoursesPages from "./CoursesPage";

function App() {
  function getPage() {
    const route = window.location.pathname;
    if (route === "/courses") return <CoursesPages />;
    if (route === "/about") return <AboutPage />;
    return <HomePage />;
  }
  return (
    <div className="container-fuild">
      <Header />
      {getPage()}
    </div>
  );
}

export default App;
