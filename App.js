import React from 'react';
import {SafeAreaView, StyleSheet, Text } from 'react-native';
import ChatBot from './src/index'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ChatBot />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
