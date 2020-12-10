import * as React from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "./screens";
import {
  SnapchatShared,
  SnapchatStory,
  SnapchatRoutes,
} from "./screens/SnapchatShared";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";

const Stack = createSharedElementStackNavigator<SnapchatRoutes>();

const screenOptions = {
  gestureEnabled: true,
  headerShown: false,
  cardOverlayEnabled: true,
  cardStyle: {
    backgroundColor: "transparent",
  },
};
export function MainNavigator(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SnapchatShared" component={SnapchatShared} />
        <Stack.Screen
          name="SnapchatStory"
          component={SnapchatStory}
          sharedElements={(route: any) => {
            const { id } = route.params.story;
            return [id];
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
