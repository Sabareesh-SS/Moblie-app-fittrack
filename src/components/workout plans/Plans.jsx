import React from 'react';
import styles from './planssty';
import {
  Text,
  View,
  SectionList,
  TouchableOpacity,
  Alert,
  Pressable,
} from 'react-native';
import Datas from '../datas/Datas';
import {SafeAreaView} from 'react-native-safe-area-context';

const Plans = ({isDarkMode}) => {
  const {plans} = Datas();

  const handleStart = workout => {
    Alert.alert('Workout', `Your ${workout} is Started `);
  };

  return (
    <SafeAreaView>
      <View
        style={[
          styles.container,
          {backgroundColor: isDarkMode ? '#000' : '#fff'},
        ]}>
            <View style={styles.firstcontainer}>
        <Text style={[styles.main, {color: isDarkMode ? '#fff' : '#000'}]}>
          Workout Plans
        </Text>
        <Pressable style={styles.pressable} onPress={() => Alert.alert('Add Plan', 'Add New Workout Plan')}>
            <Text style={{color:'#fff',fontWeight:"500"}}>+ ADD</Text>
        </Pressable>
        </View>

        <SectionList
          sections={plans}
          style={styles.list}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => (
            <View
              style={[
                styles.itemContainer,
                {backgroundColor: isDarkMode ? '#000' : '#fff'},
              ]}>
              <Text
                style={[
                  styles.itemText,
                  {color: isDarkMode ? '#fff' : '#000000'},
                ]}>
                {item}
              </Text>
              <TouchableOpacity onPress={() => handleStart(item)}>
                <Text style={styles.startButton}>Start</Text>
              </TouchableOpacity>
            </View>
          )}
          renderSectionHeader={({section: {title}}) => (
            <View style={styles.sectionHeaderContainer}>
              <Text style={styles.sectionHeader}>{title}</Text>
            </View>
          )}
          nestedScrollEnabled={true}
        />
      </View>
    </SafeAreaView>
  );
};



export default Plans;
