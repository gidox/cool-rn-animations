import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {MainNavigator} from './src'
import { StyleSheet, Text, View } from 'react-native';

export default function App(): JSX.Element {
  return (
    <MainNavigator />
  );
}
