import React from 'react';
import { Text, View, Button, StyleSheet, TextInput, TouchableHighlight, Image  } from 'react-native';


export default function Home(props)
{
    console.log(props);
    return (

        
        <View style={styles.container}>
            
            <Image source={require('../Image/carro.png')}
               style= {{width: 250, height: 250}}>
            </Image>
            <TouchableHighlight 
            title='IR PARA TELA DE CADASTRO!' 
            style={ styles.BtnTelaCadastro } 
            onPress={()=>props.navigation.navigate('Cadastro')}>
            <Text style={{color:'#98F5FF', textAlign: 'center', fontWeight:'bold', fontVariant: 'oldstyle-nums' }}>Nao tem uma conta? Cadastre aqui!</Text>
            </TouchableHighlight>

            <TouchableHighlight 
            title='Ir para tela de login' 
            style={ styles.BtnTelaLogin } 
            onPress={()=>props.navigation.navigate('Login')}>
            <Text 
            style={{color:'#98F5FF', textAlign: 'center', fontWeight:'bold' }}>Ir a tela de Login!</Text>
            </TouchableHighlight>

            
        </View>
    );
};


const styles = StyleSheet.create({

    container: {
        
            height:40,
            flex: 1,
            backgroundColor: '#98F5FF',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20
    
},

BtnTelaLogin: {
    width:'100%',
      height:50,
      backgroundColor:'#6E7B8B',
      borderRadius: 20,
      justifyContent:'center',
      marginBottom: 10
},

BtnTelaCadastro: {
    width:'100%',
      height:50,
      backgroundColor:'#6E7B8B',
      borderRadius: 20,
      justifyContent:'center',
      marginBottom: 10
      
}

});
