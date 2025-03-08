import React, {useState} from 'react';
import {FlatList, ScrollView, StyleSheet} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import Weekly from './weekly';
import Header from './src/screens/screen1/header';
import Today from './src/screens/screen1/Today';
import Recent from './src/screens/screen1/Recent';
import Plans from './src/screens/screen1/Plans';
import Sleep from './src/screens/screen1/sleeptime';
import Button from './src/components/Button';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const data = [
    {key: 'Today', component: <Today />},
    {key: 'Weekly', component: <Weekly isDarkMode={isDarkMode} />},
    {key: 'Sleep', component: <Sleep isDarkMode={isDarkMode} />},
    {key: 'Recent', component: <Recent isDarkMode={isDarkMode} />},
    {key: 'Plans', component: <Plans isDarkMode={isDarkMode} />},
    {key: 'button',component:<Button/>}
  ];

  const renderItem = ({item}) => item.component;

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={[
          styles.container,
          {backgroundColor: isDarkMode ? '#333' : '#f5f5f5'},
        ]}>
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.key}
        />

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
