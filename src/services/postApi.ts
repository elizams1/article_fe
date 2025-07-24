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
  const response = await api.get<Post>(`/${id}`);
  return response.data;
}

export const createPost = async (post: Post) => {
  const response = await api.post<Post>(``,post);
  return response.data;
}

export const updatePost = async (id: string, post: Post) => {
  const response = await api.put<Post>(`/${id}`, post);
  return response.data;
}

export const deletePost = async (id: number) => {
  const response = await api.delete<Post>(`/${id}`);
  return response.data;
}

export const softDeletePost = async (id: number) => {
  const response = await api.post<Post>(`/soft-delete/${id}`);
  return response.data;
}