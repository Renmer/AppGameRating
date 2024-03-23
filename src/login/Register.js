import * as React from 'react';
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { TextInput, Button, Text, Divider } from 'react-native-paper';

export default function Register({ navigation }) {
    const [ user, setUser ] = React.useState("");
    const [ password, setPassword ] = React.useState("");
    return(
        <KeyboardAvoidingView style={styles.container}>
            <Text style={{fontSize:23, marginBottom:23}}>
                    Crea una cuenta gratuita
            </Text>
            <View style={styles.inputContainer}>
                <TextInput 
                    mode='outlined'
                    label="Email"
                    value={user}
                    onChangeText={user => setUser(user)}
                    style={{marginBottom:10}}
                />
                <TextInput
                    mode='outlined'
                    label="Contraseña"
                    value={password}
                    secureTextEntry={true}
                    onChangeText={password => setPassword(password)}
                    style={{marginBottom:20}}
                />
                <Button 
                    mode="contained" 
                    onPress={() => navigation.navigate('register')} 
                    style={styles.button}
                    disabled
                >
                    Crear cuenta
                </Button>
            </View>
            <View style={styles.textButton}>
                <Text>
                    ¿Ya tienes una cuenta?
                </Text>
                <Button uppercase={false} onPress={() => navigation.navigate('login')}>
                    Inicia Sesion
                </Button>
            </View>
        </KeyboardAvoidingView>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    inputContainer: {
        width: "80%",
        marginBottom:20
    },
    textButton:{
        alignContent:'flex-end', 
        alignItems:'center',
         marginTop:30
    }
})