import axios from 'axios';
import {Post} from '../types/post';

const api = axios.create({
  baseURL: "https://article-be.vercel.app/article"
});

export const getPosts = async () => {
  const response = await api.get<Post[]>(`/list/0/0`);
  return response.data;
}

export const getPost = async (id: string) => {
  const response = await api.get<Post>(`/posts/${id}`);
  return response.data;
}

export const createPost = async (post: Post) => {
  const response = await api.post<Post>(`/posts`, post);
  return response.data;
}

export const updatePost = async (id: string, post: Post) => {
  const response = await api.put<Post>(`/posts/${id}`, post);
  return response.data;
}

export const deletePost = async (id: string) => {
  const response = await api.delete<Post>(`/posts/${id}`);
  return response.data;
}