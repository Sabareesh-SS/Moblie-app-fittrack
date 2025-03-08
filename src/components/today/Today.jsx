import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import styles from './Todaysty';

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


export default Today;
