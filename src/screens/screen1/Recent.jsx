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
import Datas from '../../components/Datas';

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
        { backgroundColor: isDarkMode ? '#222' : '#ffffff' },
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

const styles = StyleSheet.create({
  container: {
    height: 220,
    borderRadius: 20,
    margin: 20,
    marginTop: 0,
    elevation: 5,
    padding: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  card: {
    height: 140,
    width: 200,
    borderRadius: 15,
    padding: 15,
    marginHorizontal: 10,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 0,
    justifyContent: 'space-between',
  },

  what: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  work: {
    color: '#fff',
    fontSize: 16,
  },
  inContainertwo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  infoText: {
    color: '#fff',
    fontSize: 14,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    marginLeft: 10,
  },
  modalButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  cancel: {
    color: '#fff',
    fontWeight: 'bold',
  },
  modalButtoncen: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    marginRight: 10,
  },
});

export default Recent;
