import React from 'react';
import Datas from './src/components/Datas';
import { StyleSheet, Text, View } from 'react-native';

const Weekly = ({ isDarkMode }) => {
  const { weekly_prog } = Datas();

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? "#222" : "#ffffff" }]}>
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

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 20,
    margin: 20,
    elevation: 5,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 20,
  },
  listContainer: {
    flexDirection: "row", 
    justifyContent: "space-around",
    alignItems: "center",
  },
  listItem: {
    alignItems: "center",
  },
  day: {
    fontSize: 16,
  },
});

export default Weekly;
