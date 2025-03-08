import React from 'react';
import Datas from '../datas/Datas';
import { StyleSheet, Text, View } from 'react-native';
import styles from './weeklysty';

const Weekly = ({ isDarkMode }) => {
  const { weekly_prog } = Datas();

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? "#000" : "#ffffff" }]}>
      <Text style={[styles.title, { color: isDarkMode ? "#fff" : "#000" }]}>Weekly Progress</Text>
      <View style={styles.listContainer}>
        {weekly_prog.map((item) => (
          <View key={item.id} style={styles.listItem}>
            <View
              style={{
                width: 30,
                height: 30,
                backgroundColor: item.color,
                borderRadius: 50,
                marginBottom: 5,
              }}
            />
            <Text style={[styles.day, { color: isDarkMode ? "#fff" : "#000" }]}>{item.day}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Weekly;
