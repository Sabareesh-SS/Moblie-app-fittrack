import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 730,
    margin: 20,
    marginTop: 0,
    elevation: 3,
    borderRadius: 20,
    paddingBottom: 10,
  },
    firstcontainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginRight:25,
    },
  main: {
    fontWeight: 'bold',
    fontSize: 22,
    padding: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderRadius: 10,
  },
  itemText: {
    fontSize: 18,
  },
  startButton: {
    fontSize: 16,
    color: 'rgb(79, 181, 78)',
    fontWeight: 'bold',
  },
  sectionHeaderContainer: {
    backgroundColor: 'rgb(79, 181, 78)',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  sectionHeader: {
    fontSize: 20,
    color:"#fff",
    fontWeight: 'bold',
  },
  list:{
    marginTop: -10,
    margin: 15,
  },
  pressable:{
    padding:15,
    paddingVertical:8,
    backgroundColor:'rgb(79, 181, 78)',
    borderRadius:20,
  }
});

export default styles;