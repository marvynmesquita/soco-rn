import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#003b73',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'white'
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color:'white'
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 10,
    fontSize:20,
    color:'white'
    
    
  },
  button: {
    width: '100%',
    height:50,
    justifyContent:'center',
    borderRadius:10,
    backgroundColor:'#a5fff8',
    marginTop:20
  },
  buttonText: {
    color: '#003b73',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign:'center'
    
  },
});

export default styles;