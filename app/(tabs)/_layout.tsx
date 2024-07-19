import { icons } from "@/constants";
import { Tabs } from "expo-router";
import { Image, ImageSourcePropType, Text, View } from "react-native";

interface TabIconProps {
  icon: ImageSourcePropType;
  color: string;
  name: string;
  focused: boolean;
}

const TabIcon = ({ icon, color, name, focused }: TabIconProps) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="h-6 w-6"
      />
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
        style={{ color }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  const tabs = [
    {
      name: "Home",
      icon: icons.home,
    },
    {
      name: "Bookmark",
      icon: icons.bookmark,
    },
    {
      name: "Create",
      icon: icons.plus,
    },
    {
      name: "Profile",
      icon: icons.profile,
    },
  ];

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#ffa001",
          tabBarInactiveTintColor: "#cdcde0",
          tabBarStyle: {
            backgroundColor: "#161622",
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 84,
          },
        }}
      >
        {tabs.map(({ name, icon }) => (
          <Tabs.Screen
            key={name}
            name={name.toLowerCase()}
            options={{
              title: name,
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <TabIcon
                  icon={icon}
                  color={color}
                  name={name}
                  focused={focused}
                />
              ),
            }}
          />
        ))}
      </Tabs>
    </>
  );
};

export default TabsLayout;
