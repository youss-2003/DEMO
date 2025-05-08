import { Image, Text, TouchableOpacity, View } from "react-native";
import React from 'react'

export default function ProjectCard({ title, tasks, image, color }: { title: string; tasks: string; image: string; color: string }) {
  return<>
  <View className={`w-44 rounded-2xl p-4 ${color}`}>
        <Text className="text-white font-bold text-lg">{title}</Text>
        <Text className="text-white text-xs mb-3">{tasks} task</Text>
        <Image
          source={{ uri: image }}
          className="w-20 h-20 self-center"
          resizeMode="contain"
        />
        <TouchableOpacity className="mt-2 bg-white rounded-full py-1 px-4 self-start">
          <Text className="text-indigo-500 text-sm font-semibold">Detail</Text>
        </TouchableOpacity>
      </View>
  </>
}

