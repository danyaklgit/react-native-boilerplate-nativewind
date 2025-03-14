import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white gap-4">
      <Text className="text-4xl font-bold text-primary">Primary color</Text>
      <Text className="text-4xl font-bold text-secondary">Secondary color</Text>
      <Text className="text-4xl font-bold text-tertiary">Tertiary color</Text>
      <Text className="text-4xl font-bold text-quaternary">Quaternary color</Text>
      <Text className="text-4xl font-bold text-quinary">Quinary color</Text>
    </View>
  );
}
