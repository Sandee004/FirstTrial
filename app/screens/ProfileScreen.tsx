import { Text, View } from "react-native";
import tw from "twrnc";

export default function ProfileScreen() {
  return (
    <View style={tw`flex-1 items-center justify-center bg-[#373b69]`}>
      <Text style={tw`text-white text-xl`}>Profile Screen</Text>
    </View>
  );
}
