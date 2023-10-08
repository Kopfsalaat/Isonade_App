import { createSlice } from '@reduxjs/toolkit'

export const watersInfoSlice = createSlice({
  name: 'watersInfo',
  initialState: {
    value: {
      location: null,
      watersNearby: null,
    }
  },
  reducers: {
    setLocation: (state, action) => {
      state.value.location = action.payload;
    },
    setWatersInfo: (state, action) => {
      state.value.watersNearby = action.payload;
    },
  }
})

export const { setLocation, setWatersInfo } = watersInfoSlice.actions

export default watersInfoSlice.reducer