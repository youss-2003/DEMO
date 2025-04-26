import { View, Text, TouchableOpacity, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AppFooter() {
  const handlePortfolioPress = () => {
    Linking.openURL('https://youssef-ratbi-dev.netlify.app/'); 
  };

  return (
    <View className="py-4 bg-gray-100 border-t border-gray-200">
      <View className="flex-row items-center justify-center space-x-1">
        <Text className="text-sm text-gray-600">Developed by</Text>
        <TouchableOpacity 
          onPress={handlePortfolioPress}
          activeOpacity={0.7}
        >
          <View className="flex-row items-center">
            <Text className="text-sm font-medium text-blue-600">Youssef Ratbi</Text>
            <Ionicons name="open-outline" size={14} color="#3B82F6" className="ml-1" />
          </View>
        </TouchableOpacity>
      </View>
      
     
    </View>
  );
}