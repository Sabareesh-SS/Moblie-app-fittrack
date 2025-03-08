import React, {useState} from 'react';
import {FlatList, ScrollView, StyleSheet} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import Weekly from '../../components/weekkly/weekly';
import Header from '../../components/headder/header';
import Today from '../../components/today/Today';
import Recent from '../../components/recentworkout/Recent';
import Plans from '../../components/workout plans/Plans';
import Sleep from '../../components/sleeptime/sleeptime';
import Button from '../../components/downbutton/Button';

export default function Home() {
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
