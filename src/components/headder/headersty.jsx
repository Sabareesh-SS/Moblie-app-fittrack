
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      height: 60,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 20,
    },
    innerContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    title: {
      fontSize: 25,
      fontWeight: "bold",
    },
    image: {
      width: 40,
      height: 40,
      borderRadius: 20,
      marginLeft: 10,
    },
  });

  export default styles;