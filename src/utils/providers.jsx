import { GluestackUIProvider, Text } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { Provider } from "react-redux";
import { useCallback } from 'react';
import store from "./store";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();


export default function Providers({children})
{
    const [fontsLoaded] = useFonts({
        'Lemon-Regular': require('../../assets/fonts/Lemon-Regular.ttf'),
        'BalooTammudu2-VariableFont_wght': require('../../assets/fonts/BalooTammudu2-VariableFont_wght.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
        }
      }, [fontsLoaded]);
    
      if (!fontsLoaded) {
        return null;
      }

    /**
     * Este es el componente que se encarga de proveer los providers de la aplicación.
     * En este caso, provee el store de redux y el tema de GluestackUI.
     */
    return (
        <Provider store={store}>
            <GluestackUIProvider config={config}>
                {children}
            </GluestackUIProvider>
        </Provider>
    );
}