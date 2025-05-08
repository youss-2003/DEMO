import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ArrowRight, Edit3, Trash } from 'lucide-react-native';

export default function Calendar() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editTaskIndex, setEditTaskIndex] = useState(null); // Index of the task being edited

  // Load tasks on mount
  useEffect(() => {
    const loadTasks = async () => {
      try {
        const storedTasks = await AsyncStorage.getItem('tasks');
        if (storedTasks) {
          setTasks(JSON.parse(storedTasks));
        }
      } catch (error) {
        console.error('Failed to load tasks:', error);
      }
    };
    loadTasks();
  }, []);

  // Save tasks to AsyncStorage
  const saveTasks = async (updatedTasks) => {
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
    } catch (error) {
      console.error('Failed to save tasks:', error);
    }
  };

  // Add or update task
  const handleAddOrUpdateTask = async () => {
    if (!newTask.trim()) {
      Alert.alert('Please enter a task.');
      return;
    }

    if (editTaskIndex !== null) {
      // Update existing task
      const updatedTasks = tasks.map((task, index) =>
        index === editTaskIndex ? { ...task, title: newTask.trim() } : task
      );
      setTasks(updatedTasks);
      setEditTaskIndex(null); // Reset edit mode
    } else {
      // Add new task
      const updatedTasks = [...tasks, { title: newTask.trim(), comments: 0 }];
      setTasks(updatedTasks);
    }

    setNewTask('');
    await saveTasks(tasks);
  };

  // Delete task
  const handleDeleteTask = async (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    await saveTasks(updatedTasks);
  };

  // Edit task (set the task to be edited)
  const handleEditTask = (index) => {
    setNewTask(tasks[index].title); // Set task title to the input
    setEditTaskIndex(index); // Set the task index being edited
  };

  return (
    <ScrollView className="flex-1 bg-[#F2F4FF] px-4 pt-6">
      {/* Trip Card */}
      <View className="bg-[#66CCFF] rounded-3xl p-4 mb-4">
        <View className="flex-row justify-between items-start">
          <TouchableOpacity className="bg-white/30 p-2 rounded-full">
            <Text className="text-white">{'<'}</Text>
          </TouchableOpacity>
        </View>
        <Text className="text-white text-2xl font-bold mt-2">Planning{'\n'}Trip</Text>
        <Text className="text-white mt-2">Member</Text>

        <View className="flex-row mt-2 items-center">
          {[...Array(3)].map((_, i) => (
            <Image
              key={i}
              source={{ uri: 'https://avatars.githubusercontent.com/u/160614008?v=4' }}
              className="w-8 h-8 rounded-full mr-[-8px]"
            />
          ))}
          <View className="w-8 h-8 rounded-full bg-white border border-[#66CCFF] items-center justify-center">
            <Text className="text-[#66CCFF] font-semibold text-xs">+3</Text>
          </View>
        </View>

        <Image
          source={{ uri: 'https://cdn3d.iconscout.com/3d/premium/thumb/homme-avatar-6299539-5187871.png' }}
          className="absolute right-0 bottom-0 w-28 h-28"
          resizeMode="contain"
        />
      </View>

      {/* Project Task Summary */}
      <View className="bg-white rounded-2xl flex-row items-center justify-between px-4 py-3 shadow-sm">
        <View className="flex-row items-center">
          <View className="bg-[#6C5DD3] p-3 rounded-xl mr-3" />
          <View>
            <Text className="text-gray-400">Project Task Team</Text>
            <Text className="font-semibold text-black">Total {tasks.length} Tasks</Text>
          </View>
        </View>
        <TouchableOpacity className="p-2 rounded-full border border-gray-200">
          <ArrowRight color="#A0A0A0" size={20} />
        </TouchableOpacity>
      </View>

      {/* Today Task Header */}
      <Text className="text-black text-xl font-bold mt-6 mb-4">Today Task</Text>

      {/* Tasks */}
      {tasks.map((task, index) => (
        <View
          key={index}
          className="bg-white rounded-2xl px-4 py-3 mb-3 flex-row justify-between items-center"
        >
          <View className="flex-row items-center">
            <View className="w-1 h-4 bg-sky-400 rounded-full mr-3" />
            <View>
              <Text className="text-black font-semibold">{task.title}</Text>
            </View>
          </View>

          <View className="flex-row items-center">
            <TouchableOpacity
              onPress={() => handleEditTask(index)}
              className="p-2 ml-2"
            >
              <Edit3 color="#6C5DD3" size={18} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => handleDeleteTask(index)}
              className="p-2 ml-2"
            >
              <Trash color="#FF0000" size={18} />
            </TouchableOpacity>
          </View>
        </View>
      ))}

      {/* New Task Input */}
      <TextInput
        placeholder="Enter new task..."
        className="bg-white rounded-xl px-4 py-3 mb-3"
        value={newTask}
        onChangeText={setNewTask}
      />

      {/* Add or Update Task Button */}
      <TouchableOpacity
        onPress={handleAddOrUpdateTask}
        className="bg-[#6C5DD3] rounded-full py-4 items-center justify-center flex-row mb-8"
      >
        <Text className="text-white text-base font-semibold mr-2">
          {editTaskIndex !== null ? 'Update Task' : 'Add New Task'}
        </Text>
        <Edit3 color="white" size={18} />
      </TouchableOpacity>
    </ScrollView>
  );
}
