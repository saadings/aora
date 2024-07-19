import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, View } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import CustomButton from "@/components/CustomButton";

const App = () => {
  return (
    <SafeAreaView
      // className="!h-full !bg-primary"
      style={{
        backgroundColor: "#161622",
        height: "100%",
      }}
    >
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="flex h-full w-full items-center justify-center px-4">
          <Image
            source={images.logo}
            className="h-[84px] w-[130px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="h-[300px] w-full max-w-[380px]"
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text className="text-center text-3xl font-bold text-white">
              Discover Endless Possibilities with{" "}
              <Text className="text-secondary-200">Aora</Text>
            </Text>
            <Image
              source={images.path}
              className="absolute -bottom-2 right-24 h-[15px] w-[136px]"
              resizeMode="contain"
            />
          </View>
          <Text className="mt-7 text-center font-pregular text-sm text-gray-100">
            Where creativity meets innovation: embark on a journey of limitless
            exploration with Aora
          </Text>
          <CustomButton
            title="Continue with Email"
            handlePress={() => {}}
            containerStyle="mt-7 w-full"
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default App;
