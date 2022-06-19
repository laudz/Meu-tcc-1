import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Touchable, TouchableOpacityComponent, TouchableHighlight, Image } from 'react-native';
import React, {useState} from 'react'; 
import { Picker } from 'react-native-web';
import { Input } from 'react-native-elements';

export default function Reserva(props)
{
    
    return (
        
        <View style={styles.container}>
            
            <Image source={require('../Image/carro.png')}
               style= {{width: 250, height: 250}}>
            </Image>
<View style={styles.selecionador}>
    <Text> Qual turno deseja?</Text>
    <Picker>
        <Picker.Item label ="     SELECIONE     " value= "     SELECIONE     " />
        <Picker.Item label ="MANHÃ" value= "A1" />
        <Picker.Item label ="TARDE" value= "A2" />
        <Picker.Item label ="NOITE" value= "A3" />
        
    </Picker>

    <Text style = {styles.titulo}>Selecione a vaga que desejar e confirme no botao abaixo:</Text>


</View>
<Text> Fileira 1 </Text>

   <View style={styles.Fila1}>
   <Text> </Text>
<TouchableOpacity 


      title='VAGA 1'
      onPress={()=>props.navigation.navigate('')}>
        <Image source={require('../Image/vaga.png')} style={{width: 50, height: 50}} />
      
        <Text style={{color:'#98F5FF', textAlign: 'center', fontWeight:'bold', fontVariant: 'oldstyle-nums' }}>Turno manhã</Text>
        



</TouchableOpacity>

<TouchableOpacity 
      title='VAGA 2'
      onPress={()=>props.navigation.navigate('')}> 
      <Image source={require('../Image/vaga.png')} style={{width: 50, height: 50}} />
<Text style={{color:'#98F5FF', textAlign: 'center', fontWeight:'bold', fontVariant: 'oldstyle-nums' }}>Turno Noite</Text>
</TouchableOpacity>

<TouchableOpacity 

      title='Turno Manhã'
      onPress={()=>props.navigation.navigate('')}>
        <Image source={require('../Image/vaga.png')} style={{width: 50, height: 50}} />
      
        <Text style={{color:'#98F5FF', textAlign: 'center', fontWeight:'bold', fontVariant: 'oldstyle-nums' }}>Turno manhã</Text>
        
</TouchableOpacity>

<TouchableOpacity 

      title='Turno Manhã'
      onPress={()=>props.navigation.navigate('')}>
        <Image source={require('../Image/vaga.png')} style={{width: 50, height: 50}} />
      
        <Text style={{color:'#98F5FF', textAlign: 'center', fontWeight:'bold', fontVariant: 'oldstyle-nums' }}>Turno manhã</Text>
        
</TouchableOpacity>

<TouchableOpacity 

      title='Turno Manhã'
      onPress={()=>props.navigation.navigate('')}>
        <Image source={require('../Image/vaga.png')} style={{width: 50, height: 50}} />
      
        <Text style={{color:'#98F5FF', textAlign: 'center', fontWeight:'bold', fontVariant: 'oldstyle-nums' }}>Turno manhã</Text>
        
</TouchableOpacity>

<TouchableOpacity 

      title='Turno Manhã'
      onPress={()=>props.navigation.navigate('')}>
        <Image source={require('../Image/vaga.png')} style={{width: 50, height: 50}} />
      
        <Text style={{color:'#98F5FF', textAlign: 'center', fontWeight:'bold', fontVariant: 'oldstyle-nums' }}>Turno manhã</Text>
        
</TouchableOpacity>

<TouchableOpacity 

      title='Turno Manhã'
      onPress={()=>props.navigation.navigate('')}>
        <Image source={require('../Image/vaga.png')} style={{width: 50, height: 50}} />
      
        <Text style={{color:'#98F5FF', textAlign: 'center', fontWeight:'bold', fontVariant: 'oldstyle-nums' }}>Turno manhã</Text>
        
</TouchableOpacity>

<TouchableOpacity 

      title='Turno Manhã'
      onPress={()=>props.navigation.navigate('')}>
        <Image source={require('../Image/vaga.png')} style={{width: 50, height: 50}} />
      
        <Text style={{color:'#98F5FF', textAlign: 'center', fontWeight:'bold', fontVariant: 'oldstyle-nums' }}>Turno manhã</Text>
        
</TouchableOpacity>

<TouchableOpacity 

      title='Turno Manhã'
      onPress={()=>props.navigation.navigate('')}>
        <Image source={require('../Image/vaga.png')} style={{width: 50, height: 50}} />
      
        <Text style={{color:'#98F5FF', textAlign: 'center', fontWeight:'bold', fontVariant: 'oldstyle-nums' }}>Turno manhã</Text>
        
</TouchableOpacity>

<TouchableOpacity 

      title='Turno Manhã'
      onPress={()=>props.navigation.navigate('')}>
        <Image source={require('../Image/vaga.png')} style={{width: 50, height: 50}} />
      
        <Text style={{color:'#98F5FF', textAlign: 'center', fontWeight:'bold', fontVariant: 'oldstyle-nums' }}>Turno manhã</Text>
        
</TouchableOpacity>

<TouchableOpacity 

      title='Turno Manhã'
      onPress={()=>props.navigation.navigate('')}>
        <Image source={require('../Image/vaga.png')} style={{width: 50, height: 50}} />
      
        <Text style={{color:'#98F5FF', textAlign: 'center', fontWeight:'bold', fontVariant: 'oldstyle-nums' }}>Turno manhã</Text>
        
</TouchableOpacity>

<TouchableOpacity 

      title='Turno Manhã'
      onPress={()=>props.navigation.navigate('')}>
        <Image source={require('../Image/vaga.png')} style={{width: 50, height: 50}} />
      
        <Text style={{color:'#98F5FF', textAlign: 'center', fontWeight:'bold', fontVariant: 'oldstyle-nums' }}>Turno manhã</Text>
        
</TouchableOpacity>
<TouchableOpacity 

      title='Turno Manhã'
      onPress={()=>props.navigation.navigate('')}>
        <Image source={require('../Image/vaga.png')} style={{width: 50, height: 50}} />
      
        <Text style={{color:'#98F5FF', textAlign: 'center', fontWeight:'bold', fontVariant: 'oldstyle-nums' }}>Turno manhã</Text>
        
</TouchableOpacity>



</View> 
<Text>Fileira 2</Text>
<View style={styles.FilaDois}>
    
<TouchableOpacity 

      title='VAGA 1'
      onPress={()=>props.navigation.navigate('')}>
        <Image source={require('../Image/vaga.png')} style={{width: 50, height: 50}} />
      
        <Text style={{color:'#98F5FF', textAlign: 'center', fontWeight:'bold', fontVariant: 'oldstyle-nums' }}>Turno manhã</Text>
        



</TouchableOpacity>

<TouchableOpacity 
      title='VAGA 2'
      onPress={()=>props.navigation.navigate('')}> 
      <Image source={require('../Image/vaga.png')} style={{width: 50, height: 50}} />
<Text style={{color:'#98F5FF', textAlign: 'center', fontWeight:'bold', fontVariant: 'oldstyle-nums' }}>Turno Noite</Text>
</TouchableOpacity>

<TouchableOpacity 

      title='Turno Manhã'
      onPress={()=>props.navigation.navigate('')}>
        <Image source={require('../Image/vaga.png')} style={{width: 50, height: 50}} />
      
        <Text style={{color:'#98F5FF', textAlign: 'center', fontWeight:'bold', fontVariant: 'oldstyle-nums' }}>Turno manhã</Text>
        
</TouchableOpacity>

<TouchableOpacity 

      title='Turno Manhã'
      onPress={()=>props.navigation.navigate('')}>
        <Image source={require('../Image/vaga.png')} style={{width: 50, height: 50}} />
      
        <Text style={{color:'#98F5FF', textAlign: 'center', fontWeight:'bold', fontVariant: 'oldstyle-nums' }}>Turno manhã</Text>
        
</TouchableOpacity>

<TouchableOpacity 

      title='Turno Manhã'
      onPress={()=>props.navigation.navigate('')}>
        <Image source={require('../Image/vaga.png')} style={{width: 50, height: 50}} />
      
        <Text style={{color:'#98F5FF', textAlign: 'center', fontWeight:'bold', fontVariant: 'oldstyle-nums' }}>Turno manhã</Text>
        
</TouchableOpacity>

<TouchableOpacity 

      title='Turno Manhã'
      onPress={()=>props.navigation.navigate('')}>
        <Image source={require('../Image/vaga.png')} style={{width: 50, height: 50}} />
      
        <Text style={{color:'#98F5FF', textAlign: 'center', fontWeight:'bold', fontVariant: 'oldstyle-nums' }}>Turno manhã</Text>
        
</TouchableOpacity>

<TouchableOpacity 

      title='Turno Manhã'
      onPress={()=>props.navigation.navigate('')}>
        <Image source={require('../Image/vaga.png')} style={{width: 50, height: 50}} />
      
        <Text style={{color:'#98F5FF', textAlign: 'center', fontWeight:'bold', fontVariant: 'oldstyle-nums' }}>Turno manhã</Text>
        
</TouchableOpacity>

<TouchableOpacity 

      title='Turno Manhã'
      onPress={()=>props.navigation.navigate('')}>
        <Image source={require('../Image/vaga.png')} style={{width: 50, height: 50}} />
      
        <Text style={{color:'#98F5FF', textAlign: 'center', fontWeight:'bold', fontVariant: 'oldstyle-nums' }}>Turno manhã</Text>
        
</TouchableOpacity>

<TouchableOpacity 

      title='Turno Manhã'
      onPress={()=>props.navigation.navigate('')}>
        <Image source={require('../Image/vaga.png')} style={{width: 50, height: 50}} />
      
        <Text style={{color:'#98F5FF', textAlign: 'center', fontWeight:'bold', fontVariant: 'oldstyle-nums' }}>Turno manhã</Text>
        
</TouchableOpacity>

<TouchableOpacity 

      title='Turno Manhã'
      onPress={()=>props.navigation.navigate('')}>
        <Image source={require('../Image/vaga.png')} style={{width: 50, height: 50}} />
      
        <Text style={{color:'#98F5FF', textAlign: 'center', fontWeight:'bold', fontVariant: 'oldstyle-nums' }}>Turno manhã</Text>
        
</TouchableOpacity>

<TouchableOpacity 

      title='Turno Manhã'
      onPress={()=>props.navigation.navigate('')}>
        <Image source={require('../Image/vaga.png')} style={{width: 50, height: 50}} />
      
        <Text style={{color:'#98F5FF', textAlign: 'center', fontWeight:'bold', fontVariant: 'oldstyle-nums' }}>Turno manhã</Text>
        
</TouchableOpacity>

<TouchableOpacity 

      title='Turno Manhã'
      onPress={()=>props.navigation.navigate('')}>
        <Image source={require('../Image/vaga.png')} style={{width: 50, height: 50}} />
      
        <Text style={{color:'#98F5FF', textAlign: 'center', fontWeight:'bold', fontVariant: 'oldstyle-nums' }}>Turno manhã</Text>
        
</TouchableOpacity>
<TouchableOpacity 

      title='Turno Manhã'
      onPress={()=>props.navigation.navigate('')}>
        <Image source={require('../Image/vaga.png')} style={{width: 50, height: 50}} />
      
        <Text style={{color:'#98F5FF', textAlign: 'center', fontWeight:'bold', fontVariant: 'oldstyle-nums' }}>Turno manhã</Text>
        
</TouchableOpacity>



</View> 

<Text> Fileira 3 </Text>
<View style={styles.FilaDois}>
<TouchableOpacity 

      title='VAGA 1'
      onPress={()=>props.navigation.navigate('')}>
        <Image source={require('../Image/vaga.png')} style={{width: 50, height: 50}} />
      
        <Text style={{color:'#98F5FF', textAlign: 'center', fontWeight:'bold', fontVariant: 'oldstyle-nums' }}>Turno manhã</Text>
        



</TouchableOpacity>

<TouchableOpacity 
      title='VAGA 2'
      onPress={()=>props.navigation.navigate('')}> 
      <Image source={require('../Image/vaga.png')} style={{width: 50, height: 50}} />
<Text style={{color:'#98F5FF', textAlign: 'center', fontWeight:'bold', fontVariant: 'oldstyle-nums' }}>Turno Noite</Text>
</TouchableOpacity>

<TouchableOpacity 

      title='Turno Manhã'
      onPress={()=>props.navigation.navigate('')}>
        <Image source={require('../Image/vaga.png')} style={{width: 50, height: 50}} />
      
        <Text style={{color:'#98F5FF', textAlign: 'center', fontWeight:'bold', fontVariant: 'oldstyle-nums' }}>Turno manhã</Text>
        
</TouchableOpacity>

<TouchableOpacity 

      title='Turno Manhã'
      onPress={()=>props.navigation.navigate('')}>
        <Image source={require('../Image/vaga.png')} style={{width: 50, height: 50}} />
      
        <Text style={{color:'#98F5FF', textAlign: 'center', fontWeight:'bold', fontVariant: 'oldstyle-nums' }}>Turno manhã</Text>
        
</TouchableOpacity>

<TouchableOpacity 

      title='Turno Manhã'
      onPress={()=>props.navigation.navigate('')}>
        <Image source={require('../Image/vaga.png')} style={{width: 50, height: 50}} />
      
        <Text style={{color:'#98F5FF', textAlign: 'center', fontWeight:'bold', fontVariant: 'oldstyle-nums' }}>Turno manhã</Text>
        
</TouchableOpacity>

<TouchableOpacity 

      title='Turno Manhã'
      onPress={()=>props.navigation.navigate('')}>
        <Image source={require('../Image/vaga.png')} style={{width: 50, height: 50}} />
      
        <Text style={{color:'#98F5FF', textAlign: 'center', fontWeight:'bold', fontVariant: 'oldstyle-nums' }}>Turno manhã</Text>
        
</TouchableOpacity>

<TouchableOpacity 

      title='Turno Manhã'
      onPress={()=>props.navigation.navigate('')}>
        <Image source={require('../Image/vaga.png')} style={{width: 50, height: 50}} />
      
        <Text style={{color:'#98F5FF', textAlign: 'center', fontWeight:'bold', fontVariant: 'oldstyle-nums' }}>Turno manhã</Text>
        
</TouchableOpacity>

<TouchableOpacity 

      title='Turno Manhã'
      onPress={()=>props.navigation.navigate('')}>
        <Image source={require('../Image/vaga.png')} style={{width: 50, height: 50}} />
      
        <Text style={{color:'#98F5FF', textAlign: 'center', fontWeight:'bold', fontVariant: 'oldstyle-nums' }}>Turno manhã</Text>
        
</TouchableOpacity>

<TouchableOpacity 

      title='Turno Manhã'
      onPress={()=>props.navigation.navigate('')}>
        <Image source={require('../Image/vaga.png')} style={{width: 50, height: 50}} />
      
        <Text style={{color:'#98F5FF', textAlign: 'center', fontWeight:'bold', fontVariant: 'oldstyle-nums' }}>Turno manhã</Text>
        
</TouchableOpacity>

<TouchableOpacity 

      title='Turno Manhã'
      onPress={()=>props.navigation.navigate('')}>
        <Image source={require('../Image/vaga.png')} style={{width: 50, height: 50}} />
      
        <Text style={{color:'#98F5FF', textAlign: 'center', fontWeight:'bold', fontVariant: 'oldstyle-nums' }}>Turno manhã</Text>
        
</TouchableOpacity>

<TouchableOpacity 

      title='Turno Manhã'
      onPress={()=>props.navigation.navigate('')}>
        <Image source={require('../Image/vaga.png')} style={{width: 50, height: 50}} />
      
        <Text style={{color:'#98F5FF', textAlign: 'center', fontWeight:'bold', fontVariant: 'oldstyle-nums' }}>Turno manhã</Text>
        
</TouchableOpacity>

<TouchableOpacity 

      title='Turno Manhã'
      onPress={()=>props.navigation.navigate('')}>
        <Image source={require('../Image/vaga.png')} style={{width: 50, height: 50}} />
      
        <Text style={{color:'#98F5FF', textAlign: 'center', fontWeight:'bold', fontVariant: 'oldstyle-nums' }}>Turno manhã</Text>
        
</TouchableOpacity>
<TouchableOpacity 

      title='Turno Manhã'
      onPress={()=>props.navigation.navigate('')}>
        <Image source={require('../Image/vaga.png')} style={{width: 50, height: 50}} />
      
        <Text style={{color:'#98F5FF', textAlign: 'center', fontWeight:'bold', fontVariant: 'oldstyle-nums' }}>Turno manhã</Text>
        
</TouchableOpacity>



</View> 







<TouchableOpacity 

      title='Confirmar'
      style={styles.btnConfirmar}
      
      onPress={()=>props.navigation.navigate('Pagamento')}> 
<Image source={require('../Image/confirmar.png')} style={{width: 50, height: 50}} />
</TouchableOpacity>
   



        </View>

        
    );
}

const styles = StyleSheet.create({

    container: {
            
            height:90,
            flex: 1,
            backgroundColor: '#98F5FF',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 180
    
},


     selecionador: {
    
    widht:100,
    height:100,
    backgroundColor: '#98F5FF',
    marginTop:40,
    
},

btnConfirmar: {
    width:'100%',
        height:30,
        justifyContent:'center',
        marginBottom: 10,
        alignItems:'center'
        

},

Fila1: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
            justifyContent: 'center',
},

FilaDois: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
            justifyContent: 'center',
},

FilaTres: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
            justifyContent: 'center',
            padding: '100'
},
titulo: {
    fontSize:17,
    fontWeight: 'bold',
    color: 'red',
    height:60
    
}

});
