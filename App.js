import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HabilidadeScreen from './screens/HabilidadesScreen';
import PerfilScreen from './screens/PerfilScreen';
import ProjetosScreen from './screens/ProjetosScreen';

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <NavigationContainer>
                <Drawer.Navigator
                    initialRouteName="Perfil"
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: '#af1e90',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                        drawerActiveTintColor: '#a31eaf',
                        drawerActiveBackgroundColor: '#334155',
                        drawerLabelStyle: {
                            fontSize: 16,
                            fontWeight: '500',
                        },
                        drawerStyle: {
                            backgroundColor: '#f8fafc',
                            width: 260,
                        },
                    }}>
                    <Drawer.Screen name="Perfil" component={PerfilScreen} />
                    <Drawer.Screen name="Habilidades" component={HabilidadeScreen} />
                    <Drawer.Screen name="Projetos" component={ProjetosScreen} />
                </Drawer.Navigator>
            </NavigationContainer>
        </GestureHandlerRootView>
    );
}