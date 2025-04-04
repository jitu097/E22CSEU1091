import React, { createContext, useContext, useState, useEffect } from 'react';
import { TopUser, TrendingPost, FeedPost } from '../types';

interface DataContextType {
  users: any[];
  posts: any[];
  topUsers: TopUser[];
  trendingPosts: TrendingPost[];
  loading: boolean;
  error: string | null;
  refreshData: () => Promise<void>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [users, setUsers] = useState<any[]>([]);
  const [posts, setPosts] = useState<any[]>([]);
  const [topUsers, setTopUsers] = useState<TopUser[]>([]);
  const [trendingPosts, setTrendingPosts] = useState<TrendingPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch users
      const usersResponse = await fetch('http://localhost:3001/api/users');
      if (!usersResponse.ok) throw new Error('Failed to fetch users');
      const usersData = await usersResponse.json();
      setUsers(usersData);

      // Fetch posts
      const postsResponse = await fetch('http://localhost:3001/api/posts');
      if (!postsResponse.ok) throw new Error('Failed to fetch posts');
      const postsData = await postsResponse.json();
      setPosts(postsData);

      // Process top users
      const processedTopUsers: TopUser[] = usersData.map((user: any) => ({
        id: user.id,
        name: user.name,
        email: user.email,
        avatar: user.avatar || `https://i.pravatar.cc/150?img=${user.id}`,
        postCount: postsData.filter((post: any) => post.userId === user.id).length,
      }));
      setTopUsers(processedTopUsers);

      // Process trending posts
      const processedTrendingPosts: TrendingPost[] = postsData.map((post: any) => ({
        id: post.id,
        userId: post.userId,
        content: post.content,
        timestamp: post.timestamp,
        image: post.image || `https://picsum.photos/seed/${post.id}/800/600`,
        comments: post.comments || [],
        userName: usersData.find((user: any) => user.id === post.userId)?.name || 'Unknown User',
        userAvatar: usersData.find((user: any) => user.id === post.userId)?.avatar || `https://i.pravatar.cc/150?img=${post.userId}`,
        commentCount: post.comments?.length || 0,
      }));
      setTrendingPosts(processedTrendingPosts);

    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while fetching data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DataContext.Provider
      value={{
        users,
        posts,
        topUsers,
        trendingPosts,
        loading,
        error,
        refreshData: fetchData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
}; 