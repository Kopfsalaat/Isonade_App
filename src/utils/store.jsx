import { configureStore } from '@reduxjs/toolkit'
import * as store from '../store'

/**
 * Este es el store de redux, el cual se encarga de manejar el estado de la aplicación.
 * En este caso, maneja el estado del usuario, el cual tiene nombre y apellido
 */

export default configureStore({
  reducer: {
    user: store.user
  }
})