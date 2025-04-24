import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons, FontAwesome, MaterialIcons } from '@expo/vector-icons';
export default function TabsLayout() {
  return <>
  <Tabs>
    {/* Home Tab */}
    <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
          headerShown: true,
        }}
      />
  </Tabs>
  </>
}