import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      height: 150,
      backgroundColor: 'rgb(79, 181, 78)',
      borderRadius: 20,
      margin: 20,
      marginBottom: 0,
    },
    innerContainer:{
      display:'flex',
      flexDirection:"row",
      justifyContent:"space-between",
      marginLeft:30,
      marginRight:30,
    },
    inin:{
      display:'flex',
     alignItems:'center'
  
    },
    title: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 20,
      padding: 20,
    },
    main:{
      color:'white',
      fontSize:20,
      fontWeight: 'bold',
      
    }
  });

  export default styles;