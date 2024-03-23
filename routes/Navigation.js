import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
const Tab = createMaterialBottomTabNavigator();
//rutas para login
import Login from '@src/login/Login'
import Register from '@src/login/Register'
//rutas para pantalla principal
import Home from '@src/main/Home'
import Stats from '@src/main/Stats'
import  Profile from '@src/main/Profile'


const Stack = createNativeStackNavigator();
export default function Navigation() {
    const logueado = React.useState(true)
    return(
        <>
            {   logueado === true ?
                    <Stack.Navigator screenOptions={{ headerShown: false }}>
                        <Stack.Screen name='login' component={Login}/>
                        <Stack.Screen name='register' component={Register}/>
                    </Stack.Navigator>
                    :
                    <Tab.Navigator 
                        initialRouteName='Home'
                        activeColor="#f0edf6"
                        inactiveColor="#3e2465"
                        barStyle={{ backgroundColor: '#694fad' }}
                    >
                        <Tab.Screen 
                            name="Home"
                            options={{
                                tabBarLabel: 'Jugados',
                                tabBarIcon: 'gamepad-variant',
                            }}
                            component={Home} 
                        />
                        <Tab.Screen 
                            name="Stats" 
                            options={{
                                tabBarLabel: 'Estadisticas',
                                tabBarIcon: 'chart-bar',
                            }}
                            component={Stats} 
                        />
                        <Tab.Screen 
                            name="Profile" 
                            options={{
                                tabBarLabel: 'Perfil',
                                tabBarIcon: 'account-circle',
                            }}
                            component={Profile} 
                        />
                    </Tab.Navigator>
            }
        </>
    )
}