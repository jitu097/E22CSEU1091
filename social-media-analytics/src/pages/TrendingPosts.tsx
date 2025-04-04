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
  Chip,
  useTheme,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  TrendingUp as TrendingUpIcon,
  ChatBubble as ChatBubbleIcon,
  AccessTime as AccessTimeIcon,
} from '@mui/icons-material';

const StyledCard = styled(Card)(({ theme }) => ({
  background: 'linear-gradient(45deg, #2196f3 30%, #f50057 90%)',
  color: 'white',
  borderRadius: theme.spacing(2),
  overflow: 'hidden',
  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
  },
}));

const StyledCardMedia = styled('div')(({ theme }) => ({
  height: 200,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6))',
  },
}));

const UserInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  background: 'rgba(0, 0, 0, 0.2)',
}));

const TrendingPosts = () => {
  const { trendingPosts, loading, error } = useData();
  const theme = useTheme();

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

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box display="flex" alignItems="center" gap={2} mb={4}>
        <TrendingUpIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />
        <Typography variant="h4" component="h1" sx={{ color: theme.palette.text.primary }}>
          Trending Posts
        </Typography>
      </Box>
      <Grid container spacing={3}>
        {trendingPosts.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <StyledCard>
              <StyledCardMedia
                style={{
                  backgroundImage: `url(${post.image})`,
                }}
              />
              <UserInfo>
                <Avatar
                  src={post.userAvatar}
                  alt={post.userName}
                  sx={{
                    border: '2px solid white',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                  }}
                />
                <Box>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: 'white',
                      fontWeight: 600,
                    }}
                  >
                    Posted by {post.userName}
                  </Typography>
                  <Box display="flex" alignItems="center" gap={1}>
                    <AccessTimeIcon sx={{ fontSize: 16, color: 'white' }} />
                    <Typography variant="caption" sx={{ color: 'white' }}>
                      {new Date(post.timestamp).toLocaleDateString()}
                    </Typography>
                  </Box>
                </Box>
              </UserInfo>
              <Typography
                variant="body1"
                sx={{
                  color: 'white',
                  mt: 2,
                  mb: 2,
                  px: 2,
                }}
              >
                {post.content}
              </Typography>
              <Box display="flex" gap={1} mt={2} px={2} pb={2}>
                <Chip
                  icon={<ChatBubbleIcon />}
                  label={`${post.commentCount} comments`}
                  color="primary"
                  sx={{
                    background: 'rgba(255, 255, 255, 0.75)',
                    color: 'black',
                    '& .MuiChip-icon': {
                      color: theme.palette.primary.main,
                    },
                  }}
                />
              </Box>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TrendingPosts;