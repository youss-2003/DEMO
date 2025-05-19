import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
  ScrollView,
} from 'react-native';
import { Edit3, Trash } from 'lucide-react-native';
import { usePostStore } from '../store/postStore';
import clsx from 'clsx';

export default function PostsScreen() {
  const { posts, fetchPosts, addPost, updatePost, deletePost } = usePostStore();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [editId, setEditId] = useState<number | null>(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSubmit = () => {
    if (!title.trim() || !body.trim()) {
      Alert.alert('Both title and body are required');
      return;
    }

    if (editId !== null) {
      updatePost({ id: editId, title, body });
      setEditId(null);
    } else {
      addPost({ title, body });
    }

    setTitle('');
    setBody('');
  };

  const handleEdit = (post: { id: number; title: string; body: string }) => {
    setEditId(post.id);
    setTitle(post.title);
    setBody(post.body);
  };

  return (
    <ScrollView className="flex-1 bg-[#F2F4FF] px-4 pt-6">
      {/* Header */}
      <Text className="text-xl font-bold text-black mb-4">Manage Posts</Text>

      {/* Input Card */}
      <View className="bg-white rounded-2xl p-4 mb-4 shadow-sm">
        <TextInput
          placeholder="Title"
          value={title}
          onChangeText={setTitle}
          className="border border-gray-200 rounded-xl px-4 py-2 mb-2 text-black"
        />
        <TextInput
          placeholder="Body"
          value={body}
          onChangeText={setBody}
          className="border border-gray-200 rounded-xl px-4 py-2 mb-4 text-black"
        />

        <TouchableOpacity
          onPress={handleSubmit}
          className={clsx(
            'rounded-full py-3 items-center',
            editId ? 'bg-yellow-500' : 'bg-[#6C5DD3]'
          )}
        >
          <Text className="text-white font-semibold text-base">
            {editId ? 'Update Post' : 'Add Post'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Post List */}
      {posts.map((post) => (
        <View
          key={post.id}
          className="bg-white rounded-2xl px-4 py-3 mb-3 flex-row justify-between items-center shadow-sm"
        >
          <View className="flex-1 mr-4">
            <Text className="text-black font-semibold">{post.title}</Text>
            <Text className="text-gray-500">{post.body}</Text>
          </View>

          <View className="flex-row">
            <TouchableOpacity onPress={() => handleEdit(post)} className="p-2">
              <Edit3 color="#6C5DD3" size={18} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => deletePost(post.id)} className="p-2">
              <Trash color="#FF0000" size={18} />
            </TouchableOpacity>
          </View>
        </View>
      ))}

      <View className="h-10" />
    </ScrollView>
  );
}
