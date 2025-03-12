import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCards from './component/FlatCards';
import ElevatedCard from './component/ElevatedCard';
import FancyCards from './component/FancyCards';
import ActionCard from './component/ActionCard';
import ContactList from './component/ContactList';

const App = () => {
  return (
    <SafeAreaView >
      <ScrollView style={styles.container}>
        <FlatCards />
        <ElevatedCard />
        <FancyCards />
        <FancyCards />
        <ContactList />
        <ActionCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = {
  container: {
    backgroundColor: '#FFFFFF',
    color: '#000000',
    paddingTop: 20,
  },
}
