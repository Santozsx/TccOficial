import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, TextInput} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient';
import { styles } from './cadastro';
import Icon from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';

export default function cadastro(){

    const navigation = useNavigation();

    function navegaLogin(){
        navigation.navigate('Login')
    }

    return(
    <LinearGradient 
    locations={[0.4,0.7]}
    colors={['#16BDCA', '#111827']} 
   
    style={styles.gradient} 
    >   

        <View style={styles.container}>
            <Text style={styles.title}>
                SimuApp
            </Text>
        </View>

        <View style={styles.container}>
     
            <TextInput style={[styles.input, { paddingLeft: 15}]} placeholder='Nome:'/>
            
            <TextInput style={[styles.input, { paddingLeft: 15}]} placeholder='Sobrenome:'/>
          
           <TextInput style={[styles.input, { paddingLeft: 15}]} placeholder='Email:'/>

           <TextInput style={[styles.input, { paddingLeft: 15}]} placeholder='Senha:'/>

           <TextInput style={[styles.input, { paddingLeft: 15}]} placeholder='Confirmar Senha:'/>

         </View>

         <TouchableOpacity style={styles.cadastrar} onPress={navegaLogin}>
            <Text style={styles.Text}> Cadastrar </Text>
         </TouchableOpacity>

    </LinearGradient>
    );
}