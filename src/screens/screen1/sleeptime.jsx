import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import AnimatedNumber from '../../components/Animation-time';

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

const styles = StyleSheet.create({
  infocontainer2: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderRadius: 20,
    margin: 20,
    marginTop: 0,
    elevation: 5,
  },
  rightColumn: {
    right: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
  },
});

export default Sleep;
