import { View, Text, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import ProjectCard from '../Components/ProjectCard';

export default function Home() {
  return (
    <ScrollView className="flex-1 bg-white px-4 pt-12">
      {/* Header */}
      <View className="flex-row justify-between items-center bg-indigo-500 rounded-3xl px-4 py-6">
        <View className="flex-row items-center">
          <Image
            source={{ uri: 'https://avatars.githubusercontent.com/u/160614008?v=4&size=64' }} // replace with your image
            className="w-14 h-14 rounded-full mr-4"
          />
          <View>
            <Text className="text-white text-sm">Welcome,</Text>
            <Text className="text-white font-bold text-lg">Youssef RATBI</Text>
          </View>
        </View>
        <TouchableOpacity className="bg-white/10 p-2 rounded-full border border-white">
          <Ionicons name="notifications-outline" size={20} color="white" />
        </TouchableOpacity>
      </View>

      {/* Search */}
      <View className="mt-4 flex-row items-center space-x-3">
        <View className="flex-1 bg-white rounded-xl shadow px-4 py-2 flex-row items-center">
          <Ionicons name="search" size={20} color="#999" />
          <TextInput
            placeholder="Search project"
            placeholderTextColor="#aaa"
            className="ml-2 flex-1 text-base text-gray-700"
          />
        </View>
        <TouchableOpacity className="bg-indigo-400 p-3 rounded-xl shadow">
          <Feather name="sliders" size={20} color="white" />
        </TouchableOpacity>
      </View>

     

      <View className="h-12" /> {/* Space for tab bar */}
    </ScrollView>
  );
}


