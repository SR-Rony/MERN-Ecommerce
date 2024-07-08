import { configureStore } from '@reduxjs/toolkit'
const user = from './features/user/userSlice.js';

export default configureStore({
  reducer: {
    user:user
  },
})