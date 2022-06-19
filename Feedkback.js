import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Touchable, TouchableOpacityComponent, Image, TouchableHighlight } from 'react-native';
import React, {useState} from 'react'; 
import Slider from '@react-native-community/slider'
import { Input } from 'react-native-elements';


export default function Feedback(props)
{
    
    return (
        
        <View style={styles.container}>
            <Text></Text>

            <View style={styles.selecionador}>
            <Text> Gostou dos nossos serviços?, Nos avalie!!</Text>
            <Text>⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇</Text>
            
</View>




<View
style={styles.btnEstrelas}>
<TouchableOpacity
      title='1'
      
      onPress={()=>props.navigation.navigate('')}> 
<Image source={require('../Image/estrela.png')} style={{width: 50, height: 50}} />

</TouchableOpacity>

<TouchableOpacity
      title='1'
      
      onPress={()=>props.navigation.navigate('')}> 
<Image source={require('../Image/estrela.png')} style={{width: 50, height: 50}} />

</TouchableOpacity>
      
<TouchableOpacity
      title='1'
      
      onPress={()=>props.navigation.navigate('')}> 
<Image source={require('../Image/estrela.png')} style={{width: 50, height: 50}} />

</TouchableOpacity>

<TouchableOpacity
      title='1'
     
      onPress={()=>props.navigation.navigate('')}> 
<Image source={require('../Image/estrela.png')} style={{width: 50, height: 50}} />

</TouchableOpacity>
<TouchableOpacity
      title='1'
      
      onPress={()=>props.navigation.navigate('')}> 
<Image source={require('../Image/estrela.png')} style={{width: 50, height: 50}} />

</TouchableOpacity>

</View>
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
            padding:600
    
},
btnEstrelas: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
            justifyContent: 'center',
}


});
