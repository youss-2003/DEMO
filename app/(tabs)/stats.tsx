import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import ProjectCard from '../Components/ProjectCard'

export default function StatsScreen() {
  return (
    <ScrollView className="flex-1 bg-[#F2F4FF] px-4 pt-6">
      {/* Your Progress */}
      <View className="mt-4">
        <View className="flex-row justify-between items-center mb-3">
          <Text className="font-bold text-lg text-black">Your Progress</Text>
          <Text className="text-indigo-500 font-medium">See Detail</Text>
        </View>

        <View className="bg-white rounded-2xl p-4 shadow-sm">
          {/* Progress Bars */}
          <View className="flex-row justify-between items-end px-1">
            {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day, index) => (
              <View key={index} className="items-center space-y-1">
                <View className="w-3.5 h-24 bg-gray-200 rounded-md justify-end overflow-hidden">
                  <View className="h-12 bg-indigo-400" />
                </View>
                <Text className="text-xs text-gray-500">{day}</Text>
              </View>
            ))}
          </View>

          {/* Legend */}
          <View className="flex-row justify-center mt-5 space-x-6">
            <View className="flex-row items-center space-x-1">
              <View className="w-3 h-3 rounded-full bg-gray-300" />
              <Text className="text-xs text-gray-500">Planned</Text>
            </View>
            <View className="flex-row items-center space-x-1">
              <View className="w-3 h-3 rounded-full bg-indigo-400" />
              <Text className="text-xs text-gray-500">Completed</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Our Projects */}
      <View className="mt-8">
        <View className="flex-row justify-between items-center mb-3">
          <Text className="font-bold text-lg text-black">Our Projects</Text>
          <Text className="text-indigo-500 font-medium">See Detail</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View className="flex-row space-x-4">
            <ProjectCard
              title="Planning Trip"
              tasks="12"
              image="https://cdn-icons-png.flaticon.com/512/5988/5988313.png"
              color="bg-sky-400"
            />
            <ProjectCard
              title="Coding Games"
              tasks="12"
              image="https://static.vecteezy.com/system/resources/thumbnails/011/153/368/small_2x/3d-website-developer-working-on-laptop-illustration-png.png"
              color="bg-indigo-400"
            />
          </View>
        </ScrollView>
      </View>

      {/* Spacer for tab bar */}
      <View className="h-16" />
    </ScrollView>
  )
}
