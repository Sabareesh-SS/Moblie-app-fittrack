import { StyleSheet } from 'react-native';


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

  export default styles;