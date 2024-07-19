import { Text, TouchableOpacity } from "react-native";

interface CustomButtonProps {
  title: string;
  handlePress: () => void;
  containerStyle?: string;
  textStyles?: string;
  isLoading?: boolean;
}

const CustomButton = ({
  title,
  handlePress,
  containerStyle,
  textStyles,
  isLoading,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      // activeOpacity={}
      className={`min-h-[62px] items-center justify-center rounded-xl bg-secondary ${containerStyle} ${isLoading ? "opacity-50" : ""}`}
      style={{
        backgroundColor: "#ff9c01",
        minHeight: 62,
      }}
      disabled={isLoading}
    >
      <Text className={`font-psemibold text-lg text-primary ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
