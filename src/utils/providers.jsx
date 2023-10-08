import { GluestackUIProvider, Text } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { Provider } from "react-redux";
import store from "./store";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function Providers({children})
{
    const [fontsLoaded, fontError] = useFonts({
        'Lemon-Regular': require('../../assets/fonts/Lemon-Regular.ttf'),
        'BalooTammudu2-VariableFont_wght': require('../../assets/fonts/BalooTammudu2-VariableFont_wght.ttf'),
    });

    if (!fontsLoaded && !fontError) {
      return null;
    }

    SplashScreen.hideAsync();
    
    return (
        <Provider store={store}>
            <GluestackUIProvider config={config}>
                {children}
            </GluestackUIProvider>
        </Provider>
    );
}