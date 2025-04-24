import { TouchableOpacity, Text, ActivityIndicator, View } from 'react-native';

const Button = ({
  title,
  onPress,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  icon,
  className = '',
  textClassName = '',
}) => {
  // Variant styles
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700',
    secondary: 'bg-gray-200 hover:bg-gray-300',
    danger: 'bg-red-600 hover:bg-red-700',
    outline: 'border border-blue-600 bg-transparent',
    ghost: 'bg-transparent',
  };

  // Size styles
  const sizes = {
    sm: 'py-2 px-3',
    md: 'py-3 px-6',
    lg: 'py-4 px-8',
  };

  // Text colors
  const textColors = {
    primary: 'text-white',
    secondary: 'text-gray-800',
    danger: 'text-white',
    outline: 'text-blue-600',
    ghost: 'text-blue-600',
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
      className={`
        rounded-lg
        flex-row items-center justify-center
        ${variants[variant]}
        ${sizes[size]}
        ${disabled ? 'opacity-50' : ''}
        ${className}
      `}
    >
      {loading ? (
        <ActivityIndicator 
          color={variant === 'primary' || variant === 'danger' ? 'white' : '#3B82F6'} 
          className="mr-2" 
        />
      ) : icon ? (
        <View className="mr-2">{icon}</View>
      ) : null}

      <Text
        className={`
          font-medium text-center
          ${size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-lg' : 'text-base'}
          ${textColors[variant]}
          ${textClassName}
        `}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;