import { Route, Routes } from 'react-router';
import { useState } from 'react';

import './App.css';
import Layout from './Components/Layout';
import Homepage from './pages/Homepage';
import Taskspage from './pages/Taskspage';
import Designerpage from './pages/Designerpage';

function App() {
  const [isDarkTheme, setDarkTheme] = useState(false);
  const [isEnLanguage, setEnLanguage] = useState(false);
  // const styleTheme = isDarkTheme ? '#36393e' : '#fff';
  // const bodyProject = document.querySelector('body');
  // bodyProject.style.backgroundColor = styleTheme;

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              heandleTheme={setDarkTheme}
              heandleLanguage={setEnLanguage}
              isDarkTheme={isDarkTheme}
              isEnLanguage={isEnLanguage}
            />
          }
        >
          <Route index={true} element={<Homepage />} />
          <Route path="tasks" element={<Taskspage />} />
          <Route path="designer" element={<Designerpage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
