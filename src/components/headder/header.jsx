import React from "react";
import { Image,  Switch, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./headersty"

const Header = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <SafeAreaView>
      <View style={[styles.container, { backgroundColor: isDarkMode ? "#333" : "#f5f5f5" }]}>
        <Text style={[styles.title, { color: isDarkMode ? "#fff" : "#000" }]}>FitTrack</Text>
        <View style={styles.innerContainer}>
          <Switch
            trackColor={{ false: "#ccc", true: "#555" }}
            thumbColor={isDarkMode ? "grey" : "#f4f3f4"}
            onValueChange={() => setIsDarkMode((prev) => !prev)}
            value={isDarkMode}
          />
          <Image
            style={styles.image}
            source={{
              uri: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480/catalog/crunchyroll/c9947dfac4b57728c3c7eb81ed77ac09.jpg",
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};



export default Header;
