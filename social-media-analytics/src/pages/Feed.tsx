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
  ChatBubble as ChatBubbleIcon,
  AccessTime as AccessTimeIcon,
} from '@mui/icons-material';

interface Comment {
  id: string;
  userId: string;
  content: string;
  timestamp: string;
}

interface FeedPost {
  id: string;
  userId: string;
  content: string;
  timestamp: string;
  image: string;
  comments: Comment[];
  userName: string;
  userAvatar: string;
  commentCount: number;
}

const StyledCard = styled(Card)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(0, 0, 0, 0.1)',
  borderRadius: theme.spacing(2),
  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
  },
}));

const CommentBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  background: 'rgba(0, 0, 0, 0.02)',
  borderRadius: theme.spacing(1),
  marginBottom: theme.spacing(2),
}));

const Feed = () => {
  const { posts, loading, error } = useData();
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
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Feed
      </Typography>
      <Grid container spacing={3}>
        {posts.map((post: FeedPost) => (
          <Grid item xs={12} key={post.id}>
            <StyledCard>
              <CardContent>
                <Box display="flex" alignItems="center" gap={2} mb={2}>
                  <Avatar
                    src={post.userAvatar}
                    alt={post.userName}
                    sx={{
                      width: 48,
                      height: 48,
                      border: `2px solid ${theme.palette.primary.main}`,
                    }}
                  />
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                      {post.userName}
                    </Typography>
                    <Box display="flex" alignItems="center" gap={1}>
                      <AccessTimeIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                      <Typography variant="caption" color="text.secondary">
                        {new Date(post.timestamp).toLocaleDateString()}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Typography variant="body1" paragraph>
                  {post.content}
                </Typography>
                {post.image && (
                  <Box
                    component="img"
                    src={post.image}
                    alt="Post content"
                    sx={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: 1,
                      mb: 2,
                    }}
                  />
                )}
                <Box display="flex" gap={1} mb={2}>
                  <Chip
                    icon={<ChatBubbleIcon />}
                    label={`${post.commentCount} comments`}
                    color="primary"
                    variant="outlined"
                  />
                </Box>
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>
                    Comments
                  </Typography>
                  {post.comments.map((comment: Comment) => (
                    <CommentBox key={comment.id}>
                      <Box display="flex" alignItems="center" gap={1} mb={1}>
                        <Avatar
                          src={`https://i.pravatar.cc/150?img=${comment.userId}`}
                          alt="User"
                          sx={{ width: 32, height: 32 }}
                        />
                        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                          {comment.userId}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {new Date(comment.timestamp).toLocaleDateString()}
                        </Typography>
                      </Box>
                      <Typography variant="body2">{comment.content}</Typography>
                    </CommentBox>
                  ))}
                </Box>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Feed; 