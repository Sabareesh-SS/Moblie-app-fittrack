import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import AnimatedNumber from '../animation-time/Animation-time';
import styles from './sleeptimesty';
const Sleep = ({ isDarkMode }) => {
  return (
    <View
      style={[
        styles.infocontainer2,
        { backgroundColor: isDarkMode ? '#000' : 'white' },
      ]}
    >
      <View style={{ display: 'flex', flexDirection: 'column' }}>
        <AnimatedNumber isDarkMode={isDarkMode} />
        <Text style={{ fontSize: 25, color: isDarkMode ? 'white' : 'grey' }}>
          Sleep Score
        </Text>
      </View>

      <View style={styles.rightColumn}>
        <View style={styles.row}>
          <Image
            source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/moon-symbol.png' }}
            style={[styles.icon, { tintColor: isDarkMode ? 'white' : 'black' }]}
          />
          <Text style={[styles.text, { color: isDarkMode ? 'white' : 'black' }]}>
            10:30 PM
          </Text>
        </View>

        <View style={styles.row}>
          <Image
            source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/sun.png' }}
            style={[styles.icon, { tintColor: isDarkMode ? 'white' : 'black' }]}
          />
          <Text style={[styles.text, { color: isDarkMode ? 'white' : 'black' }]}>
            7:00 AM
          </Text>
        </View>

        <View style={styles.row}>
          <Image
            source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/time.png' }}
            style={[styles.icon, { tintColor: isDarkMode ? 'white' : 'black' }]}
          />
          <Text style={[styles.text, { color: isDarkMode ? 'white' : 'black' }]}>
            9 h 14 m
          </Text>
        </View>
      </View>
    </View>
  );
};


export default Sleep;
