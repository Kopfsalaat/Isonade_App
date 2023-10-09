import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Screens from './screens';
import SettingsButton from './components/SettingsButton';

const Stack = createNativeStackNavigator();

export default function App()
{
    /**
     * Este es el componente que se encarga de la navegación de la aplicación.
     * En este caso, provee la navegación entre las pantallas de la aplicación.
     * se define una pantalla llamada "Home" y otra llamada "Settings".
     */
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Inicio">
                <Stack.Screen name="Inicio" component={Screens.Inicio} options={{ headerShown: false }}/>
                <Stack.Screen name="Home" component={Screens.Home} options={({navigation}) => ({headerRight: () => (<SettingsButton navigation={navigation}/>)})}/>
                <Stack.Screen name="Settings" component={Screens.Settings} />
                <Stack.Screen options={{ presentation: 'modal', headerShown: false}} name="ModalInfo" component={Screens.ModalInfo} />
                <Stack.Screen name="Map" component={Screens.Map} options={{ headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}