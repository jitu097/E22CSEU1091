import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Navigation from './components/Navigation';
import TopUsers from './pages/TopUsers';
import TrendingPosts from './pages/TrendingPosts';
import Feed from './pages/Feed';
import { DataProvider } from './context/DataContext';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2196f3',
      light: '#64b5f6',
      dark: '#1976d2',
    },
    secondary: {
      main: '#f50057',
      light: '#ff4081',
      dark: '#c51162',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
});

function App() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <DataProvider>
            <Box
              sx={{
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
                backgroundImage: `
                  linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%),
                  radial-gradient(circle at 20% 20%, rgba(33, 150, 243, 0.1) 0%, transparent 50%),
                  radial-gradient(circle at 80% 80%, rgba(245, 0, 87, 0.1) 0%, transparent 50%)
                `,
                backgroundAttachment: 'fixed',
              }}
            >
              <Navigation />
              <Box
                component="main"
                sx={{
                  paddingTop: theme.spacing(8),
                  paddingBottom: theme.spacing(4),
                }}
              >
                <Routes>
                  <Route path="/top-users" element={<TopUsers />} />
                  <Route path="/trending-posts" element={<TrendingPosts />} />
                  <Route path="/feed" element={<Feed />} />
                </Routes>
              </Box>
            </Box>
          </DataProvider>
        </Router>
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;
