import { createSlice } from '@reduxjs/toolkit'

/**
 * Este es el store de redux, el cual se encarga de manejar el estado de la aplicación.
 * En este caso, maneja el estado del usuario, el cual tiene nombre y apellido
 */

export const userSlice = createSlice({
  name: 'user', // Nombre del slice
  initialState: {
    // Estado inicial del slice
    value: {
      name: '',
      lastName: ''
    }
  },
  // Reducers del slice. Se encargan de modificar el estado del slice
  // IMPORTANTE: siempre el primer parámetro de un reducer es state
  reducers: {
    // setName: función que se encarga de modificar el nombre del usuario
    setName: (state, action) => {
      state.value.name = action.payload;
    },
    // setLastName: función que se encarga de modificar el apellido del usuario
    setLastName: (state, action) => {
      state.value.lastName = action.payload;
    }
  }
})

// Exportación de los reducers del slice
export const { setName, setLastName } = userSlice.actions

// Exportación del reducer del slice
export default userSlice.reducer