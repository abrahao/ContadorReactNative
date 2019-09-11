import React, {Component} from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';


class Aleat extends Component{
  constructor(props){
    super(props)
    this.state = {
      contadorInicial: 10
    }
  }

  render(){
    return(
      <View style={styles.telaAleat}>
        <Text style={styles.descricao}> Contador simples em React Native </Text>
        <Button
          title="Mais"
          onPress={() => this.setState({contadorInicial: this.state.contadorInicial + 1})}/>
        <Text style={styles.texto}> {this.state.contadorInicial} </Text>
        <Button
          title="Menos"
          onPress={() => this.setState({contadorInicial: this.state.contadorInicial - 1})}/>
          <Text style={styles.descricao}/>
      </View>
    )
  }
}

class App extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Aleat/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#ADD8E6',
    justifyContent: 'center'
  },
  texto:{
    textAlign: 'center',
    fontSize: 60
  },
  descricao:{
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: '#9370DB'
  },
  telaAleat:{
    backgroundColor: '#DCDCDC'
  }
})

export default App