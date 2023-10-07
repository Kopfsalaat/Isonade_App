import Providers from "./src/utils/providers";
import App from "./src/app";
import { SafeAreaView } from "react-native";

export default () => {
  /**
   * Este es el archivo principal de la aplicación y es el que se ejecuta primero.
   * Aquí se importan los providers y se envuelve la aplicación en ellos.
   */
  return (
    <SafeAreaView style={{flex: 1}} forceInset={{ top: 'never' }}>
      <Providers>
        <App/>
      </Providers>
    </SafeAreaView>
  );
}