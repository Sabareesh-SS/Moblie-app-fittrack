import React, { useState } from 'react';
import {
  Alert,
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Datas from '../datas/Datas';
import styles from './Recentsty';

const Recent = ({ isDarkMode }) => {
  const { recent } = Datas();
  const [modalVisible, setModalVisible] = useState(false);

  const beginWorkout = () => {
    setModalVisible(false);
    Alert.alert('FitTract', 'Your workout has been started');
  };

  const handlePress = () => {
    setModalVisible(true);
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? '#000' : '#ffffff' },
      ]}
    >
      <Text style={[styles.title, { color: isDarkMode ? '#fff' : '#000' }]}>
        Recent Workouts
      </Text>

      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Start Workout</Text>
            <Text style={{ color: '#000' }}>
              Do you want to start this workout?
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <Pressable
                style={styles.modalButtoncen}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.cancel}>Cancel</Text>
              </Pressable>
              <Pressable
                style={styles.modalButton}
                onPress={beginWorkout}
              >
                <Text style={styles.modalButtonText}>Begin</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      <FlatList
        keyExtractor={item => item.id}
        data={recent}
        horizontal={true}
        nestedScrollEnabled={true}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={handlePress}
            style={[styles.card, { backgroundColor: item.color }]}
            key={item.id}
          >
            <View>
              <Text style={styles.what}>{item.what}</Text>
              <Text style={styles.work}>{item.work}</Text>
            </View>
            <View style={styles.inContainertwo}>
              <Text style={styles.infoText}>{item.time}</Text>
              <Text style={styles.infoText}>{item.cal}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};


export default Recent;
