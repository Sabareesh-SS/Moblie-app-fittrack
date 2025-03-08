import React, { useState } from 'react';
import { Button as RNButton, ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import styles from './buttonsty';


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



export default WorkoutButton;
