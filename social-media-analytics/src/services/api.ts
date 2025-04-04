import axios from 'axios';
import { User, Post, Comment } from '../types';

const API_BASE_URL = 'http://localhost:3000/api'; // Replace with actual API URL

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const fetchUsers = async (): Promise<User[]> => {
  const response = await api.get('/users');
  return response.data;
};

export const fetchPosts = async (): Promise<Post[]> => {
  const response = await api.get('/posts');
  return response.data;
};

export const fetchComments = async (): Promise<Comment[]> => {
  const response = await api.get('/comments');
  return response.data;
};

// Utility function to get random image URL
export const getRandomImage = (width: number = 400, height: number = 300): string => {
  return `https://picsum.photos/${width}/${height}`;
};

// Utility function to get random avatar URL
export const getRandomAvatar = (): string => {
  return `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`;
}; 