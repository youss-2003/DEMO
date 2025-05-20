import React from 'react'
import { Tabs } from 'expo-router'
import { View, TouchableOpacity } from 'react-native'
import { Ionicons, FontAwesome, MaterialIcons } from '@expo/vector-icons'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function TabsLayout() {
  const insets = useSafeAreaInsets()

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          height: 80,
          backgroundColor: '#ffffff',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          paddingBottom: insets.bottom + 10,
          elevation: 0,
        },
      }}
      tabBar={({ state, descriptors, navigation }) => {
        return (
          <View className="flex-row justify-between px-6 bg-white rounded-t-3xl pb-6 pt-2">
            {state.routes.map((route, index) => {
              const { options } = descriptors[route.key]
              const isFocused = state.index === index

              const onPress = () => {
                if (!isFocused) {
                  navigation.navigate(route.name)
                }
              }

              if (route.name === 'add') {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={onPress}
                    className="absolute -top-6 left-1/2 -ml-9 w-16 h-16 bg-indigo-500 rounded-full items-center justify-center shadow-lg z-10"
                  >
                    <MaterialIcons name="edit" size={24} color="white" />
                  </TouchableOpacity>
                )
              }

              const color = isFocused ? '#5B37B7' : '#C0C0C0'
              let icon
              if (route.name === 'index') {
                icon = <Ionicons name="home" size={24} color={color} />
              } else if (route.name === 'stats') {
                icon = <FontAwesome name="bar-chart" size={24} color={color} />
              } else if (route.name === 'calendar') {
                icon = <Ionicons name="calendar" size={24} color={color} />
              } else if (route.name === 'profile') {
                icon = <Ionicons name="person" size={24} color={color} />
              }

              return (
                <TouchableOpacity
                  key={index}
                  onPress={onPress}
                  className="flex-1 items-center justify-center"
                >
                  {icon}
                </TouchableOpacity>
              )
            })}
          </View>
        )
      }}
    >
      <Tabs.Screen name="index" options={{}} />
      <Tabs.Screen name="stats" options={{}} />
      <Tabs.Screen name="calendar" options={{}} />
      <Tabs.Screen name="profile" options={{}} />
    </Tabs>
  )
}
