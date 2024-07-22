import { NavLink, Outlet } from 'react-router-dom';
import { AppBar, Box, Link, Toolbar, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import FormControlLabel from '@mui/material/FormControlLabel';
import SwitchTheme from './SwitchTheme';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import SwitchLanguage from './SwitchLanguage';
import './Layout.css';
import { useThemeContext } from '../theme/ThemeContextProvider';

function Layout(props) {
  const { t, i18n } = useTranslation();
  const { heandleTheme, heandleLanguage, isDarkTheme, isEnLanguage } = props;
  const { toogleColorMode } = useThemeContext();

  const currentDate = Date.parse(new Date());
  const currentYear = new Date().getFullYear();
  const startFullYear = currentYear + '-01-01T00:00:00.000Z';
  const currentDay = (currentDate - Date.parse(startFullYear)) / 86400000;
  const currentWeek = Math.round((currentDay - 1) / 7 + 1);

  const setLanguage = () => {
    isEnLanguage ? i18n.changeLanguage('ru') : i18n.changeLanguage('en');
  };

  return (
    <>
      <AppBar position="static" color="default">
        <Toolbar>
          <FormControlLabel
            control={
              <SwitchTheme
                sx={{ m: 1 }}
                checked={isDarkTheme}
                onClick={() => {
                  heandleTheme(!isDarkTheme);
                  toogleColorMode();
                }}
              />
            }
          />
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            marginRight="50px"
          >
            <Typography>Ru</Typography>
            <SwitchLanguage
              inputProps={{ 'aria-label': 'ant design' }}
              checked={isEnLanguage}
              onClick={() => {
                heandleLanguage(!isEnLanguage);
                setLanguage();
              }}
            />
            <Typography>En</Typography>
          </Stack>

          <Typography sx={{ flexGrow: 1 }}>
            {t('main.currWorkWeek') + ' '}
            {currentWeek}
          </Typography>

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button color="inherit">
              <Link to="/" component={NavLink} color="inherit" underline="none">
                {t('main.home')}
              </Link>
            </Button>
            <Button color="inherit">
              <Link
                to="tasks"
                component={NavLink}
                color="inherit"
                underline="none"
              >
                {t('main.tasks')}
              </Link>
            </Button>
            <Button color="inherit">
              <Link
                to="designer"
                component={NavLink}
                color="inherit"
                underline="none"
              >
                {t('main.designer')}
              </Link>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Outlet />
    </>
  );
}

export default Layout;
