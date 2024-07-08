import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: 0,
  },
  reducers: {
    activeUser: (state) => {
      state.value += 1
    }
  },
})

// Action creators are generated for each case reducer function
export const { activeUser } = userSlice.actions

export default userSlice.reducer