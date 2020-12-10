import React from "react";
import { View, Text, Button } from "react-native";
import { StackNavigationProp   } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';



export function HomeScreen(): JSX.Element {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Hello world</Text>
      <Button
        title="Go to snapchat"
        onPress={() => navigation.navigate('SnapchatShared')}
      />
    </View>
  );
}
