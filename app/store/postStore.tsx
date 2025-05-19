import { create } from 'zustand';
import axios from 'axios';

type Post = {
  id?: number;
  title: string;
  body: string;
};

type PostStore = {
  posts: Post[];
  fetchPosts: () => void;
  addPost: (post: Post) => void;
  updatePost: (post: Post) => void;
  deletePost: (id: number) => void;
};

export const usePostStore = create<PostStore>((set) => ({
  posts: [],

  fetchPosts: async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    set({ posts: res.data.slice(0, 10) }); // Limit to 10 for UI
  },

  addPost: async (post) => {
    const res = await axios.post('https://jsonplaceholder.typicode.com/posts', post);
    set((state) => ({ posts: [res.data, ...state.posts] }));
  },

  updatePost: async (post) => {
    await axios.put(`https://jsonplaceholder.typicode.com/posts/${post.id}`, post);
    set((state) => ({
      posts: state.posts.map((p) => (p.id === post.id ? post : p)),
    }));
  },

  deletePost: async (id) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    set((state) => ({ posts: state.posts.filter((p) => p.id !== id) }));
  },
}));
