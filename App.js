import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import ListGame from './components/listGame';
import AddGame from './components/addGame';
import Header from './components/header';

export default function App() {
  const gameData = require('./data/game.json');
  const [gameList, setGameList] = useState(gameData);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Header gameList={gameList} />
      <ListGame gameData={gameList} />
      <AddGame setGameList={setGameList} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8E7FD',
  },
});
