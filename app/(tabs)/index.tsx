import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Button from '../Components/Button';

export default function Index() {
  return <>
    <View className="flex-1 justify-center items-center bg-gray-100">
      <View className="w-11/12 max-w-md p-6 rounded-lg bg-white shadow-md">
        {/* Header */}
        <View className="mb-6 items-center">
          <Text className="text-2xl font-bold text-gray-800">Sign in</Text>
          <Text className="text-sm text-gray-600">Sign in to access your account</Text>
        </View>

        {/* Form */}
        <View className="space-y-4">
          {/* Email Input */}
          <View>
            <Text className="text-sm text-gray-700 mb-1">Email address</Text>
            <TextInput
              className="w-full px-4 py-3 border border-gray-300 rounded-md bg-gray-50 text-gray-800"
              placeholder="leroy@jenkins.com"
              placeholderTextColor="#9CA3AF"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          {/* Password Input */}
          <View>
            <View className="flex-row justify-between mb-1">
              <Text className="text-sm text-gray-700">Password</Text>
              <TouchableOpacity activeOpacity={0.7}>
                <Text className="text-xs text-blue-600">Forgot password?</Text>
              </TouchableOpacity>
            </View>
            <TextInput
              className="w-full px-4 py-3 border border-gray-300 rounded-md bg-gray-50 text-gray-800"
              placeholder="••••••••"
              placeholderTextColor="#9CA3AF"
              secureTextEntry
            />
          </View>
        </View>
 
        {/* Actions */}
        <View className="mt-6 space-y-3">
          <TouchableOpacity
            className="w-full py-3 bg-blue-600 rounded-md"
            activeOpacity={0.8}
          >
            <Text className="text-center text-white font-semibold">Sign in</Text>
          </TouchableOpacity>

          <View className="flex-row justify-center">
            <Text className="text-sm text-gray-600">Don't have an account yet? </Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Text className="text-sm text-blue-600">Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
     
    </View>
  </>

}
