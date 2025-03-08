import { StyleSheet } from "react-native";

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

  export default styles;