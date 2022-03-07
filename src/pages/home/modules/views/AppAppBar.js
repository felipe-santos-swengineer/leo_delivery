import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';

const rightLink = {
  fontSize: '10px',
  color: 'common.white',
  ml: 3,
};

function AppAppBar() {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
            <Link
              variant="h6"
              underline="none"
              color="inherit"
              href="/premium-themes/onepirate/"
              sx={{ fontSize: "20px" }}
            >
              {'Leo Delivery'}
            </Link>
          </Box>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="/entrar"
              sx={rightLink}
            >
              {'Entrar'}
            </Link>
            <Link
              variant="h6"
              underline="none"
              href="/registrar"
              sx={{ ...rightLink, color: 'secondary.main' }}
            >
              {'Registrar'}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;
