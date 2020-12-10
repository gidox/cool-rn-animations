import React from "react";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import { Text, View, Image, StyleSheet } from "react-native";
import { Video } from "expo-av";
import { SnapchatRoutes } from "./types";
import { SharedElement } from "react-navigation-shared-element";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  Extrapolate,
  interpolate,
  useSharedValue,
  useAnimatedGestureHandler,
  useAnimatedStyle,
} from "react-native-reanimated";

interface SnapchatStoryProps {
  navigation: NavigationProp<SnapchatRoutes, "SnapchatStory">;
  route: RouteProp<SnapchatRoutes, "SnapchatStory">;
}

export function SnapchatStory({
  route,
  navigation,
}: SnapchatStoryProps): JSX.Element {
  const { story } = route.params;
  const localTranslateX = useSharedValue(0);
  const localTranslateY = useSharedValue(0);

  const onGestureEvent = useAnimatedGestureHandler({
    onActive: ({ translationX, translationY }) => {
      localTranslateX.value = translationX;
      localTranslateY.value = translationY;
    },
  });

  const style = useAnimatedStyle(() => {
    return {
      flex: 1,
      transform: [
        { translateX: localTranslateX.value },
        { translateY: localTranslateY.value },
      ],
    };
  });
  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <Animated.View style={style}>
        <SharedElement id={story.id} style={{ flex: 1 }}>
          {!story.video ? (
            <Image
              source={story.source}
              style={[
                {
                  ...StyleSheet.absoluteFillObject,
                  width: undefined,
                  height: undefined,
                  resizeMode: "cover",
                  backgroundColor: "yellow",
                },
              ]}
            />
          ) : null}
          {story.video ? (
            <Video
              source={story.video}
              rate={1.0}
              isMuted={false}
              resizeMode="cover"
              shouldPlay
              isLooping
              style={[StyleSheet.absoluteFill]}
            />
          ) : null}
        </SharedElement>
      </Animated.View>
    </PanGestureHandler>
  );
}
