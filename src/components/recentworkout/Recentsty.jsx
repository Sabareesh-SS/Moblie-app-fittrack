import { StyleSheet } from "react-native";


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

  export default styles;