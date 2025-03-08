import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  TouchableOpacity,
  Alert,
  Button,
  Pressable,
} from 'react-native';
import Datas from '../../components/Datas';
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

const styles = StyleSheet.create({
  container: {
    height: 730,
    margin: 20,
    marginTop: 0,
    elevation: 3,
    borderRadius: 20,
    paddingBottom: 10,
  },
    firstcontainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginRight:25,
    },
  main: {
    fontWeight: 'bold',
    fontSize: 22,
    padding: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderRadius: 10,
  },
  itemText: {
    fontSize: 18,
  },
  startButton: {
    fontSize: 16,
    color: 'rgb(79, 181, 78)',
    fontWeight: 'bold',
  },
  sectionHeaderContainer: {
    backgroundColor: 'rgb(79, 181, 78)',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  sectionHeader: {
    fontSize: 20,
    color:"#fff",
    fontWeight: 'bold',
  },
  list:{
    marginTop: -10,
    margin: 15,
  },
  pressable:{
    padding:15,
    paddingVertical:8,
    backgroundColor:'rgb(79, 181, 78)',
    borderRadius:20,
  }
});

export default Plans;
