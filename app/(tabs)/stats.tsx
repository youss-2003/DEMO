import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Modal,
  Alert,
} from 'react-native';
import { Edit3, Trash, Plus } from 'lucide-react-native';
import { usePostStore } from '../store/postStore';
import clsx from 'clsx';

export default function PostsScreen() {
  const { posts, fetchPosts, addPost, updatePost, deletePost } = usePostStore();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [editId, setEditId] = useState<number | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

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
    } else {
      addPost({ title, body });
    }

    setTitle('');
    setBody('');
    setEditId(null);
    setModalVisible(false);
  };

  const handleEdit = (post: { id: number; title: string; body: string }) => {
    setEditId(post.id);
    setTitle(post.title);
    setBody(post.body);
    setModalVisible(true);
  };

  return (
    <View className="flex-1 bg-[#F2F4FF] px-4 pt-6">
      <Text className="text-xl font-bold text-black mb-4">Posts</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
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

        <View className="h-20" />
      </ScrollView>

      {/* Floating Add Button */}
      <TouchableOpacity
        onPress={() => {
          setEditId(null);
          setTitle('');
          setBody('');
          setModalVisible(true);
        }}
        className="absolute bottom-6 right-6 bg-[#6C5DD3] rounded-full p-4 shadow-md"
      >
        <Plus color="white" size={28} />
      </TouchableOpacity>

      {/* Modal for Add/Edit Post */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent
        onRequestClose={() => setModalVisible(false)}
      >
        <View className="flex-1 justify-center items-center bg-black/50 px-4">
          <View className="w-full bg-white rounded-2xl p-6">
            <Text className="text-lg font-bold text-black mb-4">
              {editId ? 'Edit Post' : 'Add New Post'}
            </Text>

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

            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              className="mt-3 items-center"
            >
              <Text className="text-[#6C5DD3] font-semibold">Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
