import * as React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, KeyboardAvoidingView,ScrollView } from 'react-native';
import { TextInput, Button, Text, Divider } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Google } from '@assets/Google';
import { Steam } from '@assets/Steam';

export default function Login({ navigation }) {
    const [ user, setUser ] = React.useState("");
    const [ password, setPassword ] = React.useState("");

    return(
<SafeAreaView style={{flex:1}}>
            <KeyboardAvoidingView style={{flex:1}} behavior="padding">
                <ScrollView contentContainerStyle={styles.container}>
                    <View>
                        <Image source={require('@assets/logo.png')} style={styles.logo}/>
                    </View>
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
                        />
                    </View>
                    <View>
                        <Button mode="contained" onPress={() => navigation.navigate('home')} style={styles.button}>
                            Iniciar Sesion
                        </Button>
                        <Button mode="text" uppercase={false} onPress={() => navigation.navigate('register')} style={styles.button}>
                            ¿Olvidaste la contraseña?
                        </Button>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Divider bold={true} style={{ width: 50, marginRight: 10 }} />
                            <Text>Tambien inicia con</Text>
                            <Divider bold={true} style={{ width: 50, marginLeft: 10 }} />
                        </View>
                        <View style={styles.buttonsContainer}>
                            <TouchableOpacity style={styles.icons}>
                                <Google/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.icons}>
                                <Steam/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
                <View style={{alignContent:'flex-end', alignItems:'center'}}>
                    <Text> ¿No tienes una cuenta? </Text>
                    <Button mode="text" uppercase={false} onPress={() => navigation.navigate('register')} style={styles.button}>
                        Registrate
                    </Button>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center', 
        justifyContent: 'center',
        alignSelf:'auto',
    },
    inputContainer: {
        marginBottom:30,
        width:'80%',
    },
    button:{
        marginBottom:10
    },
    buttonsContainer:{
        flexDirection: 'row', 
        alignItems:'center', 
        justifyContent:'center',
    },
    icons:{
        margin:10
    },
    logo: {
        resizeMode:'center',
        marginBottom:40
    },
    divider: {
        width: 50, 
        marginRight: 10
    }
})