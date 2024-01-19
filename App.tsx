import { Button, Text, TouchableHighlight,StyleSheet, View } from "react-native";

const App = ()=>{
  return(
    <View>
      <TouchableHighlight>
        <Text style={[style.button,style.Success]}>Success</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[style.button,style.primary]}>Primary</Text>
      </TouchableHighlight>

      <TouchableHighlight>
        <Text style={[style.button,style.danger]}>Danger</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[style.button,style.alert]}>alert</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[style.button,style.warning]}>Warning</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[style.button,style.error]}>Error</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[style.button,style.Press]}>Press</Text>
      </TouchableHighlight>
      
    </View>
  )
}
const style = StyleSheet.create({
main:{
  flex: 1,
},
button:{
  backgroundColor: '#bbb',
  color: '#fff',
  fontSize:24,
  textAlign:'center',
  padding:10,
  margin:10,
  borderRadius:10,
  shadowColor:'black',
  elevation:10,
  shadowOpacity:0.5
},
Success:{
  backgroundColor:'green',
},
primary:{
  backgroundColor:'blue',
},
danger:{
  backgroundColor:'yellow',
},
alert:{
  backgroundColor:'gray',
},
warning:{
  backgroundColor:'gold'
},
error:{
  backgroundColor:'red'
},
Press:{
  backgroundColor:'#9400d3'
}

})
export default App;
