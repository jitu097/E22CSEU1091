import React from 'react';
import { useData } from '../context/DataContext';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Avatar,
  Box,
  CircularProgress,
  useTheme,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { TrendingUp as TrendingUpIcon } from '@mui/icons-material';

const StyledCard = styled(Card)(({ theme }) => ({
  background: theme.palette.background.paper,
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(0, 0, 0, 0.1)',
  borderRadius: theme.spacing(2),
  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
  },
}));

const StatsBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  padding: theme.spacing(1, 2),
  borderRadius: theme.spacing(2),
  background: 'linear-gradient(45deg, rgba(33, 150, 243, 0.1) 30%, rgba(245, 0, 87, 0.1) 90%)',
  marginTop: theme.spacing(2),
}));

const TopUsers = () => {
  const { topUsers, loading, error } = useData();
  const theme = useTheme();

  // Debugging: Log the data
  console.log('Top Users Data:', topUsers);
  console.log('Loading:', loading);
  console.log('Error:', error);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="60vh"
      >
        <CircularProgress size={60} thickness={4} />
      </Box>
    );
  }

  if (error) {
    return (
      <Container>
        <Typography color="error" variant="h6" align="center">
          {error}
        </Typography>
      </Container>
    );
  }

  if (!loading && !error && topUsers.length === 0) {
    return (
      <Container>
        <Typography variant="h6" align="center" sx={{ color: theme.palette.text.primary }}>
          No top users found.
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box display="flex" alignItems="center" gap={2} mb={4}>
        <TrendingUpIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />
        <Typography variant="h4" component="h1" sx={{ color: theme.palette.text.primary }}>
          Top Users
        </Typography>
      </Box>
      <Grid container spacing={3}>
        {topUsers.map((user) => (
          <Grid item xs={12} sm={6} md={4} key={user.id}>
            <StyledCard>
              <CardContent sx={{ p: 3 }}>
                <Box display="flex" alignItems="center" gap={2}>
                  <Avatar
                    src={user.avatar}
                    alt={user.name}
                    sx={{
                      width: 64,
                      height: 64,
                      border: `2px solid ${theme.palette.primary.main}`,
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    }}
                  />
                  <Box>
                    <Typography variant="h6" sx={{ color: theme.palette.text.primary, fontWeight: 600 }}>
                      {user.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                      {user.email}
                    </Typography>
                  </Box>
                </Box>
                <StatsBox>
                  <Typography variant="body2" sx={{ color: theme.palette.text.primary }}>
                    {user.postCount} posts
                  </Typography>
                </StatsBox>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TopUsers;