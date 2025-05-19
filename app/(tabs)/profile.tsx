import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Settings, LogOut } from 'lucide-react-native';

export default function Profile() {
  return (
    <ScrollView className="flex-1 bg-[#F2F4FF] p-6">
      {/* Profile Header */}
      <View className="items-center mt-6">
        <Image
          source={{ uri: 'https://avatars.githubusercontent.com/u/160614008?v=4' }}
          className="w-28 h-28 rounded-full mb-4"
        />
        <Text className="text-xl font-semibold text-[#1F2937]">Youssef Ratbi</Text>
        <Text className="text-gray-500">Full Stack Developer</Text>
      </View>

      {/* Info Section */}
      <View className="bg-white mt-6 p-4 rounded-2xl shadow-sm">
        <Text className="text-gray-400 mb-1">Email</Text>
        <Text className="text-[#111827] font-medium mb-4">youssef@example.com</Text>

        <Text className="text-gray-400 mb-1">Phone</Text>
        <Text className="text-[#111827] font-medium mb-4">+212 6 00 00 00 00</Text>

        <Text className="text-gray-400 mb-1">Location</Text>
        <Text className="text-[#111827] font-medium">Casablanca, Morocco</Text>
      </View>

      {/* Action Buttons */}
      <View className="mt-6 space-y-4">
        <TouchableOpacity className="bg-white rounded-xl p-4 flex-row items-center justify-between shadow-sm">
          <View className="flex-row items-center space-x-3">
            <Settings color="#6C5DD3" />
            <Text className="text-[#1F2937] font-medium">Account Settings</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity className="bg-white rounded-xl p-4 flex-row items-center justify-between shadow-sm">
          <View className="flex-row items-center space-x-3">
            <LogOut color="#EF4444" />
            <Text className="text-[#EF4444] font-medium">Log Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
