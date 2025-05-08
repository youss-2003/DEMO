import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { ChevronRight } from 'lucide-react-native';

export default function Home() {
  return (
    <View className="flex-1 bg-white">
    {/* Main Content */}
    <View className="flex-1 items-center justify-center px-8">
      {/* Illustration */}
      <Image
        source={{ uri: 'https://cdni.iconscout.com/illustration/premium/thumb/todo-list-illustration-download-in-svg-png-gif-file-formats--completed-task-checkbox-businessman-expert-finished-checklist-business-accomplishment-concepts-pack-illustrations-7285968.png' }}
        className="w-full h-64"
        style={{ resizeMode: 'contain' }}
      />
      
      {/* Text Content */}
      <View className="w-full mt-8 px-4">
        <Text className="text-3xl font-bold text-center text-gray-900 mb-4 leading-tight">
          Easiest Way to{'\n'}Manage Your Task
        </Text>
        
        <Text className="text-gray-500 text-center text-base mb-8">
          Organized all your task in list and project to help you build new habits
        </Text>
        
        {/* Get Started Button */}
        <Link href="/(tabs)" asChild>
          <TouchableOpacity className="bg-blue-500 rounded-full py-4 px-8 flex-row items-center justify-center">
            <Text className="text-white font-semibold text-lg mr-2">Get Started</Text>
            <ChevronRight className="text-white" size={20} strokeWidth={2.5} />
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  </View>
  );
}