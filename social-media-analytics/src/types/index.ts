export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

export interface Post {
  id: string;
  userId: string;
  content: string;
  timestamp: string;
  image: string;
  comments: Comment[];
}

export interface Comment {
  id: string;
  postId: string;
  userId: string;
  content: string;
  timestamp: string;
}

export interface TopUser {
  id: string;
  name: string;
  email: string;
  avatar: string;
  postCount: number;
}

export interface TrendingPost {
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

export interface FeedPost {
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