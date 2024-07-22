import { Route, Routes } from 'react-router';
import { useState } from 'react';
import './App.css';
import Layout from './Components/Layout';
import Homepage from './pages/Homepage';
import Taskspage from './pages/Taskspage';
import Designerpage from './pages/Designerpage';
import { useThemeContext } from './theme/ThemeContextProvider';
import { ThemeProvider } from '@emotion/react';
import { Box } from '@mui/material';

function App() {
  const { theme } = useThemeContext();
  const [isDarkTheme, setDarkTheme] = useState(false);
  const [isEnLanguage, setEnLanguage] = useState(false);
  // const styleTheme = isDarkTheme ? '#36393e' : '#fff';
  // const bodyProject = document.querySelector('body');
  // bodyProject.style.backgroundColor = styleTheme;
  // const bgColorBoxProject = isDarkTheme ? 'background.paper' : 'primary.main';

  console.log(theme);

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{ width: '100%', height: '100vh', bgcolor: 'background.paper' }}
        color="purple"
      >
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
      </Box>
    </ThemeProvider>
  );
}

export default App;
