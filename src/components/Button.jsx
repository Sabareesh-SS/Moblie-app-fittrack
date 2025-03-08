import React, { useState } from 'react';
import { Button as RNButton, ActivityIndicator, Text, TouchableOpacity, View, StyleSheet } from 'react-native';

const WorkoutButton = ({ isDarkMode }) => {
  const [isLoading, setIsLoading] = useState(false); 
  const [buttonText, setButtonText] = useState("Start Workout"); 

  const handlePress = () => {
    setIsLoading(true);
    setButtonText("Starting Workout...");

    setTimeout(() => {
      alert("Workout Started");
      setIsLoading(false); 
      setButtonText("Start Workout"); 
    }, 2000); 
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handlePress} disabled={isLoading}>
        {isLoading ? (
          <ActivityIndicator color="white" /> 
        ) : (
          <Text style={styles.buttonText}>{buttonText}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'rgb(79, 181, 78)', 
    paddingVertical: 12,
    width:380,
    borderRadius: 10,
    flexDirection: 'row', 
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default WorkoutButton;
