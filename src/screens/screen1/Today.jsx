import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Today = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today's Progress</Text>
      <View style={styles.innerContainer}>
        <View style={styles.inin}>
            <Text style={styles.main}>3/4</Text>
            <Text style={styles.below}>Workouts</Text>
        </View>
        <View style={styles.inin}>
            <Text style={styles.main}>750</Text>
            <Text style={styles.below}>Calories</Text>
        </View>
        <View style={styles.inin}>
            <Text style={styles.main}>62 min</Text>
            <Text style={styles.below}>Active Time</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 150,
    backgroundColor: 'rgb(79, 181, 78)',
    borderRadius: 20,
    margin: 20,
    marginBottom: 0,
  },
  innerContainer:{
    display:'flex',
    flexDirection:"row",
    justifyContent:"space-between",
    marginLeft:30,
    marginRight:30,
  },
  inin:{
    display:'flex',
   alignItems:'center'

  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    padding: 20,
  },
  main:{
    color:'white',
    fontSize:20,
    fontWeight: 'bold',
    
  }
});
export default Today;
